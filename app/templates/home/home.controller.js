(function() {
    'use strict';

    angular
        .module('terangular-app')
        .controller('HomeController', [HomeController]);

    function HomeController() {
        var vm = this;

        vm.test = "Homepage...";

        vm.changeName = function (name) {
            alert(name + " was called!");
        };

        vm.students = [
            {'name': 'Jack', 'age': 20},
            {'name': 'Jill', 'age': 21},
            {'name': 'Romeo', 'age': 22},
            {'name': 'Juliet', 'age': 23}
        ]
    }
}());
