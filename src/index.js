// Variables de entorno
require('dotenv').config();

//Servidor
const app = require('./server');
require('./database');

app.listen(app.get('port'), ()=>{
    console.log(`Servidor subio en ${app.get('port')}`);
})