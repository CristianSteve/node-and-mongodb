const express = require('express');
const path = require('path');

//initializations
const app = express();

//settings
app.set('port',process.env.PORT || 3000);                  //Definir ruta del puerto servidor
app.set('views', path.join(__dirname,'views'));            //Definir ruta de vistas

//middlewares
app.use(express.urlencoded({extended: false}));            //Leer formatos tipo JSON

//Global variables

//Routes
app.get('/', (req, res) =>{
    res.send('Hello word');
});

//static files
app.use(express.static(path.join(__dirname, 'public')));   //Definir la ruta publica del proyecto

module.exports = app;