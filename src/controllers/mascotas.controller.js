const { request, response } = require('express');
const Mascota = require('../models/Mascota');

const getMascotas = async(req = request, res = response) => {
    const listMascota = await Mascota.find().exec()
    res.json({ data: listMascota })
}

const getMascotaId = async(req = request, res = response) => {
    const _id = req.params.id
    const mascota = await Mascota.findById({ _id }).exec()
    res.json({ data: mascota })
}

module.exports = {
    getMascotas,
    getMascotaId
}