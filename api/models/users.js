const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usersSchema = new Schema({
  email: {
    type: String
  },
  password: {
    type: String
  },
  roll: {
    type: String
  }
}, {
    collection: 'users'
  })

module.exports = mongoose.model('users', usersSchema)