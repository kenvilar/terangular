(function () {
    'use strict';

    angular
        .module('terangular-app')
        //Put suffix 'Filter' in name if you want the filter as service, for example
        //ratingsFilter but in html it should be ng-bind="vm.student | ratings"
        //Just omit the suffix 'Filter' when you declare it in html template
        .factory('ratingsFilter', Ratings);

    function Ratings() {
        return function (data) {
            var ratings = parseInt(data);
            var res = "";

            for (var i = 0; i < ratings; i += 1) {
                res += "*";
            }

            return res;
        };
    }
}());
