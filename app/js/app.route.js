(function(){
    'use strict';

    angular
        .module('terangular-route', ['ngRoute'])
        .config(['$locationProvider', '$routeProvider', TerangularRoute]);

    function TerangularRoute($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
            .when("/", {
                //language=HTML
                template: "<h1>Homepage</h1>"
            })
            .when("/about", {
                //language=HTML
                template: "<h1>About Us</h1>"
            })
            .otherwise({
                redirectTo: "/"
            });
    }

}());
