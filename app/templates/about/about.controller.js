(function() {
    'use strict';

    angular
        .module('terangular-app')
        .controller('AboutController', [AboutController]);

    function AboutController() {
        var vm = this;

        vm.test = "About Us...";
    }
}());
