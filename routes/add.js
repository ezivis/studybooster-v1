var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	var name = request.query.name;
	var description = request.query.description;
	var time = request.query.time;
	var newFriend = {"name": name, "description": description, "time": time + " " + "Minutes"};
	data.friends.push(newFriend);
	response.render('index', data);
 }
