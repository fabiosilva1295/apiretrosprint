const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 4001;
const connection = require('./database/connection');
const Mensagem = require('./database/Mensagens');
const cors = require('cors');
const { application } = require('express'); 

//conexão com o banco de dados
connection.authenticate().then(()=>{
    console.log('Conectado com sucesso ao banco de dados.');
}).catch((erro)=>{
    console.log(erro);
});

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    app.use(cors());
    next();
})
app.use(express.json({extended: true}));

app.get('/', (req, res)=>{
    Mensagem.findAll({raw: true, order:[['id', 'DESC']]}).then(mensagem => {
        res.send(mensagem);
    });
});

app.post('/save/:id', (req,res)=>{
    let categoria = req.params.id;
    let mensagem = req.body.mensagem;

    console.log('toma ai oque procuras',categoria, 'e', mensagem)

    Mensagem.create({
        categoria: categoria,
        mensagem: mensagem
    }).then(()=>{
        console.log('mensagem')
    }).catch(()=>{
        console.log('erro ao criar a nota');
    });
    
});

app.listen(port, err=>{
    console.log('Servidor online em', 'http://localhost:4001')
})