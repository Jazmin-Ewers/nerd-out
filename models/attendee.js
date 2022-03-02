const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendeeSchema = new Schema({
  name: String,
  phone: String,
  address: String,
  city: String,
  state: String,
  country: String,
  postalZip: String,
  email: String,
  company: String,
  companyFunded: String,
  team: Number,
  paid: Boolean,
  date: String,
  title: String  
})

module.exports = mongoose.model('Attendee', attendeeSchema);