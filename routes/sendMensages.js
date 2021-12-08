const express = require('express');
const connection = require('../database/connection');
const Mensagem = require('../database/Mensagens');
const router = express.Router();


router.get('/:username/:funcao', (req, res)=>{
    if(req.params.funcao == 'dev'){
       Mensagem.findAll({
            where: {
               user: req.params.username
           }
       }).then(mensagem => {
           res.send(mensagem)
       });
       
    }else{
        Mensagem.findAll({raw: true, order:[['id', 'DESC']]}).then(mensagem => {
            res.send(mensagem);
        });
    }
   
});

module.exports = router