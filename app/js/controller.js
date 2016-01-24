var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.log = "John";
    $scope.mdp = "";
    
//    var Request = require('request');
//    var Hawk = require('hawk');
    var client = new FxAccountClient("https://accounts.firefox.com/signin");
//    var client = new FxAccountClient();
    
    var promise = client.signIn("rbeck@assystem.com", "comptePourDev");
});