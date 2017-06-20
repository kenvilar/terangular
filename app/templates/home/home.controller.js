(function () {
    'use strict';

    angular
        .module('terangular-app')
        .controller('HomeController', ['ratingsFilter', HomeController]);

    function HomeController(ratingsFilter) {
        var vm = this;

        vm.test = "Homepage...";

        vm.callName = function (name) {
            alert(name + " was called!");
        };

        vm.students = [
            {'name': 'Jack', 'age': 20},
            {'name': 'Jill', 'age': 21},
            {'name': 'Romeo', 'age': 22},
            {'name': 'Juliet', 'age': 23}
        ];

        vm.availableClasses = [
            {'name': 'Chemistry', rating: 2},
            {'name': 'Physics', rating: 5},
            {'name': 'History', rating: 4},
            {'name': 'Biology', rating: 1}
        ];

        vm.myRating = ratingsFilter(4);
    }
}());
