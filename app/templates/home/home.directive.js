(function () {
    'use strict';

    angular
        .module('terangular-directive', [])
        .directive('studentList', StudentList)
        .directive('availableClasses', AvailableClasses);

    function StudentList() {
        return {
            restrict: 'AE',
            transclude: true, //inside directive tags: <hello-world>{here!}</hello-world>
            scope: {
                // for example: student.name = "Ken"; name="student.name" --> Ken
                name: "=",
                // for example: student.age = 15; age="student.age" --> student.age
                age: '@',
                // (function) for example: vm.callName = function(name){}; change-name="vm.changeName(student.name)"
                callName: "&"
            },
            template: 'Hello <span ng-bind="name"></span>! Age=<span ng-bind="age"></span>. <a href="" ng-click="callName()">Call my name!</a><span ng-transclude></span>',
            controller: function () {

            }
        };
    }

    function AvailableClasses() {
        return {
            restrict: 'AE',
            transclude: true,
            scope: {
                name: '=',
                rating: '=',
                callName: '&'
            },
            template: '<button ng-click="callName()">Register</button> <span ng-bind="name"></span> <span ng-bind="rating"></span>'
        };
    }
}());
