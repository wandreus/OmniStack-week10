const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

// mongoose para conectar no BD gratuito para testar a aplicação
mongoose.connect('mongodb+srv://wandreus:102030@omnistack-uobc6.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)

// Metodos HTTP: 
// GET, POST, PUT, DELETE

// Tipos de parâmentros:
// Query Params: request.query (Filtro, ordenação, paginação, ...)
// Route Params: request.params (Identifica um recurso na alteração ou remoção)
// body: request.body (São dados para criação ou alteração de resgistro)

// MongoDB (não-relacional) mais perfomatico e de facil incialização


app.listen(3333)

