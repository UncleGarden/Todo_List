/*global angular */
/*global console */
var app = angular.module('myTodo', []);

app.controller('todoCtrl', function ($scope) {
    "use strict";
    
    var item = {todoText: '', done: false, status: 'active'};
    $scope.notes = [];
    
//    
//    $scope.allList = [];
//    $scope.activeList = [];
//    $scope.completeList = [];
    $scope.date = new Date();

    $scope.currentStatus = 'all';
//    $scope.all = true;
//    $scope.active = false;
//    $scope.complete = false;
    
    $scope.get_all = function () {
        $scope.currentStatus = 'all';
    };
    
    $scope.get_active = function () {
        $scope.currentStatus = 'active';
    };
    
    $scope.get_complete = function () {
        $scope.currentStatus = 'complete';
    };
    
//    $scope.get_all = function () {
//        $scope.all = true;
//        $scope.active = false;
//        $scope.complete = false;
//    };
//    
//    $scope.get_active = function () {
//        $scope.all = false;
//        $scope.active = true;
//        $scope.complete = false;
//    };
//    
//    $scope.get_complete = function () {
//        $scope.all = false;
//        $scope.active = false;
//        $scope.complete = true;
//    };

//    $scope.add = function () {
//        $scope.allList.push({todoText: $scope.todoInput, done: false});
//        $scope.activeList.push({todoText: $scope.todoInput, done: false});
//        $scope.todoInput = "";
//    };
    
    $scope.add = function () {
        var temp, index;
        temp = angular.copy(item);
        
        temp.todoText = $scope.todoInput;
        temp.done = false;
        temp.status = 'active';
        index = $scope.notes.indexOf(temp);
        
        if (index === -1) {
            $scope.notes.push(temp);
            $scope.todoInput = "";
            console.info("Item added successfully : ", $scope.notes);
        } else {
            console.info("Item exist");
        }
        
        
    };

//    $scope.remove = function () {
//        var oldList = $scope.allList;
//        
//        $scope.allList = [];
//        $scope.activeList = [];
//        $scope.completeList = [];
//        angular.forEach(oldList, function (x) {
//            if (!x.done) {$scope.allList.push(x);
//                          $scope.activeList.push(x);
//                         }
//            if (x.done) {$scope.allList.push(x);
//                          $scope.completeList.push(x);
//                         }
//        });
//    };
    
    
    $scope.remove = function (removedItem) {
        var index = $scope.notes.indexOf(removedItem);
        if (index > -1) {
            $scope.notes[index].status = 'complete';
        }
    };
});

app.directive("currentDate", function () {
    "use strict";
    return {
        template: "Current Date: {{ date | date : 'yyyy-MM-dd HH:mm:ss' }}"
    };
});