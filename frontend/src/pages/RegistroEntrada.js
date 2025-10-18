import React, { useState } from 'react';
import './RegistroEntrada.css';

function RegistroEntrada() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    documento: '',
    empresa: '',
    motivo: '',
    personaVisitar: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registro de Entrada:', formData);
    // Aquí se implementará la lógica de envío al backend
  };

  return (
    <div className="registro-entrada-container">
      <div className="registro-header">
        <h1 className="registro-title">📝 Registro de Entrada</h1>
        <p className="registro-subtitle">Complete el formulario para registrar su ingreso</p>
      </div>

      <form onSubmit={handleSubmit} className="registro-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nombre">Nombre *</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ingrese su nombre"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="apellido">Apellido *</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              placeholder="Ingrese su apellido"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="documento">Documento *</label>
            <input
              type="text"
              id="documento"
              name="documento"
              value={formData.documento}
              onChange={handleChange}
              placeholder="Número de documento"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="empresa">Empresa</label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              placeholder="Nombre de su empresa"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="personaVisitar">Persona a Visitar *</label>
          <input
            type="text"
            id="personaVisitar"
            name="personaVisitar"
            value={formData.personaVisitar}
            onChange={handleChange}
            placeholder="Nombre de la persona que va a visitar"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="motivo">Motivo de la Visita *</label>
          <textarea
            id="motivo"
            name="motivo"
            value={formData.motivo}
            onChange={handleChange}
            placeholder="Describa el motivo de su visita"
            rows="4"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          ✅ Registrar Entrada
        </button>
      </form>
    </div>
  );
}

export default RegistroEntrada;
