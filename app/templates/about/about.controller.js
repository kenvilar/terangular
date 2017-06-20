(function () {
    'use strict';

    angular
        .module('terangular-app')   //you shouldn't use [] if you already using an existing module name, ie. in (app.js)
        .controller('AboutController', ['aboutSrvc', AboutController])
        .service('aboutSrvc', aboutSrvc);

    function AboutController(aboutSrvc) {
        var vm = this;

        vm.test = aboutSrvc.test;
    }

    function aboutSrvc() {
        return {test: "About Us..."};
    }
}());
