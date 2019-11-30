//including the dependencies
var express 	= require('express');
var app 		= express();
var bodyParser  = require("body-parser");
var mongoose 	= require("mongoose");



// setting view engine
app.set("view engine", "ejs");
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// schema setup

// mongoose.connect('mongodb://localhost/Guru', {
//     useNewUrlParser: true
// });

mongoose.connect('mongodb://localhost/Sem', {
    useNewUrlParser: true
});
// mongoose.connect("mongodb://localhost:3000");
// var timeRegSchema = new mongoose.Schema({
// 	name: String,
// 	pass: String
// });

// var Time = mongoose.model("Time", timeRegSchema);	

//	Timetable Schema
var timetableSchema = new mongoose.Schema({
	day: String,
	t1: String,
	t2: String,
	t3: String,
	t4: String,
	t5: String,
	t6: String,
	t7: String,
	t8: String,
	t9: String,
});

var Timetable = mongoose.model("Timetable", timetableSchema);

Timetable.create({
	day: "Mon",
	t1: "",
	t2: "",
	t3: "",
	t4: "",
	t5: "",
	t6: "",
	t7: "",
	t8: "",
	t9: "",

}, function(err, Timetable){
	if(err){
		console.log(err);
	} 
	else{
		console.log("Newly Created row");
		console.log(Timetable);
	}
});

// routing 
//	INDEX PAGE
app.get('/',function(req,res,next){
	res.render("landing.ejs");
});

//	login page/register
app.get('/login',function(req, res, next){
	res.render("login.ejs");
});

//	storing user data from registration page
app.post("/home", function(req, res, next){
	var regname = req.body.regname;
	var regpass = req.body.regpass;
	var Credentials = {name: regname, pass: regpass};
	Faculty.create(Credentials, function(err, newlyCreated){
		if(err){
			console.log(err);
		} else {
			//direct to home page which is to be constructed
			res.redirect("/home");
		}
	});
	//res.send("U hit post route");
});

app.get("/home", function(req, res, next){
	res.render("home");
});

app.get("/login/home", function(req, res, next){
	res.render("login/home");
});

//	attendance marking
app.get("/Isa_Esa", function(req, res, next){
	res.render("Isa_Esa");
});



//post method to add data to db
// app.post("/faculty",function(req, res, next){
// 	//res.send("You hit the post route");
// 	//get the data from faculty array and add to it
// 	var name = req.body.name;
// 	var department = req.body.department;
// 	var newFaculty = {name: name, department: department};
// 	//faculty.push(newFaculty);
// 	Faculty.create(newFaculty, function(err, newlyCreated){
// 		if(err){
// 			console.log(err);
// 		}
// 		else{
// 			//redirect to faculty page
// 			res.redirect("/faculty");
// 		}
// 	});
// });



// //form for adding faculty
// app.get("/faculty/newFaculty", function(req, res, next){
// 	res.render("newFaculty.ejs");
// });

// // adding route to view specific faculty
// app.get("/faculty/:id", function(req, res, next){
// 	res.send("Show specific faculty");
// });

// app.listen(process.env.PORT || 3005, process.env.IP, function(){
// 	console.log("Server started");
// });

// Faculty.create(
// {
// 	name: "Yogita",
// 	department: "IT"
// }, function(err, Faculty){
// 	if(err){
// 		console.log(err);
// 	}
// 	else{
// 		console.log("Newly created faculty");
// 		console.log(Faculty);
// 	}
// }
// );

// var faculty = [
// 		{name: "Govind" , department: "IT"},
// 		{name: "Dalgade", department: "CS"}
// 	];


//landing on faculty form
// app.get("/faculty", function(req, res, next){
// 	Faculty.find({},function(err, allFaculty){
// 		if(err){
// 			console.log(err);
// 		}
// 		else{
// 			res.render("faculty",{faculty:allFaculty});
// 		}
// 	});
// });

//facReg.create({
// 	name: "Yogita",
// 	pass: "rgit123"
// }, function(err, facReg){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log("newlyCreated faculty");
// 		console.log(facReg);
// 	}
// }
// );