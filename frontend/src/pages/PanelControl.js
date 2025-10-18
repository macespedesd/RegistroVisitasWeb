import React, { useState, useEffect } from 'react';
import './PanelControl.css';

function PanelControl() {
  const [visitas, setVisitas] = useState([]);
  const [filtro, setFiltro] = useState('todas');
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    // Aquí se implementará la lógica para cargar las visitas del backend
    console.log('Cargando visitas...');
  }, []);

  return (
    <div className="panel-control-container">
      <div className="panel-header">
        <h1 className="panel-title">📊 Panel de Control</h1>
        <p className="panel-subtitle">Monitoreo de visitas en tiempo real</p>
      </div>

      <div className="panel-controls">
        <div className="filter-section">
          <label htmlFor="filtro">Filtrar por estado:</label>
          <select 
            id="filtro"
            value={filtro} 
            onChange={(e) => setFiltro(e.target.value)}
            className="filter-select"
          >
            <option value="todas">Todas las visitas</option>
            <option value="activas">Visitas activas</option>
            <option value="finalizadas">Visitas finalizadas</option>
          </select>
        </div>

        <div className="search-section">
          <label htmlFor="busqueda">Buscar:</label>
          <input
            type="text"
            id="busqueda"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar por nombre, documento o empresa..."
            className="search-input"
          />
        </div>
      </div>

      <div className="stats-section">
        <div className="stat-card stat-card-blue">
          <div className="stat-icon">📊</div>
          <div className="stat-info">
            <h3>Total de Visitas</h3>
            <p className="stat-number">{visitas.length}</p>
          </div>
        </div>

        <div className="stat-card stat-card-green">
          <div className="stat-icon">✅</div>
          <div className="stat-info">
            <h3>Visitas Activas</h3>
            <p className="stat-number">
              {visitas.filter(v => !v.horaSalida).length}
            </p>
          </div>
        </div>

        <div className="stat-card stat-card-purple">
          <div className="stat-icon">🚪</div>
          <div className="stat-info">
            <h3>Visitas Finalizadas</h3>
            <p className="stat-number">
              {visitas.filter(v => v.horaSalida).length}
            </p>
          </div>
        </div>
      </div>

      <div className="table-container">
        <h2 className="table-title">Registro de Visitas</h2>
        <table className="visitas-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Documento</th>
              <th>Empresa</th>
              <th>Persona a Visitar</th>
              <th>Hora Entrada</th>
              <th>Hora Salida</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {visitas.length === 0 ? (
              <tr>
                <td colSpan="7" className="empty-message">
                  No hay visitas registradas
                </td>
              </tr>
            ) : (
              visitas.map((visita, index) => (
                <tr key={index} className={visita.horaSalida ? 'finalizada' : 'activa'}>
                  <td>{visita.nombre} {visita.apellido}</td>
                  <td>{visita.documento}</td>
                  <td>{visita.empresa || 'N/A'}</td>
                  <td>{visita.personaVisitar}</td>
                  <td>{visita.horaEntrada}</td>
                  <td>{visita.horaSalida || '-'}</td>
                  <td>
                    <span className={`status-badge ${visita.horaSalida ? 'status-finalizada' : 'status-activa'}`}>
                      {visita.horaSalida ? 'Finalizada' : 'Activa'}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PanelControl;
