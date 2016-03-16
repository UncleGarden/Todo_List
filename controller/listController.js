/*global angular */
/*global console */
var app = angular.module('myTodo', []);

app.controller('todoCtrl', function ($scope) {
    "use strict";
    
    var item = {todoText: '', done: false, status: 'active'};
    $scope.notes = [];

    $scope.date = new Date();

    $scope.currentStatus = 'all';

    $scope.get_all = function () {
        $scope.currentStatus = 'all';
    };
    
    $scope.get_active = function () {
        $scope.currentStatus = 'active';
    };
    
    $scope.get_complete = function () {
        $scope.currentStatus = 'complete';
    };
    
    
    $scope.add = function () {
        var temp, index;
        temp = angular.copy(item);
        
        temp.todoText = $scope.todoInput;
        temp.done = false;
        temp.status = 'active';
        index = $scope.notes.indexOf(temp);
        
        if (index === -1) {
            console.info(temp);
            $scope.notes.push(temp);
            $scope.todoInput = "";
            console.info("Item added successfully : ", $scope.notes);
        } else {
            console.info("Item exist");
        }
        
        console.info($scope.notes);
    };
    
    
    $scope.remove = function (removedItem) {
        var index = $scope.notes.indexOf(removedItem);
        if (index > -1) {
            $scope.notes[index].status = 'complete';
        }
        console.info($scope.notes);
    };
});

app.directive("currentDate", function () {
    "use strict";
    return {
        template: "Current Date: {{ date | date : 'yyyy-MM-dd HH:mm:ss' }}"
    };
});