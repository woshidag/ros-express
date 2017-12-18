var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// -------ros
var ROSLIB = require('roslib')
var ros_server = 'ws://localhost:9090';
var ros = new ROSLIB.Ros();
ros.connect(ros_server);

app.post('/hop/common_api', function (req, res) {

	var addTwoIntsClient = new ROSLIB.Service({
		ros : ros,
		name : req.body.name,
		serviceType : req.body.service_type
	});

	var request = new ROSLIB.ServiceRequest(JSON.parse(req.body.data));
	addTwoIntsClient.callService(request, 
		function(result) {
		res.status(200).send(result)
	}, function(error) {
		res.status(500).send(error)
	});
});

var server = app.listen(9001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
