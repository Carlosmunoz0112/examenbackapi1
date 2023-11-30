
const mongoose = require('mongoose');

const vehiculoSchema = mongoose.Schema({
    numero: {
        type: String,
        required: [true, 'El campo numero es obligatorio']
    },
    placa: {
        type: String,
        required: [true, 'El campo placa es obligatorio']
    },
    horasreparacion: {
        type: String,
        required: [true, 'El campo horasreparacion es obligatorio']
    },
    precioreparacion: {
        type: String,
        required: [true, 'El campo precioreparacion es obligatorio']
    },
    observaciones: {
        type: String,
        required: [true, 'El campo observaciones es obligatorio']
    }
   
});

module.exports = mongoose.model('vehiculos', vehiculoSchema);
