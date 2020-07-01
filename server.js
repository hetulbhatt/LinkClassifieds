const express = require('express');
const bodyParser = require('body-parser');
//const uri = "mongodb+srv://hetulbhatt:qwerty123456@linkclassifieds-kdjwr.mongodb.net/test?retryWrites=true&w=majority";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow- 		Headers', 'Content-Type');
    next();
});

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/Link", { useNewUrlParser: true,useUnifiedTopology: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', mongoConnected);

function mongoConnected(){

    
	var userSchema = new mongoose.Schema({
		email: String,
		password:String,
		address: String,
		contact: String,
        city: String,
        zip: String
	}, {collection : 'Users'});

	var postSchema = new mongoose.Schema({
		askingPrice: Number,
		catagory:String,
		city: String,
		description: String,
        email: String,
		itemname: String,
		url: String,
		zip: String
	}, {collection : 'Posts'});

	var User=mongoose.model('User',userSchema);

    app.post("/login", (req, res) => {
		var user = mongoose.model("user", userSchema);
		console.log(req.body.eml +" "+req.body.pwd)
		user.findOne({email:req.body.eml,password:req.body.pwd},function(err,usr){
			if (err) {
				console.log("No employee with given id found!");
				res.status(400);
				res.send(usr);
			}else{
				console.log(usr);
				res.send(usr);
			}
		});
    });	
    
    app.post("/register",(req,res) =>{
		console.log(req.body);
		var user=new User(req.body);
		console.log(user.email);
		console.log("*****");
		console.log(User.find({email:user.email}));
		User.find({email:user.email},function(err,t){
			console.log(t.length);
			if(t.length == 0){
				user.save(function(err){
					if (err) {
						res.status(400);
						res.send("Unable to add names");
					}
					else {	
						console.log("User added!");
						res.send({ "message": true});
					}
			
				});
			}
			else{
						res.send({ "message": false});
			}
		});
		
	});

	app.post("/post",(req,res) =>{
		
		var Post = mongoose.model('Post', postSchema);
		console.log(req.body);
		var post=new Post(req.body);
		console.log(post);
		console.log("*****");

		post.save(function(err){
			if (err) {
				res.status(400);
				res.send("Unable to add names");
			}
			else {

				console.log("User added!");
				res.send({ "message": true});
			}
	
		});

	});

    app.post("/getPosts", (req, res) => {
		var post = mongoose.model("Post", postSchema);
		console.log("In getPosts()");
		post.find({},function(err,list){
			if (err) {
				console.log("No employee with given id found!");
				res.status(400);
				res.send(list);
			}else{
				console.log(list);
				res.send(list);
			}
		});
	});

	app.post("/getBooks", (req, res) => {
		var post = mongoose.model("Post", postSchema);
		console.log("In getBooks()");
		post.find({catagory: 'Books and Magazines'},function(err,list){
			if (err) {
				console.log("No employee with given id found!");
				res.status(400);
				res.send(list);
			}else{
				console.log(list);
				res.send(list);
			}
		});
	});

	app.post("/getCars", (req, res) => {
		var post = mongoose.model("Post", postSchema);
		console.log("In getCars()");
		post.find({catagory: 'Cars and Vehicles'},function(err,list){
			if (err) {
				console.log("No employee with given id found!");
				res.status(400);
				res.send(list);
			}else{
				console.log(list);
				res.send(list);
			}
		});
	});	

	app.post("/getElecs", (req, res) => {
		var post = mongoose.model("Post", postSchema);
		console.log("In getElecs()");
		post.find({catagory: 'Electronics'},function(err,list){
			if (err) {
				console.log("No employee with given id found!");
				res.status(400);
				res.send(list);
			}else{
				console.log(list);
				res.send(list);
			}
		});
	});	

	app.post("/getFurn", (req, res) => {
		var post = mongoose.model("Post", postSchema);
		console.log("In getFurn()");
		post.find({catagory: 'Furniture'},function(err,list){
			if (err) {
				console.log("No employee with given id found!");
				res.status(400);
				res.send(list);
			}else{
				console.log(list);
				res.send(list);
			}
		});
	});	

	app.post("/getReal", (req, res) => {
		var post = mongoose.model("Post", postSchema);
		console.log("In getReal()");
		post.find({catagory: 'Real Estate'},function(err,list){
			if (err) {
				console.log("No employee with given id found!");
				res.status(400);
				res.send(list);
			}else{
				console.log(list);
				res.send(list);
			}
		});
	});	
	
	app.post("/getUserPosts", (req, res) => {
		var post = mongoose.model("Post", postSchema);
		console.log("In getPosts()");
		console.log(req.body.eml);
		post.find({email:req.body.eml},function(err,list){
			if (err) {
				console.log("No employee with given id found!");
				res.status(400);
				res.send(list);
			}else{
				console.log(list);
				res.send(list);
			}
		});
	});	
	
	app.post("/deleteUserPost",(req,res) =>{
		console.log(req.body.itemname);
		console.log(req.body.email);
		var post = mongoose.model("Post", postSchema);
		post.deleteOne({itemname: req.body.itemname},function(err,list){
			if (err) {
				console.log("No employee with given id found!");
				res.status(400);
				res.send(list);
			}else{
				console.log(list);
				res.send(list);
			}
		});

	});

}

app.listen(8000);