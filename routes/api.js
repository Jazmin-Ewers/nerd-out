var express = require('express');
var router = express.Router();
const apiCtrl = require('../controllers/api');

// GET '/api' all the attendees
router.get('/', apiCtrl.index);

// POST '/api' create new attendee


// GET '/api/show get an attendee info
router.get('/show', apiCtrl.show);

// PUT '/api/:id' update an attendees info
router.post('/show/:id', apiCtrl.update);

// DELETE 'api/:id' delete an attendee 
router.delete('/:_id', apiCtrl.delete)

// GET '/api/team/:id show all attendees on a certain team
router.get('/team/:id', apiCtrl.showTeam);

// GET '/api/company/:name show all attendees on a certain company
router.get('/company/:name', apiCtrl.showCompany);

// GET '/api/title/:title show all attendees with a certain job title
router.get('/title/:title', apiCtrl.showTitle);





module.exports = router;
