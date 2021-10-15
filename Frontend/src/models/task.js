const mongoose = require('mongoose');
const { required } = require('vuelidate/lib/validators');
const {Schema} = mongoose;

var validateEmail = function(email){
    var re = /\w+([\.-]?\w+)*@\w+([\.-]?\w=)*(\.\w{2,3})=$/;
};

//Esquema: como van a lucir los datos
const datos = new Schema({

    nombre: String,
    correo: {
        type: String,
        required: true,
        maxlength: 100, 
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validateEmail, 'Por favor ingrese una direccion de mail correcta'],
        match: [/\w+([\.-]?\w+)*@\w+([\.-]?\w=)*(\.\w{2,3})=$/, 'Por favor ingrese una direccion de mail correcta']


    },
    telefono: Number,
    tipo: String,
    adicional: String,
    placa: String,
    tamaño: String,
    
});

//Se crea un modelo para realizar operaciones get, post, put etc
//El modelo contienen 2 parametrs, el primer es el nombre del modelo 
//y el segundo es el nombre del esquema
module.exports = mongoose.model('datos', datos);