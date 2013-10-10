'use strict';

angular.module('contacts',[]);
angular.module('search',[]);

angular.module('contacts').controller('EditModeController', ['$scope','$rootScope',function($scope, $rootScope){
    $rootScope.editGroupsMode = true;
    $rootScope.editContactsMode = true;
    $scope.updateGroupsMode = function(){
        $rootScope.editGroupsMode = !$rootScope.editGroupsMode;
    }
    $scope.updateContactsMode = function(){
        $rootScope.editContactsMode = !$rootScope.editContactsMode;
    }
}]);

angular.module('contactsApp', ['contacts','search', 'utils'])
    .config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', '../index.html')
//        .when('/contact/:id', {templateUrl: '/js/contacts/details.tmpl.html', controller: 'DetailsCtrl'})
}]);

