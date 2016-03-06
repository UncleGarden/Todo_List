/*global angular */
var app = angular.module('myTodo', []);

app.controller('todoCtrl', function ($scope) {
    "use strict";
    $scope.todoList = [];
    $scope.date = new Date();

    $scope.todoAdd = function () {
        $scope.todoList.push({todoText: $scope.todoInput, done: false});
        $scope.todoInput = "";
    };

    $scope.remove = function () {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function (x) {
            if (!x.done) { $scope.todoList.push(x); }
        });
    };
});

app.directive("currentDate", function () {
    "use strict";
    return {
        template: "Current Date: {{ date | date : 'yyyy-MM-dd HH:mm:ss' }}"
    };
});