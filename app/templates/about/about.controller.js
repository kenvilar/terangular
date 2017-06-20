(function() {
    'use strict';

    angular
        .module('terangular-app')   //you shouldn't use [] if you already using an existing module name, ie. in (app.js)
        .controller('AboutController', [AboutController]);

    function AboutController() {
        var vm = this;

        vm.test = "About Us...";
    }
}());
