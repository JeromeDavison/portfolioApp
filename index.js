let express = require('express');
let body = require('body-parser');
let app = express();
 var path = require('path')
var port = process.env.PORT || 8080;
app.set('port', (process.env.PORT || 8080));
app.use(body.urlencoded({extended: true}));
var mongoose = require('mongoose');
mongoose.connect('mongodb://jay:imaboss13@ds123658.mlab.com:23658/forumdb');
var person = require('./schema');

app.use(express.static(path.join(__dirname, 'javascript')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'images')));



app.route('/')
.get(function(req,res, next){
	res.sendFile(__dirname + '/index2.html');
	
	
})





app.route('/submit')
.post(function(req,res, next){
	var Info;
	Info = new person();
	Info.firstName = req.body.name;
	Info.lastName = req.body.last;
	Info.message = req.body.message;
	Info.email = req.body.email;
	Info.phoneNumber = req.body.number;
	
	Info.save(function(err, succ){
		if (err){
        res.send("info wasn't sent. Please try again");
		} else {
	res.redirect('/');
		}		
	})
	
	
	
	
});




app.listen(port, function (req, res){
	
})
