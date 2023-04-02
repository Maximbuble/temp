var app = angular.module('cityApp', ['ngRoute', 'ngAnimate']);
app.config(function($routeProvider){
$routeProvider
.when('/marigolds', {
    templateUrl: "animate-project.html",
    controller: "marigoldsCtrl"
})
.when('/roses', {
    templateUrl: "animate-project.html",
    controller: "rosesCtrl"
})
.when('/tulips', {
    templateUrl: "animate-project.html",
    controller: "tulipsCtrl"
})
.when('/poppys', {
    templateUrl: "animate-project.html",
    controller: "poppysCtrl"
})
.when('/snowdrops', {
    templateUrl: "animate-project.html",
    controller: "snowdropsCtrl"
})
});
app.controller("marigoldsCtrl",function($scope, $route){
$scope.city = {
    flower:'marigold',
    color: 'orange',
    live:'45-50 days',
}
});
app.controller("rosesCtrl",function($scope, $route){
    $scope.city = {
        flower:'rose',
        color: 'white, red',
        live:'8-10 years',
    }
    });
    app.controller("tulipsCtrl",function($scope, $route){
        $scope.city = {
            flower:'tulip',
            color: 'white, red, yellow',
            live:'22-24 months',
        }
        });
        app.controller("poppysCtrl",function($scope, $route){
            $scope.city = {
                flower:'poppy',
                color: 'red,yellow',
                live:'1-2 days',
            }
            });
            app.controller("snowdropsCtrl",function($scope, $route){
                $scope.city = {
                    flower:'snowdrop',
                    color: 'white',
                    live:'2-6 days',
                }
                });