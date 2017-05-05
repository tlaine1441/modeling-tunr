var db = require('../models');
var Manager = db.models.Manager;

var managers = [
  {
  	name: "Ricky Bobby",
  	email: "rbobby@gmail.com",
  	office_number: "516-877-0304",
  	cell_phone_number: "718-989-1231",
  	id: 0
  }
];


//ALL MANAGER ROUTES NEED FRONT END
function index(req, res) {
	Manager.findAll().then(function(managers) {
		res.json(managers);
	});
}

function show(req, res){
	Manager.findById(req.params.id)
		.then(function(manager){
			if(!manager) return ("manager not found");
			res.json(manager);
		});
}

function update(req, res) {
	Manager.findById(req.params.id)
		.then(function(manager){
			console.log(manager);
			if (!manager) return ("manager not found");
			return manager.updateAttributes(req.body);
		})
		.then(function(manager){
			res.json(manager);
		});
}

function create(req, res) {
	Manager.create(req.body)
		.then(function(manager){
			if(!manager) return("manager not found");
			res.json(manager);
		});
}

function destroy(req, res) {
	Manager.findById(req.params.id)
		.then(function(manager){
			if(!manager) return("manager nto found");
			return manager.destroy();
		})
		.then(function(){
			res.redirect('/managers');
		});
}

module.exports.index = index;
module.exports.show = show;
module.exports.update = update;
module.exports.create = create;
module.exports.destroy = destroy;