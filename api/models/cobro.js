const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cobroSchema = new Schema({
  peaje: {
    type: String
  },
  categoria: {
    type: String
  },
  valor: {
    type: String
  },
  fecha: {
    type: String
  },
  placa: {
    type: String
  },
  medioDePago: {
    type: String
  }
}, {
    collection: 'cobro'
  })

module.exports = mongoose.model('cobro', cobroSchema)