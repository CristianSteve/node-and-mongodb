//Modelamiento de base de datos
const {Schema, model} = require('moongose');

//Esctrutura
const noteSchema = new Schema({
    title : {
        type :String,
        required : true
    },
    description : {
        type: String,
        required: true
    }
},{
    timestamps : true
});

module.exports = model('Note', noteSchema);