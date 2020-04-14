const express = require('express');
const exphds = require('express-handlebars');
const path = require('path');

//initializations
const app = express();

//settings
app.set('port',process.env.PORT || 3000);                  //Definir ruta del puerto servidor
app.set('views', path.join(__dirname,'views'));            //Definir ruta de vistas
app.engine('.hbs', exphds({                                //Motor de plantillas para las vistas
    defaultLayout: 'main',                                 //Plantilla principal
    layoutsDir: path.join(app.get('views'),'layouts'),     //Diretorio del layout
    partialsDir: path.join(app.get('views'),'partials'),   //Directorio partial 
    extname: '.hbs'                                        //Extension de las vistas
}));

app.set('view engine', '.hbs');

//middlewares
app.use(express.urlencoded({extended: false}));            //Leer formatos tipo JSON

//Global variables

//Routes
app.use(require('./routes/index.routes'));

//static files
app.use(express.static(path.join(__dirname, 'public')));   //Definir la ruta publica del proyecto

module.exports = app;