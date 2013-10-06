'use strict';

angular.module('contacts',[]);
angular.module('search',[]);

angular.module('contactsApp', ['contacts','search', 'utils'])
    .config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', '../index.html')
//        .when('/contact/:id', {templateUrl: '/js/contacts/details.tmpl.html', controller: 'DetailsCtrl'})
}]);