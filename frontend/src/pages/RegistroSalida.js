import React, { useState } from 'react';
import './RegistroSalida.css';

function RegistroSalida() {
  const [documento, setDocumento] = useState('');
  const [observaciones, setObservaciones] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registro de Salida:', { documento, observaciones });
    // Aquí se implementará la lógica de envío al backend
  };

  return (
    <div className="registro-salida-container">
      <div className="registro-header">
        <h1 className="registro-title">🚪 Registro de Salida</h1>
        <p className="registro-subtitle">Complete el formulario para registrar su salida</p>
      </div>

      <form onSubmit={handleSubmit} className="registro-form">
        <div className="form-group">
          <label htmlFor="documento">Número de Documento *</label>
          <input
            type="text"
            id="documento"
            name="documento"
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
            placeholder="Ingrese su número de documento"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="observaciones">Observaciones</label>
          <textarea
            id="observaciones"
            name="observaciones"
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
            placeholder="Agregar observaciones adicionales (opcional)"
            rows="4"
          />
        </div>

        <div className="info-box">
          <p>ℹ️ Por favor, verifique que haya ingresado su documento correctamente</p>
        </div>

        <button type="submit" className="submit-button">
          ✅ Registrar Salida
        </button>
      </form>
    </div>
  );
}

export default RegistroSalida;
