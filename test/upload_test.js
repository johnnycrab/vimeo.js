var Vimeo = require('../lib/vimeo').Vimeo;
var credentials = require('./credentials.json');
var api = new Vimeo(credentials.client_id, credentials.client_secret, credentials.access_token);

var path = require('path');
var querystring = require('querystring');
var request = require('request');

DO_PUT = true;
DO_API = false;

/*api.request({
	method: 'GET',
	path: '/videso/124449369/videos',
	query: {
		filter: 'foobar'
	}
}, function (err, body, status_code, headers) {
	console.log(err);
	console.log(status_code);
	console.log(headers);
});*/

/*if (DO_PUT) {
	api.request({
		method: 'PUT',
		path: '/videos/124449369/presets/120080237'
	}, function (error, body, statusCode, headers) {
		console.log(error);
		console.log(body);
		console.log(statusCode);
		console.log(headers);
	});
}

if (DO_API) {
	api.request({
		method: 'PATCH',
		path: '/videos/124449369',
		query: {
			'name': "Johnnys Testvideo2",
			'description': "Johnnys Testbeschreibung2",
			'privacy': {
				view: 'disable',
				embed: 'public'
			},
			'embed': {
				buttons: {
					like: 'false',
					watchlater: 'false',
					share: 'false',
					embed: 'false'
				},
				logos: {
					vimeo: 'false',
					custom: {
						active: 'true',
						sticky: 'false',
						link: "http://schlagerwelten.com"
					}
				},
				title: {
					owner: 'hide',
					portrait: 'hide',
					name: 'hide'
				},
				color: '#DC4986'
			}
		}
	}, function (error, body, statusCode, headers) {
		console.log(body);
		if (error) {
			console.log('error');
			console.log(error);
		}

		console.log('status code');
		console.log(statusCode);

		/*if (statusCode == 200) {
			api.request({
				method: 'PUT',
				path: '/videos/122730978/privacy/domains/johnnycrab.com'
			}, function (e, b, sc, h) {
				if (e) {
					console.log(e);
				}
				console.log('status code domain');
				console.log(sc);
			});
			api.request({
				method: 'PUT',
				path: '/videos/122730978/privacy/domains/facebook.com'
			}, function (e, b, sc, h) {
				if (e) {
					console.log(e);
				}
				console.log('status code domain');
				console.log(sc);
			});
			api.request({
				method: 'PUT',
				path: '/videos/122730978/privacy/domains/twitter.com'
			}, function (e, b, sc, h) {
				if (e) {
					console.log(e);
				}
				console.log('status code domain');
				console.log(sc);
			});
		}
	});
}*/

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