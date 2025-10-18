const mongoose = require('mongoose');

const visitaSchema = new mongoose.Schema({
  visitante: {
    nombre: {
      type: String,
      required: [true, 'El nombre es obligatorio'],
      trim: true
    },
    apellido: {
      type: String,
      required: [true, 'El apellido es obligatorio'],
      trim: true
    },
    documento: {
      type: String,
      required: [true, 'El documento es obligatorio'],
      unique: false
    },
    empresa: {
      type: String,
      trim: true
    }
  },
  visitado: {
    nombre: {
      type: String,
      required: [true, 'El nombre del visitado es obligatorio'],
      trim: true
    },
    area: {
      type: String,
      trim: true
    }
  },
  motivo: {
    type: String,
    required: [true, 'El motivo es obligatorio'],
    trim: true
  },
  fechaEntrada: {
    type: Date,
    default: Date.now,
    required: true
  },
  fechaSalida: {
    type: Date
  },
  estado: {
    type: String,
    enum: ['activa', 'finalizada'],
    default: 'activa'
  },
  observaciones: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Visita', visitaSchema);
