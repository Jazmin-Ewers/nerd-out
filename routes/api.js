var express = require('express');
var router = express.Router();
const apiCtrl = require('../controllers/api');

// GET '/api' all the attendees
router.get('/', apiCtrl.index);

// GET '/api/search' get an attendee info
router.post('/search', apiCtrl.search);

// PUT '/api/:id' update an attendees info
router.post('/:id', apiCtrl.update);

// Get '/api/team/:id show all attendees on a certain team
router.get('/team/:id', apiCtrl.showTeam);

// Get '/api/company/:name show all attendees on a certain company
router.get('/company/:name', apiCtrl.showCompany);

// Get '/api/title/:title show all attendees with a certain job title
router.get('/title/:title', apiCtrl.showTitle);


module.exports = router;
