var express = require('express');
var app = express();
var data = require('./data.json');

app.use('/', express.static('react'));

app.get('/query', function (req, res){

	var count = Number(req.query.count);
	var resData = {};

	resData.classes = data.classes.slice((count - 10), count);
	resData.limitReached = (resData.classes.length === 0);

	res.send(resData);
})
app.listen(8080, function(){
	console.log('listening on 8080');
})