var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope,$timeout) {
    $scope.log = "John";
    $scope.mdp = "";
    $scope.authTimeStamp=0;
    $scope.logUid="";
    
//    var Request = require('request');
//    var Hawk = require('hawk');
    var client = new FxAccountClient("https://api.accounts.firefox.com/v1");
    
    var promise = client.signIn("rbeck@assystem.com", "comptePourDev",options={"keys":"true"/*,"reason":"signin"//ne sert pas!*/});
    
//    console.log(promise);
    promise.then(function(objRx){
    	console.log("recu: ",objRx);
    	
//    	var promiseBidAssertion = client.certificateSign(objRx.sessionToken, objRx.uid, 60000);
//    	promiseBidAssertion.then(function(objRX){
//        	console.log(objRx);
//        }, function(reason){
//        	console.error("signing KO");
//        });
    	
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