const express = require('express');
const connection = require('../database/connection');
const User = require('../database/Users');
const router = express.Router();

router.post('/cadastrar', (req, res)=>{
    console.log(req.body)
    User.create({
        username: req.body.login,
        password: req.body.senha,
        firstName: req.body.nome,
        squad: req.body.squad,
        funcao: req.body.funcao

    }).then(()=>{

        console.log('usuario criado com sucesso');
        success();

    }).catch(error => {
        res.status(409).json({

            error: 409,
            mensagem: 'Usuário já existe'
            
        })
        
    })

    function success(){
        res.send(req.body)
    }
    
   
})

module.exports = router