// pessoa.route.js

const express = require('express');
const pessoaRoutes = express.Router();

// Require Pessoa model in our routes module
let Pessoa = require('./pessoa.model');

// Defined store route
pessoa.route('/add').post(function (req, res) {
  let pessoa = new Pessoa(req.body);
  pessoa.save()
    .then(pessoa => {
      res.status(200).json({'pessoa': 'pessoa adicionada com sucesso.'});
    })
    .catch(err => {
    res.status(400).send("Erro ao salvar registro no banco de dados.");
    });
});

// Defined get data(index or listing) route
pessoaRoutes.route('/').get(function (req, res) {
    Pessoa.find(function(err, pessoaes){
    if(err){
      console.log(err);
    }
    else {
      res.json(pessoaes);
    }
  });
});

// Defined edit route
pessoaRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Pessoa.findById(id, function (err, pessoa){
      res.json(pessoa);
  });
});

//  Defined update route
pessoaRoutes.route('/update/:id').post(function (req, res) {
    Pessoa.findById(req.params.id, function(err, pessoa) {
    if (!pessoa)
      res.status(404).send("data is not found");
    else {
        pessoa.person_name = req.body.person_name;
        pessoa.pessoa_name = req.body.pessoa_name;
        pessoa.pessoa_gst_number = req.body.pessoa_gst_number;

        pessoa.save().then(pessoa => {
          res.json('Registro atualizado.');
      })
      .catch(err => {
            res.status(400).send("Erro ao salvar registro no banco de dados.");
      });
    }
  });
});

// Defined delete | remove | destroy route
pessoaRoutes.route('/delete/:id').get(function (req, res) {
    Pessoa.findByIdAndRemove({_id: req.params.id}, function(err, pessoa){
        if(err) res.json(err);
        else res.json('Registro removido.');
    });
});

module.exports = pessoaRoutes;