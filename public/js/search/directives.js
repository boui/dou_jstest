'use strict';

var searchModule = angular.module('search');

searchModule.directive('searchContact', ['alertsService','$rootScope', function (alerts, $rootScope) {
    var directiveDefinitionObject = {
        priority: 0,
        templateUrl: '/js/search/search.tmpl.html',
        replace: false,
        transclude: false,
        scope: false,
        controller: function($scope, $element, $attrs) {
            $rootScope.searchText = "";
        }
    };
    return directiveDefinitionObject;
}]);

