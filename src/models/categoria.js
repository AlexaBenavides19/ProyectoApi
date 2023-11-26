
const mongoose = require ( 'mongoose');

const categoriaSchema = mongoose.Schema({
    id: {
        type: String,
        required: [true, 'El campo id es obligatorio']
    },
    categoria: {
        type: String,
        required: [true, 'El campo categoria es obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, 'El campo de descripcion es obligatorio']
    }
});

module.exports = mongoose.model('categoria', categoriaSchema);
