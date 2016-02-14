var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope,$timeout) {
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
    	$scope.showCredentials(objRx);
    }, function(reason){
    	console.log("KO");
    });
    
    /**pour affichage suite à un event*/
    $scope.showCredentials = function (objRx) {
    	$timeout(function () {
        	$scope.authTimeStamp=objRx.authAt;
        	$scope.logUid=objRx.uid;
    	}, 100);
    }
});