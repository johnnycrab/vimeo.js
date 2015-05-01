var Vimeo = require('../lib/vimeo').Vimeo;
var credentials = require('./credentials.json');
var api = new Vimeo(credentials.client_id, credentials.client_secret, credentials.access_token);

var path = require('path');
var querystring = require('querystring');
var request = require('request');

/*api.request({
	method: 'GET',
	path: '/me'
}, function (err, body, status_code, headers) {
	console.log(err);
	console.log(status_code);
	console.log(headers);
});*/

api.streamingUpload(path.resolve(__dirname, 'michele_pedrazzi.mp4'), function (error, body, status_code, headers) {
	if (error) {
		console.log('-------');
		console.log('Error:')
		console.log('........');
		console.log(error);
		console.log('-------');
	}

	if (body) {
		console.log('-------');
		console.log('Body:')
		console.log('........');
		console.log(body);
		console.log('-------');
	}

	if (status_code) {
		console.log('-------');
		console.log('status_code:')
		console.log('........');
		console.log(status_code);
		console.log('-------');
	}

	if (headers) {
		console.log('-------');
		console.log('headers:')
		console.log('........');
		console.log(headers);
		console.log('-------');
	}
});