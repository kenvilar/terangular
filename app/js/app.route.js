(function(){
    'use strict';

    angular
        .module('terangular-route', ['ui.router'])
        .config(['$locationProvider', '$stateProvider', '$urlRouterProvider', TerangularRoute]);

    function TerangularRoute($locationProvider, $stateProvider, $urlRouterProvider) {
        $locationProvider.hashPrefix('!');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: "templates/home/home.html",
                controller: "HomeController",
                controllerAs: "vm"
            })
            .state('about', {
                url: '/about',
                templateUrl: "templates/about/about.html",
                controller: "AboutController",
                controllerAs: "vm"
            });

        $urlRouterProvider.otherwise('/'); //needed by $stateProvider
    }

}());
