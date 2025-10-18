const express = require('express');
const router = express.Router();
const Visita = require('../models/visita');

// GET todas las visitas
router.get('/', async (req, res) => {
  try {
    const visitas = await Visita.find().sort({ fechaEntrada: -1 });
    res.json(visitas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET visita por ID
router.get('/:id', async (req, res) => {
  try {
    const visita = await Visita.findById(req.params.id);
    if (!visita) {
      return res.status(404).json({ error: 'Visita no encontrada' });
    }
    res.json(visita);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST crear nueva visita
router.post('/', async (req, res) => {
  try {
    const nuevaVisita = new Visita(req.body);
    await nuevaVisita.save();
    res.status(201).json(nuevaVisita);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT actualizar visita (registrar salida)
router.put('/:id', async (req, res) => {
  try {
    const visita = await Visita.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!visita) {
      return res.status(404).json({ error: 'Visita no encontrada' });
    }
    res.json(visita);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE eliminar visita
router.delete('/:id', async (req, res) => {
  try {
    const visita = await Visita.findByIdAndDelete(req.params.id);
    if (!visita) {
      return res.status(404).json({ error: 'Visita no encontrada' });
    }
    res.json({ message: 'Visita eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
