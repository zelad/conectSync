var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.log = "John";
    $scope.mdp = "";
    $scope.authTimeStamp=0;
    $scope.logUid="";
    
//    var Request = require('request');
//    var Hawk = require('hawk');
    var client = new FxAccountClient("https://api.accounts.firefox.com/v1");
    
    var promise = client.signIn("rbeck@assystem.com", "comptePourDev");
//    console.log(promise);
    promise.then(function(objRx){
    	console.log("recu: ",objRx);
    	$scope.authTimeStamp=objRx.authAt;
    	$scope.logUid=objRx.uid;
    }, function(reason){
    	console.log("KO");
    });
    
});