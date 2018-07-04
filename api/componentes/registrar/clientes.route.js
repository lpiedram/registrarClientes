'use strict'
const express = require('express');
const router = express.Router();
const clientesApi = require('./clientes.api');

router.route('/registrar_cliente')
    .post(function(req,res){
        clientesApi.registrar(req, res);
    });

router.route('/listar_cliente')
    .post(function (req, res) {
        clientesApi.listar(req, res);
    });

module.exports = router;