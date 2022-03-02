const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendeeSchema = new Schema({
  id: Number,
  name: String,
  phone: String,
  address: String,
  city: String,
  state: String,
  country: String,
  postalZip: String,
  email: String,
  Company: String,
  companyFunded: String,
  userID: String,
  team: Number,
  paid: Boolean,
  date: String,
  title: String  
})

module.exports = mongoose.model('Attendee', attendeeSchema);