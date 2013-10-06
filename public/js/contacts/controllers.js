var contactsModule = angular.module('contacts');

contactsModule.controller('GroupsCtrl', function ($scope, $rootScope) {

    $scope.selectGroup = function (group) {
        group.active = !group.active;
    }

    $rootScope.allGroups = [
        {title: 'friends', id: 0, active: false},
        {title: 'love', id: 1, active: false},
        {title: 'work', id: 2, active: false}
    ];
});

contactsModule.controller('ContactsCtrl', function ($scope) {
    $scope.allContacts = [
        {
            id: 0,
            name: 'Vasya Petrov',
            photoUrl:'http://m3.c.lnkd.licdn.com/mpr/mpr/shrink_80_80/p/7/000/1fb/091/15b5b3f.jpg',
            groups: [2],
            contacts: {
                gmail: [
                    'vasya@gmail.com'
                ],
                phones: [
                    {title: 'mobile', number: '0978434563'},
                    {title: 'work', number: '9389'},
                    {title: 'etc', number: '+78'}
                ]
            }
        },
        {
            id: 1,
            name: 'Dart Vaider',
            photoUrl:'http://m1.c.lnkd.licdn.com/mpr/mpr/shrink_60_60/p/3/000/0bf/12b/25cb8e8.jpg',
            groups: [0, 1],
            contacts: {
                gmail: [
                    'vasya@gmail.com'
                ],
                phones: [
                    {title: 'mobile', number: '0978434563'},
                    {title: 'work', number: ''},
                    {title: 'etc', number: '+72'}
                ]
            }
        }
    ];

    $scope.hideContact = function () {
        return true;
    }
});
//
contactsModule.controller('DetailsCtrl', function ($scope) {
    $scope.activeContact = null;
    $scope.showDetails = function (contact) {
        $scope.activeContact = contact;
    }

});