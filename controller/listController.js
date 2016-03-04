/*global angular */
var app = angular.module('myTodo', []);

app.controller('todoCtrl', function ($scope) {
    "use strict";
    $scope.todoList = [{todoText: 'Clean House', done: false}];

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
