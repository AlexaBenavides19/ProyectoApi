const express = require('express');
const categoriaSchema = require('../models/categoria'); 

// Constructor
const router = express.Router();

// Crear producto
router.post('/categoria', (req, res) => { 
    const producto = new categoriaSchema(req.body); // Cambio de "usuarioSchema" a "productoSchema"
    producto
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener todos los productos
router.get('/categoria', (req, res) => {
    categoriaSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener un producto
router.get('/categoria/:id', (req, res) => { 
    const { id } = req.params;
    categoriaSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Actualizar un producto
router.put('/categoria/:id', (req, res) => { 
    const { id } = req.params;
    const { nombre, categoria, descripcion } = req.body;
    categoriaSchema
        .updateOne({ _id: id }, { $set: { nombre, categoria, descripcion } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Eliminar un producto
router.delete('/categoria/:id', (req, res) => { 
    const { id } = req.params;
    categoriaSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
