(function () {
    'use strict';

    angular
        .module('terangular-app')
        .filter('ratings', Ratings);

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
