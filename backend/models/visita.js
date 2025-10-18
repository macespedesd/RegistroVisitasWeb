const mongoose = require('mongoose');
const VisitaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  documento: { type: String, required: true },
  empresa: { type: String, required: true },
  personaAVisitar: { type: String, required: true },
  motivo: { type: String, required: true },
  horaEntrada: { type: Date, default: Date.now, required: true },
  horaSalida: { type: Date },
  observaciones: { type: String },
  estado: { type: String, enum: ['activa', 'finalizada'], default: 'activa' }
});
module.exports = mongoose.model('Visita', VisitaSchema);
