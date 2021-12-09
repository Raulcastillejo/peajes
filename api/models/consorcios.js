const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let consorcioSchema = new Schema({
  nombre: {
    type: String
  },
  descripcion: {
    type: String
  }
}, {
    collection: 'consorcio'
  })

module.exports = mongoose.model('consorcio', consorcioSchema)