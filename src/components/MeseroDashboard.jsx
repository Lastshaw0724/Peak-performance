// src/components/MeseroDashboard.jsx

import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import './MeseroDashboard.css'; // Importa el CSS específico para MeseroDashboard

// --- Importa el componente QrPage ---
import QrPage from './QrPage';
// NOTA: No importamos CartillaPage.jsx ni MeseroPageStyles.css aquí para evitar errores si no existen.
// La ruta "cartilla" seguirá mostrando un placeholder de texto.

function MeseroDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  // Definimos la ruta base para el dashboard del mesero
  const MESERO_BASE_PATH = "/mesero-dashboard"; 

  const meseroOptions = [
    { name: "QR", path: "qr" }, // ¡CAMBIO AQUÍ! Nombre "QR" y ruta "qr"
    { name: "CARTILLA", path: "cartilla" },
    { name: "PEDIDOS", path: "pedidos" },
    { name: "ASIGNAR MESA", path: "asignar-mesa" },
    { name: "PEDIDOS EN CURSO", path: "pedidos-en-curso" }
  ];

  const handleNavClick = (relativePath) => {
    const fullPathToNavigate = `${MESERO_BASE_PATH}/${relativePath}`;
    console.log(`Mesero Dashboard: Navegando a: ${fullPathToNavigate}`);
    navigate(fullPathToNavigate);
  };

  const isActive = (relativePath) => {
    const currentFullPath = location.pathname;
    const targetFullPath = `${MESERO_BASE_PATH}/${relativePath}`;

    // Si estás en la ruta base del mesero y quieres resaltar "QR" por defecto
    if (relativePath === "qr" && currentFullPath === MESERO_BASE_PATH) {
      return true; 
    }
    
    return currentFullPath.startsWith(targetFullPath);
  };

  return (
    <div className="mesero-dashboard-container">
      {/* BARRA LATERAL DEL MESERO */}
      <div className="mesero-sidebar">
        <div className="sidebar-header">
          <div className="menu-icon">☰</div>
          <div className="admin-name">Nombre: Mesero/Usuario</div>
        </div>
        <div className="profile-section">
          <div className="profile-pic">foto/img</div>
        </div>
        <nav className="mesero-nav">
          {meseroOptions.map((option, index) => (
            <button
              key={index}
              className={`nav-button ${isActive(option.path) ? 'active' : ''}`}
              onClick={() => handleNavClick(option.path)}
            >
              {option.name}
            </button>
          ))}
        </nav>
      </div>

      {/* CONTENIDO PRINCIPAL A LA DERECHA */}
      <div className="mesero-content-area">
        <Routes>
          {/* Ruta índice: lo que se muestra al llegar a /mesero-dashboard */}
          <Route index element={<h2 className="welcome-message">Bienvenido al Panel de Mesero</h2>} />

          {/* ¡CAMBIO AQUÍ! Ruta para "qr" ahora muestra QrPage */}
          <Route path="qr" element={<QrPage />} />
          
          {/* Ruta para "cartilla" que sigue siendo un placeholder de texto */}
          <Route path="cartilla" element={<h2 className="temp-content">Contenido de Cartilla (futuro)</h2>} />
          
          {/* Rutas de placeholders para las otras secciones */}
          <Route path="pedidos" element={<h2 className="temp-content">Contenido de Pedidos (futuro)</h2>} />
          <Route path="asignar-mesa" element={<h2 className="temp-content">Contenido de Asignar Mesa (futuro)</h2>} />
          <Route path="pedidos-en-curso" element={<h2 className="temp-content">Contenido de Pedidos en Curso (futuro)</h2>} />
          
          {/* Ruta de fallback si la URL no coincide con ninguna de las anteriores */}
          <Route path="*" element={<h2 className="not-found">Página no encontrada (Mesero)</h2>} />
        </Routes>
      </div>
    </div>
  );
}

export default MeseroDashboard;