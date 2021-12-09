const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let tarjetaSchema = new Schema({
  numero: {
    type: String
  },
  carga: {
    type: String
  },
  placa: {
    type: String
  }
}, {
    collection: 'tarjeta'
  })

module.exports = mongoose.model('tarjeta', tarjetaSchema)