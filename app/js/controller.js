var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope,$timeout) {
    $scope.log = "John";
    $scope.mdp = "";
    $scope.authTimeStamp=0;
    $scope.logUid="";
    
//Connection au serveur pour "SignIn"
//    connectionManager.connectFxA($scope);
    
//Test de génération de pair de clef en DSA 1024 library "jsrasigne"
    //https://github.com/kjur/jsrsasign
//    var rsaPair = KEYUTIL.generateKeypair("RSA", 1024);
//    var sig = new KJUR.crypto.Signature({"alg": "SHA1withDSA"});
//    sig.init(rsaPair.prvKeyObj);
//    sig.updateString('aaa');
//    var hSigVal = sig.sign();
    
//Test de génération de pair de clef en DSA 1024 library "openpgpjs"
    //https://github.com/openpgpjs/openpgpjs#generate-new-key-pair
    var openpgp = require('openpgp'); // use as CommonJS, AMD, ES6 module or via window.openpgp

    openpgp.initWorker({ path:'openpgp.worker.js' }) // set the relative web worker path
    
    var options = {
    	    userIds: [{ name:'Jon Smith', email:'jon@example.com' }], // multiple user IDs
    	    numBits: 1024,                                            // RSA key size
    	    passphrase: 'super long and hard to guess secret'         // protects the private key
    	};

    	openpgp.generateKey(options).then(function(key) {
    	    var privkey = key.privateKeyArmored; // '-----BEGIN PGP PRIVATE KEY BLOCK ... '
    	    var pubkey = key.publicKeyArmored;   // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
    	});
    
//    console.info();
    
/**
 * pour affichage suite à un event
 **/
    $scope.showCredentials = function (objRx) {
    	$timeout(function () {
        	$scope.authTimeStamp=objRx.authAt;
        	$scope.logUid=objRx.uid;
    	}, 100);
    }
});