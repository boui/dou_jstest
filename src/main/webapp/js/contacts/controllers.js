var contactsModule = angular.module('contacts');

contactsModule.controller('GroupsCtrl', function ($scope, $rootScope, $http) {

    $scope.selectGroup = function (group) {
        group.active = !group.active;
    }

    $scope.newGroup = {};
    $scope.addGroup = function (title) {
        if (title && (!$rootScope.allGroups ||
            _.filter($rootScope.allGroups, function (g) {
                return g.title === title;
            })
                .length === 0)) {
            var groupToAdd = {title: title, id: -1, active: false};
            $scope.saveGroup(groupToAdd);
        }
    }

    $scope.deleteGroup = function (group) {
        $http({method:"DELETE", url:"/rest/group/"+group.id})
            .success(function(){
                $rootScope.allGroups.splice($rootScope.allGroups.indexOf(group), 1);
            }).error(function(data, status){
//                todo: alert
            })
    }

    $scope.saveGroup = function (group) {
        $http({method:"POST", url:"/rest/group", data:group})
            .success(function(data){
                $scope.newGroup.title = "";
                var existent = _.find($rootScope.allGroups, function(gr){ return gr.id == group.id})
                if(existent){
                    _.map(
                        $rootScope.allGroups, function(c){
                            if(c.id == existent.id){ return angular.copy(c,existent);}
                        });
                } else {
                    $rootScope.allGroups.unshift(data);
                }
            }
        ).error(function(data, status){
//                    todo: add alerts
            });
    }

    $scope.getAllGroups = function(){
        $http({method: 'GET', url: '/rest/group/all'})
            .success(function (data, status) {
                $rootScope.allGroups = data;
            })
            .error(function (data, status) {
                //todo: alerts
            });
    }

        $scope.getAllGroups();
   }
);

contactsModule.controller('ContactsCtrl', function ($scope, $http) {
    $scope.getAllContacts =  function(){
        $http({method: 'GET', url: '/rest/contact/all'})
            .success(function (data, status) {
                $scope.allContacts = data;
            })
            .error(function (data, status) {
                //todo: alerts
            })
    }

    $scope.getAllContacts();

});

contactsModule.controller('DetailsCtrl', function ($scope, $rootScope, $http) {
    $scope.activeContact = null;
    $scope.newContactProcessing = false;

    $scope.addContact = function () {
        if (!$scope.newContactProcessing) {
            $scope.$parent.allContacts.unshift({id:-1, name: 'New contact',contacts:{phone:"", email:""}, groups:[]});
            $scope.activeContact = $scope.$parent.allContacts[0];
            $scope.newContactProcessing = true;
        }
        $rootScope.editContactsMode = false;
    }


    $scope.saveContact = function (contact) {
        $scope.newContactProcessing = false;
        $http({method:"POST", url:"/rest/contact", data:JSON.stringify(contact)})
            .success(function(data, status){
                var existent = _.find($rootScope.allContacts, function(c){
                    return c.id == data.id
                });
                if(existent){
                    $rootScope.allContacts(data)
                } else {
                    _.map(
                        $rootScope.allContacts, function(c){
                            if(c.id = existent.id){ return angular.copy(c,existent);}
                    });
                }
            })
            .error()

        $scope.$parent.updateContactsMode()
    }

    $scope.deleteContact = function (contact) {
        $http({method:"DELETE", url:"/rest/contact/"+contact.id})
            .success(function(data, status){
                $scope.newContactProcessing = false;
                if ($scope.$parent.allContacts.indexOf(contact) != -1) {
                    $scope.$parent.allContacts.splice($scope.$parent.allContacts.indexOf(contact), 1);
                    $scope.activeContact = null
                }
        }).error(function(data, status){
                //todo: status
            })

    }

    $scope.isActive = function (id) {
        if (!!$scope.activeContact) {
            return id === $scope.activeContact.id;
        }
        return false;
    }


    $scope.addToGroup = function (group) {
        if (!$scope.activeContact.groups) {
            $scope.activeContact.groups = [];
        }

        $scope.activeContact.groups.unshift(group);
    }

    $scope.removeFromGroup = function (group) {
        if ($scope.activeContact.groups.indexOf(group) != -1)
            $scope.activeContact.groups.splice($scope.activeContact.groups.indexOf(group), 1);
    }


    $scope.unselectedGroups = null;

    $scope.showDetails = function (contact) {
        $scope.activeContact = contact;
    }

    $scope.hideDetails = function () {
        $scope.activeContact = null;
    }

});