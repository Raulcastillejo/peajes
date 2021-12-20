const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usersSchema = new Schema({
  email: {
    type: String , required: true
  },
  password: {
    type: String , required: true
  },
  roll: {
    type: String , required: true
  }
}, {
    collection: 'users'
  })

module.exports = mongoose.model('users', usersSchema)