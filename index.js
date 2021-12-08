const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4001;
const connection = require('./database/connection');

const sendMensages = require('./routes/sendMensages');
const userAdd = require('./routes/userAdd');
const addMensages = require('./routes/addMensages');
const login = require('./routes/login');
const backlog = require('./routes/backlog')





//conexão com o banco de dados
connection.authenticate().then(()=>{
    console.log('Conectado com sucesso ao banco de dados.');
}).catch((erro)=>{
    console.log(erro);
});

//Configuração do CORS
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    app.use(cors());
    next();
})

app.use(express.json({extended: true}));

//Rotas 
app.get('/backlog/:sm', backlog)
app.get('/:username/:funcao', sendMensages);
app.post('/cadastrar', userAdd);
app.post('/save/:id', addMensages);
app.post('/login', login);



//Iniciando o Server
app.listen(port, err=>{
    console.log('Servidor online em', 'http://localhost:4001')
})