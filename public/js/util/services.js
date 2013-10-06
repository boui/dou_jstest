/*global define */

'use strict';

var utilsModule = angular.module('utils', ['ui.growl']);

utilsModule.service('alertsService', ['$growl', function($growl){
        var display = function(type, msg){
            $growl.box('Contact list says:', msg, {
                clazz: type,
                sticky: false
            }).open();
        }

        return {
            display : display
        }

}]);

