/**
 * Created by GAN on 2016/8/27.
 */
var app = angular.module('item', ['ngRoute'], function($routeProvider){
    $routeProvider
        .when('/api', {
        templateUrl: 'html/api.html',
        controller:'apiController'
    }).when('/dynamic', {
        templateUrl: 'html/dynamic.html',
        controller:'dynamicController'
    });
});
app.controller('itemController',function($scope,$timeout){
    $scope.toLogin = function(){
        location.href = "login.html";
    };
    $scope.toRegist = function(){
        location.href = "regist.html";
    }
    $scope.flag = false;
    $scope.showList = function () {
        $scope.flag = true;
        console.log($scope.flag);
    };
    $scope.hideList = function () {
        $scope.flag = false;
        console.log($scope.flag);

    }
});