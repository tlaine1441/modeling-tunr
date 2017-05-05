angular.module("tunrApp")
	.controller("ManagerIndexController", ManagerIndexController)
	.controller("ManagerShowController", ManagerShowController)
	.controller("ManagerEditController", ManagerEditController)
	.controller("ManagerNewController", ManagerNewController);


//ADDING NEW CONTROLERS
ManagerShowController.$inject = ['$http', '$routeParams'];
function ManagerShowController($http, $routeParams){
	//console.log(managers[0].name);
	var self = this;
	//self.manager = managers[$routeParams.id];

	$http.get('/api/managers/' + $routeParams.id)
		.then(function(response){
			console.log(response.data);
			self.manager = response.data;
		});

}

ManagerNewController.$inject = ['$http', '$location'];
function ManagerNewController($http, $location){
	console.log(managers[0].name);
	var self = this;
	self.name = managers[0].name;
}

ManagerEditController.$inject = ['$http', '$routeParams', '$location'];
function ManagerEditController($http, $routeParams, $location){
	console.log(managers[0].name);
	var self = this;
	self.name = managers[0].name;
}

//PREBUILT CONTROLLERS
ManagerIndexController.$inject = ["$http"];
function ManagerIndexController($http) {
	var vm = this;
	vm.deleteManager = deleteManager;

	function getAllManagers() {
		$http.get('/api/managers')
			.then(function(response) {
				vm.allManagers = response.data;
			});		
	}

	function deleteManager(manager) {
		$http.delete('/api/managers/'+manager.id)
			.then(function(response) {
				var managerIndex = vm.allManagers.indexOf(manager);
				vm.allManagers.splice(managerIndex, 1);
			});
	}

	getAllManagers();
}