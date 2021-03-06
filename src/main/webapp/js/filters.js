'use strict';

var app = angular.module('contactsApp');

app.filter('inActiveGroups', function ($rootScope) {
    return function (contacts, groups, selectedContact, hideFn, showFn) {

        var activeGroups = _.filter(groups, function (item) {return item.active});
        if (_.isEmpty(activeGroups)){
            if(!selectedContact && !!contacts) showFn(contacts[0]);
            return contacts;
        }

        var filtered = _.filter(contacts, function(c){

            return _.intersection(
                        _.map(c.groups, function(group){return group.id}),
                        _.map(activeGroups,function(group){return group.id}))
            .length === activeGroups.length
        });

        var result = _.isEmpty(filtered) ? null:filtered;
        if(result && !_.contains(result, selectedContact)) hideFn();
//        if(result) showFn(result[0]);

        $rootScope.noneFound = _.isEmpty(result);

        return result;
    }
});

app.filter('validDueToSearchInput', function($rootScope){
    return function(contacts, searchText, selectedContact, hideFn, showFn){
        var patt = new RegExp(searchText,"i");

        var result = null;
        if(!!searchText) {
            result = _.filter(contacts, function(c){
                return !_.isEmpty(c.name.toUpperCase().match(patt));
            })
        } else {result = contacts}

        if(selectedContact && !_.contains(_.map(result, function(c){return c.id}), selectedContact.id)) hideFn();
        if(!!result && !!searchText) showFn(result[0]);

        $rootScope.noneFound = _.isEmpty(result);
        return result;
    }
})

app.filter('notAdded', function ($rootScope) {
    return function (allGroups, activeUsersGroups) {
        var filtered =  _.filter(allGroups, function(group){
            return !_.contains(
                _.map(activeUsersGroups, function(g){ return g.id}),
                    group.id);
        });
        $rootScope.noneFound =_.isEmpty(filtered);
        return filtered;
    }
});