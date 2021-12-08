const express = require('express');
const connection = require('../database/connection');
const Mensagem = require('../database/Mensagens');
const Users = require('../database/Users')
const router = express.Router();

router.get('/backlog/:sm', (req, res)=>{
    const backlogList = [];
    const sprint = {}
    Mensagem.findAll({
        where: {
            sm: req.params.sm
        }
    }).then(mensagens => {
        mensagens.forEach(mensagem => {
            console.log(mensagem.sprint)
        })
        
    }).catch(error => {
        console.log(error)
    });
});

module.exports = router;