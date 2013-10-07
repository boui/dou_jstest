'use strict';

var app = angular.module('contactsApp');

app.filter('inActiveGroups', function () {
    return function (contacts, groups, selectedContact, hideFn, showFn) {
        var activeGroups = _.filter(groups, function (item) {return item.active});
        if (_.isEmpty(activeGroups)) return contacts;

        var filtered = _.filter(contacts, function(c){

            return _.intersection(
                        _.map(c.groups, function(group){return group.id}),
                        _.map(activeGroups,function(group){return group.id}))
            .length > 0
        });

        var result = _.isEmpty(filtered) ? contacts:filtered;
        if(selectedContact && !_.contains(result, selectedContact)) hideFn();
        if(selectedContact && result.length == 1) showFn(result[0]);

        return result;
    }
});

app.filter('validDueToSearchInput', function(){
    return function(contacts, searchText, selectedContact, hideFn, showFn){
        var patt = new RegExp(searchText,"i");

        var result = null;
        if(!!searchText) {
            result = _.filter(contacts, function(c){
                return !_.isEmpty(c.name.toUpperCase().match(patt));
            })
        } else{ result = contacts };

        if(selectedContact && !_.contains(_.map(result, function(c){return c.id}), selectedContact.id)) hideFn();
        if(result.length == 1) showFn(result[0]);

        return result;
    }
})