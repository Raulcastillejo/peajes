const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let peajesSchema = new Schema({
  nombre: {
    type: String
  },
  longitud: {
    type: String
  },
  latitud: {
    type: String
  }
}, {
    collection: 'peajes'
  })

module.exports = mongoose.model('peajes', peajesSchema)