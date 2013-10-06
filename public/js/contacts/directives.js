'use strict';

var contactsModule = angular.module('contacts');

contactsModule.directive('contactList', ['alertsService','$controller', function (alerts, $controller) {
    var directiveDefinitionObject = {
        priority: 0,
        templateUrl: '/js/contacts/contacts.tmpl.html',
        replace: false,
        transclude: false,
        scope: false,
        controller: function($scope, $element, $attrs) {
            var controller = $controller('ContactsCtrl', { $scope: $scope });
            $scope.selectedContact = "FROM CONTACT LIST";
        }
    };
    return directiveDefinitionObject;
}]);


//contactsModule.directive('contactDetails', ['alertsService', '$controller', function (alerts, $controller) {
//    var directiveDefinitionObject = {
//        priority: 0,
//        templateUrl: '/js/contacts/details.tmpl.html',
//        replace: false,
//        transclude: false,
//        scope: {selectedContact :'@selectedContact'},
//        require:'contactList',
//        controller: function($scope, $element, $attrs, $transclude) {
//            $scope.selectedContact = angular.element($element.parent()[0]);
//        }
//    };
//    return directiveDefinitionObject;
//}]);

contactsModule.directive('groupsList', ['alertsService', '$controller', function (alerts, $controller) {
    var directiveDefinitionObject = {
        priority: 0,
        templateUrl: '/js/contacts/groups.tmpl.html',
        replace: false,
        transclude: false,
        scope: false,
        controller: function($scope, $element, $attrs, $transclude) {
            var controller = $controller('GroupsCtrl', { $scope: $scope });
        }
    };
    return directiveDefinitionObject;
}]);

