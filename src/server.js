const express = require('express');
const exphds = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');         //Metodos DELETE..ETC
const flash = require('connect-flash');                    //Modulos de envio de mensajes vistas
const session = require('express-session');                //Modulos de envio de mensajes vistas
const passport = require('passport');                      //Verificacion de sesiones


//initializations
const app = express();
require('./config/passport');                              //Modulo creado para verificar sesiones

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
app.use(morgan('dev'));                                    //Ver las peticiones al servidor
app.use(express.urlencoded({extended: false}));            //Leer formatos tipo JSON
app.use(methodOverride('_method'));                        //Adicionar metodos para formularios vista
app.use(session({ secret: 'secret',                        //Usar mensajes de notificacion
                  resave: true,
                  saveUninitialized: true 
                }));
app.use(passport.initialize());                            //inicializa el modulo [Tiene que estar despues de la session]
app.use(passport.session());                               //utiliza las sesiones 
app.use(flash());

//Global variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

//Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));
app.use(require('./routes/user.routes'));

//static files
app.use(express.static(path.join(__dirname, 'public')));   //Definir la ruta publica del proyecto

module.exports = app;