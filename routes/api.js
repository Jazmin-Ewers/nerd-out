var express = require('express');
var router = express.Router();
const apiCtrl = require('../controllers/api');

// GET '/api' all the attendees
router.get('/', apiCtrl.index);

// Get '/api/team/:id show all attendees on a certain team
router.get('/team/:id', apiCtrl.showTeam);


module.exports = router;
