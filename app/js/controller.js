var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope,$timeout) {
    $scope.log = "John";
    $scope.mdp = "";
    $scope.authTimeStamp=0;
    $scope.logUid="";
    
//Connection au serveur pour "SignIn"
    connectionManager.connectFxA($scope);
    

    
    /**pour affichage suite à un event*/
    $scope.showCredentials = function (objRx) {
    	$timeout(function () {
        	$scope.authTimeStamp=objRx.authAt;
        	$scope.logUid=objRx.uid;
    	}, 100);
    }
});