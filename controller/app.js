/*global angular */
var app = angular.module('myTodo', ['ngRoute']);

app.config(function ($routeProvider) {
    "use strict";
    $routeProvider
    
        .when('/active', {
            templateUrl: 'pages/active.html',
            controller: 'mainController'
        })
    
        .when('/complete', {
            templateUrl: 'pages/complete.html',
            controller: 'secondController'
        });
    
});

app.controller('mainController', ['$scope', '$location', '$log',
                                    function ($scope, $location, $log) {
        "use strict";
        $log.info($location.path());
        $scope.name = 'Main';
                                        
    }]);

app.controller('secondController', ['$scope', '$location', '$log',
                                    function ($scope, $location, $log) {
        "use strict";
        $log.info($location.path());
        $scope.name = 'Second';
    }]);