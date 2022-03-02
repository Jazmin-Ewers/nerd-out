const Attendee = require('../models/attendee');

module.exports = {
    index,
    showTeam,
    showCompany,
    showTitle,
    search,
    update
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

async function search(req, res) {
    const attendee = await Attendee.find({id: 1 });
    console.log(attendee);
    res.render('api/show', { title: "Attendee", attendee });
}

// function show(req, res) {
//     const attendee  = Attendee.findById(req.params.id);
//     console.log(attendee.name);
//     res.render('api/show', { title: "Attendee", attendee });
// }

function update(req, res) {
    Attendee.findOne(req.params.id, function (err, attendee) {
        console.log(req.body);
    });
}