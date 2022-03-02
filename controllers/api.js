const Attendee = require('../models/attendee');

module.exports = {
    index
};

async function index(req, res) {
    const attendees = await Attendee.find({});
    res.render('api/index', { attendees });
}
