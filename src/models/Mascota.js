const { Schema, model } = require('mongoose');

const mascotaSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    edad: { type: String, required: true },
    tipo: { type: String, required: true },
    fecha_nacimiento: { type: Date },
    raza: { type: String },
    red_social: { type: String },
    sexo: { type: String, required: true },
    cliente_codigo: { type: Schema.Types.ObjectId, ref: 'Cliente' },
    createdAt: { type: Date, select: false },
    updatedAt: { type: Date, select: false }
}, {
    timestamps: true,
    versionKey: false,
    collection: 'mascotas'
})

module.exports = model('Mascota', mascotaSchema)