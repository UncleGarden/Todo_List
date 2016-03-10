/*global angular */
var app = angular.module('myTodo', []);

app.controller('todoCtrl', function ($scope) {
    "use strict";
    $scope.allList = [];
    $scope.activeList = [];
    $scope.completeList = [];
    $scope.date = new Date();

    
    $scope.all = true;
    $scope.active = false;
    $scope.complete = false;
    
    $scope.get_all = function () {
        $scope.all = true;
        $scope.active = false;
        $scope.complete = false;
    };
    
    $scope.get_active = function () {
        $scope.all = false;
        $scope.active = true;
        $scope.complete = false;
    };
    
    $scope.get_complete = function () {
        $scope.all = false;
        $scope.active = false;
        $scope.complete = true;
    };

    $scope.add = function () {
        $scope.allList.push({todoText: $scope.todoInput, done: false});
        $scope.activeList.push({todoText: $scope.todoInput, done: false});
        $scope.todoInput = "";
    };

    $scope.remove = function () {
        var oldList = $scope.allList;
        
        $scope.allList = [];
        $scope.activeList = [];
        $scope.completeList = [];
        angular.forEach(oldList, function (x) {
            if (!x.done) {$scope.allList.push(x);
                          $scope.activeList.push(x);
                         }
            if (x.done) {$scope.allList.push(x);
                          $scope.completeList.push(x);
                         }
        });
    };
});

app.directive("currentDate", function () {
    "use strict";
    return {
        template: "Current Date: {{ date | date : 'yyyy-MM-dd HH:mm:ss' }}"
    };
});