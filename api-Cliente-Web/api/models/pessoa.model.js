// Pessoa.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Pessoa
let Pessoa = new Schema({
  nome: {
    type: String
  },
  sobrenome: {
    type: String
  },
  telefone: {
    type: Number
  }
},{
    collection: 'pessoa'
});

module.exports = mongoose.model('Pessoa', Pessoa);