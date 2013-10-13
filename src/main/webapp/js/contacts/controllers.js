var contactsModule = angular.module('contacts');

contactsModule.controller('GroupsCtrl', function ($scope, $rootScope) {

    $scope.selectGroup = function (group) {
        group.active = !group.active;
    }

    var counter = 2;

    $scope.newGroup = {}

    $scope.addGroup = function (title) {
        if(title && (!$rootScope.allGroups ||
            _.filter($rootScope.allGroups, function(g){return g.title === title;}).length===0)){
        counter += 1;

        var groupToAdd = {title: title, id: counter, active: false};
        $scope.newGroup.title = "";
        $rootScope.allGroups.unshift(groupToAdd);
        }
    }

    $scope.deleteGroup = function (group) {
        $rootScope.allGroups.splice($rootScope.allGroups.indexOf(group), 1);
    }

    $scope.saveGroup = function (group) {
        console.log("sent to server" + angular.toJson(group));
    }

    $rootScope.allGroups = [
        {title: 'friends', id: 0, active: false},
        {title: 'love', id: 1, active: false},
        {title: 'work', id: 2, active: false}
    ];
});

contactsModule.controller('ContactsCtrl', function ($scope, $http) {
    $http({method:'GET', url:'/rest/contact/all'})
        .success(function(data, status){
                $scope.allContacts = data;
        })
        .error(function(data, status){
            //todo: alerts
        })

});

contactsModule.controller('DetailsCtrl', function ($scope, $rootScope) {
    $scope.activeContact = null;
    $scope.newContactProcessing = false;

    $scope.addContact = function () {
        if(!$scope.newContactProcessing){
            $scope.$parent.allContacts.unshift({name:'New contact'});
            $scope.activeContact = $scope.$parent.allContacts[0];
            $scope.newContactProcessing = true;
        }
        $rootScope.editContactsMode = false;
    }

    $scope.isActive = function(id){
        if(!!$scope.activeContact){
            return id === $scope.activeContact.id;
        } return false;
    }

    $scope.saveContact = function (contact) {
        $scope.newContactProcessing = false;
        console.log("update server with " + angular.toJson(contact));
        $scope.$parent.updateContactsMode()
    }

    $scope.deleteContact = function (contact) {
        $scope.newContactProcessing = false;
        if ($scope.$parent.allContacts.indexOf(contact) != -1) {
            $scope.$parent.allContacts.splice($scope.$parent.allContacts.indexOf(contact), 1);
            $scope.activeContact = null
        }
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