//Modelamiento de base de datos
const {Schema, model} = require('mongoose');                 //Driver de MONGOOSE

//Esctrutura
const noteSchema = new Schema({
    title : {
        type :String,
        required : true
    },
    description : {
        type: String,
        required: true
    },
    user : {
        type : String,
        required: true
    },
    state : {
        type : String,
        required : true
    },
    share : {
        type : Array
    }
},{
    timestamps : true
});

module.exports = model('Note', noteSchema);