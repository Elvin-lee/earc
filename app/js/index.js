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
app.controller('itemController',function($scope){
    $scope.toLogin = function(){
        location.href = "login.html";
    };
    $scope.toRegist = function(){
        location.href = "regist.html";
    }

});