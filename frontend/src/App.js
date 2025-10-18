import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import RegistroEntrada from './pages/RegistroEntrada';
import RegistroSalida from './pages/RegistroSalida';
import PanelControl from './pages/PanelControl';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/entrada" element={<RegistroEntrada />} />
          <Route path="/salida" element={<RegistroSalida />} />
          <Route path="/panel" element={<PanelControl />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
