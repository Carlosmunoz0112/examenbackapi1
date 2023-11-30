const express = require('express');
const vehiculoSchema = require('../models/vehiculos'); 

// Constructor
const router = express.Router();

// Crear producto
router.post('/vehiculos', (req, res) => { 
    const vehiculo = new vehiculoSchema(req.body); // Cambio de "usuarioSchema" a "productoSchema"
    vehiculo
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener todos los productos
router.get('/vehiculos', (req, res) => {
    vehiculoSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener un vehiculo
router.get('/vehiculos/:placa', (req, res) => { 
    const { placa } = req.params;
    vehiculoSchema
    .findOne({ placa: placa })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Actualizar un producto
router.put('/vehiculos/:numero', (req, res) => { 
    const { numero } = req.params;
    const { placa, horasreparacion, precioreparacion, observaciones } = req.body;
    vehiculoSchema
        .updateOne({ _id: numero }, { $set: { placa, horasreparacion, precioreparacion, observaciones } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Eliminar un producto
router.delete('/vehiculos/:numero', (req, res) => { 
    const { numero } = req.params;
    vehiculoSchema
        .deleteOne({ _id: numero })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
