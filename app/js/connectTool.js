var connectionManager = {
		connectFxA: function(scope) {
		    var client = new FxAccountClient("https://api.accounts.firefox.com/v1");
		    
		    var promise = client.signIn("rbeck@assystem.com", "comptePourDev",options={"keys":"true"/*,"reason":"signin"//ne sert pas!*/});
		    
//		    console.log(promise);
		    promise.then(function(objRx){
		    	console.log("recu: ",objRx);
		    	
//		    	var promiseBidAssertion = client.certificateSign(objRx.sessionToken, objRx.uid, 60000);
//		    	promiseBidAssertion.then(function(objRX){
//		        	console.log(objRx);
//		        }, function(reason){
//		        	console.error("signing KO");
//		        });
		    	
		    	scope.showCredentials(objRx);
		    }, function(reason){
		    	console.log("KO");
		    });
		}//,
}

/**
 * A tester...
 */
// Client credentials
//
//    var credentials = {
//        id: 'dh37fgj492je',
//        key: 'werxhqb98rpaxn39848xrunpaw3489ruxnpa98w4rxn',
//        algorithm: 'sha256'
//    }
//
//// Request options
//
//    var requestOptions = {
//        uri: 'http://example.com:8000/resource/1?b=1&a=2',
//        method: 'GET',
//        headers: {}
//    };
//
//// Generate Authorization request header
//
//    var header = Hawk.client.header('http://example.com:8000/resource/1?b=1&a=2', 'GET', { credentials: credentials, ext: 'some-app-data' });
//    requestOptions.headers.Authorization = header.field;
//
//// Send authenticated request
//
//    Request(requestOptions, function (error, response, body) {
//
//    // Authenticate the server's response
//
//        var isValid = Hawk.client.authenticate(response, credentials, header.artifacts, { payload: body });
//
//    // Output results
//
//        console.log(response.statusCode + ': ' + body + (isValid ? ' (valid)' : ' (invalid)'));
//    });