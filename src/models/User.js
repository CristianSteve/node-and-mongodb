//Modelamiento de base de datos
const { Schema, model } = require('mongoose');

//Modulo de encriptacion
const bcrypt = require('bcryptjs');

//Esctrutura
const userSchema = new Schema({
    name : { type : String, required : true },
    email : { type : String, required : true, unique: true},
    password : { type : String, required : true }
},{
    timestamps : true
});

//Crear metodo para encriptar contraseñas
// --userShecha : Schema
//   .methods : crear un metodo
//   .encrypPassword : Nombre del metodo
// --bcryptjs: Modulo para encriptar
userSchema.methods.encrypPassword = async password => {
    const salt = await bcrypt.genSalt(10);                       //await: Asincrono, debe agregar async para que funcione le metodo
    return await bcrypt.hash(password, salt);
}

//Desencriptar contraseña
userSchema.methods.matchPassword = async function (password){
    return await bcrypt.compare(password, this.password);
}

module.exports = model('Users',userSchema);