const Attendee = require('../models/attendee');

module.exports = {
    index,
    showTeam
};

async function index(req, res) {
    const attendees = await Attendee.find({});
    res.render('api/index', { attendees });
}

async function showTeam(req, res) {
    const team_members = await Attendee.find({team: req.params.id });
    res.render('api/team', { team_members });
}
