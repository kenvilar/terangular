(function() {
    'use strict';

    angular
        .module('terangular-directive', [])
        .directive('helloWorld', HelloWorld);

    function HelloWorld() {
        return {
            restrict: 'AE',
            transclude: true, //inside directive tags: <hello-world>{here!}</hello-world>
            scope: {
                // for example: student.name = "Ken"; name="student.name" --> Ken
                name: "=",
                // for example: student.age = 15; age="student.age" --> student.age
                age: '@',
                // (function) for example: vm.changeName = function(name){}; change-name="vm.changeName(student.name)"
                changeName: "&"
            },
            template: 'Hello {{ name }}, {{ age }} <a href="" ng-click="changeName()">Call my name!</a>' +
                    '<span ng-transclude></span>',
            controller: function() {

            }
        };
    }
}());
