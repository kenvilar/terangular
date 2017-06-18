(function(){
    'use strict';

    angular
        .module('terangular-route', ['ngRoute'])
        .config(['$locationProvider', '$routeProvider', TerangularRoute]);

    function TerangularRoute($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
            .when('/', {
                templateUrl: "templates/home/home.html",
                controller: "HomeController",
                controllerAs: "vm"
            })
            .when('/about', {
                templateUrl: "templates/about/about.html",
                controller: "AboutController",
                controllerAs: "vm"
            })
            .otherwise({
                redirectTo: "/"
            });
    }

}());
