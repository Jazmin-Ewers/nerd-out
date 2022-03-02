const Attendee = require('../models/attendee');

module.exports = {
    index,
    showTeam,
    showCompany,
    showTitle
};

async function index(req, res) {
    const attendees = await Attendee.find({});
    res.render('api/index', { title: "Attendees", attendees });
}

async function showTeam(req, res) {
    const team_members = await Attendee.find({team: req.params.id });
    res.render('api/team', { title: "Team", team_members });
}

async function showCompany(req, res) {
    const employees = await Attendee.find({Company: req.params.name });
    res.render('api/company', { title: "Company", employees });
}

async function showTitle(req, res) {
    const attendees = await Attendee.find({ title: req.params.title });
    res.render('api/title', { title: "Job Title", attendees });
}
