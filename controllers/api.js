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
    const team_members = await Attendee.find({team: 1 });
    res.render('api/team', { team_members });
}
