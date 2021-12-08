require('dotenv/config')
const express = require('express');
const connection = require('../database/connection');
const User = require('../database/Users');
const router = express.Router();
const jwt = require('jsonwebtoken')

router.post('/login', (req, res)=>{
    

    const findUserByUsername =   new Promise((resolve, reject)=>{
        User.findOne({where: {username: req.body.username}}).then(user => {
            resolve(user)
        }).catch(error => {
            reject(error)
        })
    });

    
    findUserByUsername.then(user => {
        if(user.username === req.body.username && user.password === req.body.password){
            console.log('usuario e senha ok', user)
            const token = jwt.sign({
                id_user: user.id,
                name: user.firstName,
                
            }, '33fABiO031295', 
            {
                expiresIn: '1h'
            });

            res.status(200).json({
                token: token, 
                user: user.username,
                squad: user.squad,
                nome: user.firstName,
                funcao: user.funcao
            })
        }else{
            res.status(401).json({
                error: 401,
                mensage: 'Usuário ou senha invalídos'
            })
        }
    }).catch(error => res.status(401).json({
        error: 401,
        mensage: 'Usuário ou senha invalídos'
    }))
})


module.exports = router;
