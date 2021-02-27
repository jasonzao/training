const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ContactSchema = new Schema({
  name: String,
  lastname: String,
  tel: String,
  email: String,
  description: String
  
})
const ContactModel = mongoose.model('Contact', ContactSchema)
module.exports = ContactModel