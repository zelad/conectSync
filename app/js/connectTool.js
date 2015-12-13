var connectionManager = {
		connectFxA: function(scope) {
			
		}//,
}
// Client credentials

    var credentials = {
        id: 'dh37fgj492je',
        key: 'werxhqb98rpaxn39848xrunpaw3489ruxnpa98w4rxn',
        algorithm: 'sha256'
    }

// Request options

    var requestOptions = {
        uri: 'http://example.com:8000/resource/1?b=1&a=2',
        method: 'GET',
        headers: {}
    };

// Generate Authorization request header

    var header = Hawk.client.header('http://example.com:8000/resource/1?b=1&a=2', 'GET', { credentials: credentials, ext: 'some-app-data' });
    requestOptions.headers.Authorization = header.field;

// Send authenticated request

    Request(requestOptions, function (error, response, body) {

    // Authenticate the server's response

        var isValid = Hawk.client.authenticate(response, credentials, header.artifacts, { payload: body });

    // Output results

        console.log(response.statusCode + ': ' + body + (isValid ? ' (valid)' : ' (invalid)'));
    });