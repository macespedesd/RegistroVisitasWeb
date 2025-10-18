const express = require('express');
const router = express.Router();
const Visita = require('../models/visita');
router.post('/entrada', async (req, res) => {
  try {
    const visita = new Visita(req.body);
    await visita.save();
    res.status(201).json({ message: 'Entrada registrada', visita });
  } catch (error) {
    res.status(400).json({ message: 'Error al registrar entrada', error });
  }
});
router.post('/salida', async (req, res) => {
  const { documento, observaciones } = req.body;
  try {
    const visita = await Visita.findOne({ documento, estado: 'activa' });
    if (!visita) return res.status(404).json({ message: 'No se encontró entrada activa' });
    visita.horaSalida = new Date();
    visita.estado = 'finalizada';
    visita.observaciones = observaciones || '';
    await visita.save();
    res.json({ message: 'Salida registrada', visita });
  } catch (error) {
    res.status(400).json({ message: 'Error al registrar salida', error });
  }
});
router.get('/', async (req, res) => {
  const { estado } = req.query;
  let filter = {};
  if (estado) filter.estado = estado;
  try {
    const visitas = await Visita.find(filter).sort({ horaEntrada: -1 });
    res.json(visitas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener visitas', error });
  }
});
module.exports = router;
