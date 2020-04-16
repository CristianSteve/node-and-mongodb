//Driver MongoDB
const mongoose = require('mongoose');

//Variable de entorno de conexion
const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE } = process.env;
const MOONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

//Conexion con MongoDB
mongoose.connect(MOONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(db=> console.log("Connect")) 
.catch(err => console.log(err));
