(function () {
    'use strict';

    angular
        .module('terangular-app')   //you shouldn't use [] if you already using an existing module name, ie. in (app.js)
        .controller('AboutController', ['aboutSrvc', 'AboutFactory', AboutController])
        .service('aboutSrvc', aboutSrvc);

    function AboutController(aboutSrvc, AboutFactory) {
        var vm = this;

        vm.test = aboutSrvc.test;

        vm.artist = AboutFactory.getArtist();
    }

    function aboutSrvc() {
        return {test: "About Us..."};
    }
}());
