const express = require('express');
const connection = require('../database/connection');
const Mensagem = require('../database/Mensagens');
const Users = require('../database/Users')
const router = express.Router();


router.post('/save/:id', (req,res)=>{
    let categoria = req.params.id;
    let mensagem = req.body.mensagem;
    let squad = req.body.squad;
    let username = req.body.username

    console.log('toma ai oque procuras',categoria, 'e', mensagem);

    Users.findAll({
        where: {
            squad: squad
        }
    }).then(users => {
        users.forEach(user => {
            if(user.funcao == 'sm'){

                Mensagem.create({
                    categoria: categoria,
                    mensagem: mensagem,
                    squad: squad,
                    user: username,
                    sm: user.username,
                    sprint: "2"
                
                }).then(()=>{
                    console.log('mensagem')
                }).catch(()=>{
                    console.log('erro ao criar a nota');
                    console.log(req.body, req.params.id)
                });

            }
        })
    })



    
    
});

module.exports = router;