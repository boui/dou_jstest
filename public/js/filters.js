'use strict';

var app = angular.module('contactsApp');

app.filter('inActiveGroups', function () {
    return function (contacts, groups) {
        var activeGroups = _.filter(groups, function (item) {return item.active});
        if (_.isEmpty(activeGroups)) return contacts;

        var filtered = _.filter(contacts, function(c){
                    return _.intersection(c.groups, _.map(activeGroups,function(group){return group.id})).length > 0
        });

        return _.isEmpty(filtered) ? contacts:filtered;
    }
});

app.filter('validDueToSearchInput', function(){
    return function(contacts, searchText){
        var patt = new RegExp(searchText,"i");
        return !!searchText ? _.filter(contacts, function(c){
            return !_.isEmpty(c.name.toUpperCase().match(patt));
        }):contacts;
    }
})