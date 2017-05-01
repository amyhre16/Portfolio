'use strict';

// import the node packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var SparkPost = require('sparkpost');
var client = new SparkPost();

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res) {
	res.sendfile('index.html');
});

app.get('/portfolio', function (req, res) {
	res.sendfile('portfolio.html');
});

app.get('/contact', function (req, res) {
	res.sendfile('contact.html');
});

app.post('/sendEmail', function (req, res) {
	console.log(req.body);
	client.transmissions.send({
		content: {
			from: 'admin@anthonymyhre.com',
			subject: 'Message from ' + req.body.name,
			html: '<html><body>' + req.body.message + '<br /><br />Sent from: ' + req.body.email + '</body></html>'
		},
		recipients: [
			{ address: 'anthony.myhre@utexas.edu' }
		]
	})
		.then(function (data) {
			client.transmissions.send({
				content: {
					from: 'admin@anthonymyhre.com',
					subject: 'Message from Anthony Myhre',
					html: '<html><body>Hello ' + req.body.name +',<br /><br />Thank you for contacting me from my portfolio. I\'ve received your email and will get back to you as soon as possible.<br /><br />' + 'Best,<br />Anthony Myhre<br />Full Stack Developer<br />' +
						'<a href="http://www.anthonymyhre.com">Portfolio</a><br />' +
						'<a href="https://www.linkedin.com/in/anthony-myhre/">LinkedIn</a><br />' +
						'<a href="https://github.com/amyhre16">GitHub</a><br />' +
					'</body></html>'
				},
				recipients: [
					{ address: req.body.email }
				]
			})
				.then(function (data) {

					console.log('Woohoo! You just sent your first mailing!');
					console.log(data);

					res.json("The message was sent!");
				})
				.catch(function (err) {
					console.log('Whoops! Something went wrong');
					console.log(err);
				});

			console.log('Woohoo! You just sent your first mailing!');
			console.log(data);

		})
		.catch(function (err) {
			console.log('Whoops! Something went wrong');
			console.log(err);
		});
});

app.listen(process.env.PORT || 8080, function () {
	console.log("Server is listening to port", process.env.PORT || 8080);
});