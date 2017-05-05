angular.module("tunrApp", ['ngRoute'])
	.config(function($routeProvider,$locationProvider){
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $routeProvider
    	//Main Routes
      .when('/', {
        templateUrl: '/templates/home.html'
      })
      .when('/about', {
      	templateUrl: '/templates/about.html'
      })

			//Artist Routes
			  
			// index
			.when('/artists', {
				templateUrl: '/templates/artists/index.html',
				controller: "ArtistIndexController as artistsController"
			})

			// new
			.when('/artists/new', {
				templateUrl: '/templates/artists/new.html',
				controller: "ArtistNewController as artistNewController"
			})

			// show
			.when('/artists/:id', {
				templateUrl: '/templates/artists/show.html',
				controller: "ArtistShowController as artistController"
			})

			// edit
			.when('/artists/:id/edit', {
				templateUrl: '/templates/artists/edit.html',
				controller: "ArtistEditController as artistEditController"
			})

			//Manager Routes
			  
			// index
			.when('/managers', {
				templateUrl: '/templates/managers/index.html',
				controller: "ManagerIndexController as managersController"
			})

			//new
			.when('/managers/new', {
				template: '<h1>ADDING A NEW MANAGER</h1>'
			})

			//show
			.when('/managers/:id',{
				template: '<h1>SHOWING MANAGER</h1>'
			})


			//edit
			.when('/managers/:id/edit', {
				template: '<h1>EDITING MANAGER</h1>'
			})

			//delete
			.when('/managers/:id/delete', {
				template: '<h1> DELETING MANAGER</h1>'
			});




  });






