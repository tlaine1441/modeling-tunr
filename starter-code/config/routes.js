var express = require('express');
var router = express.Router();
var artistsController = require('../controllers/artists.js');
var managersController = require('../controllers/managers.js');

//Artist Routes
  
// index
router.get('/api/artists', artistsController.index);

// create
router.post('/api/artists', artistsController.create);

// show
router.get('/api/artists/:id', artistsController.show);

// update
router.put('/api/artists/:id', artistsController.update);

// destroy
router.delete('/api/artists/:id', artistsController.destroy);

//Manager Routes

// index
router.get('/api/managers', managersController.index);

router.get('/api/managers/:id', managersController.show);

router.put('/api/managers/:id', managersController.update);

router.post('/api/managers/new', managersController.create);

//NEED DESTROY
router.delete('/api/managers/:id', managersController.destroy);

//Song Routes

module.exports = router;