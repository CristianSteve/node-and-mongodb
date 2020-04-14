const app = require('./server');

app.listen(app.get('port'), ()=>{
    console.log(`Servidor subio en ${app.get('port')}`);
})