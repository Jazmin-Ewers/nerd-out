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
    const attendees = await Attendee.find({}).sort({id: 1});
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
// Convert the phone field format from xxx-xxxxxxx to (xxx) xxx-xxxx
function convertPhoneFormat(phoneNumber) {
let newPhoneFormat = "(" + phoneNumber.slice(0, 3) + ") " + phoneNumber.slice(4,7) + "-" + phoneNumber.slice(7, phoneNumber.length);
return newPhoneFormat;
}

// Given the month field "02" and the year "2022" field return one string "02/22"
function convertDateFormat(month, year) {
    month = (month.length === 1) ? "0" + month : month;
    year = year.slice(2, year.length);
    let newDateFormat = month + "/" + year;
    return newDateFormat;
}

function createAttendee(req, res) {
    req.body.phone = convertPhoneFormat(req.body.phone);
    req.body.date = convertDateFormat(req.body.month, req.body.year);
    req.body.id = parseInt(req.body.id);
    req.body.paid = (!req.body.paid) ? false : true;
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