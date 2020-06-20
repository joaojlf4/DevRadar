const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes');
const http = require('http')

const server = http.Server(app)
const { setupWebsocket } = require('./websocket')

setupWebsocket(server)

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-1ar44.mongodb.net/week10?retryWrites=true&w=majority', 
                { useCreateIndex: true, 
                  useNewUrlParser: true, 
                  useUnifiedTopology: true 
                });

app.use(cors())

app.use(express.json()); // a declaração de uso de uma api rest deve ser declarada primeiro que as rotas

app.use(routes);


// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetro: 
// Query params: req.query (Filtros, ordenação, paginação ...)
// Route params: req.params (Identificar um recurso na alteração ou remoção)
// Body: req.body (Dados para a criação ou para a alteração de um registro)

// MongoDB (Não-relacional)


server.listen(3333);