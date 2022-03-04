const { render } = require('express/lib/response');
const Attendee = require('../models/attendee');

module.exports = {
    index,
    showTeam,
    showCompany,
    showTitle,
    show,
    update,
    delete: deleteAttendee,
    new: newAttendeeForm,
    create: createAttendee,
    notFound
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

async function show(req, res) {
    const attendee = await Attendee.find({id: req.query.id});
    if (attendee.length === 0) {
        console.log("Not found page")
        res.redirect('/api/notFound')
    } else {
        console.log("Have attendee")
        res.render('api/show', { title: "Attendee", attendee });
    }
}

async function update(req, res) {
    const attendee = await Attendee.find({id: req.params.id });
    attendee[0].Company = req.body.Company;
    attendee[0].save();
    res.render('api/show', { title: "Attendee", attendee });
}

function deleteAttendee(req, res) {
    Attendee.findOneAndDelete({_id: req.params._id }, function (err) {
        if(err) console.log(err);
        res.redirect('/api');
        });
    }
    
async function newAttendeeForm(req, res) {
    res.render('api/new', { title: "New Attendee"});
}

// Randon number generator for Attendee id number with min and max included
function randomIntFromInterval(min, max) {  
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function createAttendee(req, res) {
    // randomIntFromInterval(1, 1000);
    req.body.id = 1;
    req.body.paid = (!req.body.paid) ? false : true;
    console.log(typeof req.body.paid)
    req.body.userID = randomIntFromInterval(100000000000000000, 900000000000000000);
    req.body.companyFunded = parseInt(req.body.companyFunded);
    req.body.team = parseInt(req.body.team);
    console.log(req.body);
    const attendee = new Attendee(req.body);
    console.log(attendee)
    attendee.save(function(err) {
        if (err) {
            console.log(err);
        }
        res.redirect('/api');
    })
}

function notFound(req, res) {
    res.render('api/notFound', { title: "Attendee Not Found"});
}