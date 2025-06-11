// src/components/AdminDashboard.jsx

import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import './AdminDashboard.css';
import EmployeesPage from './EmployeesPage';
import ProductsPage from './ProductsPage';
import OrderHistoryPage from './OrderHistoryPage';
import PreferencesPage from './PreferencesPage';
import InventoryPage from './InventoryPage';
import DiscountsPage from './DiscountsPage'; // ¡NUEVO: Importa el componente DiscountsPage!

function AdminDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const ADMIN_BASE_PATH = "/admin-dashboard"; 

  const adminOptions = [
    { name: "EMPLEADOS", path: "employees" },
    { name: "PRODUCTOS", path: "products" },
    { name: "HISTORIAL PEDIDOS", path: "order-history" },
    { name: "PREFERENCIAS", path: "preferences" },
    { name: "INVENTARIO", path: "inventory" },
    { name: "DESCUENTOS", path: "discounts" } // Ya incluido, pero lo confirmo
  ];

  const handleNavClick = (relativePath) => {
    const fullPathToNavigate = `${ADMIN_BASE_PATH}/${relativePath}`;
    console.log(`--- DEBUG: Botón '${relativePath}' clickeado ---`); // Puedes quitar este log
    console.log("Calculated (hardcoded) target fullPath for navigation:", fullPathToNavigate); // Y este
    navigate(fullPathToNavigate);
  };

  const isActive = (relativePath) => {
    const currentFullPath = location.pathname;
    const targetFullPath = `${ADMIN_BASE_PATH}/${relativePath}`;

    if (relativePath === "employees" && currentFullPath === ADMIN_BASE_PATH) {
      return true; 
    }
    
    return currentFullPath.startsWith(targetFullPath);
  };

  return (
    <div className="admin-dashboard-container">
      {/* BARRA LATERAL */}
      <div className="admin-sidebar">
        <div className="sidebar-header">
          <div className="menu-icon">☰</div>
          <div className="admin-name">nombre admin</div>
        </div>
        <div className="profile-section">
          <div className="profile-pic">foto/img</div>
        </div>
        <nav className="admin-nav">
          {adminOptions.map((option, index) => (
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
      <div className="admin-content-area">
        {/* QUITA ESTA LÍNEA si la dejaste, o asegúrate de que no esté */}
        {/* <p style={{color: '#ffdd00', textAlign: 'center', fontWeight: 'bold', fontSize: '0.9em', margin: '5px 0'}}>
            DEBUG: URL actual dentro de Routes (parte final): {location.pathname.replace(ADMIN_BASE_PATH, '')}
        </p> */}
        <Routes>
          <Route index element={<h2 className="welcome-message">Bienvenido al Dashboard de Administrador</h2>} />
          <Route path="employees" element={<EmployeesPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="order-history" element={<OrderHistoryPage />} />
          <Route path="preferences" element={<PreferencesPage />} />
          <Route path="inventory" element={<InventoryPage />} />
          {/* ¡CAMBIO AQUÍ! Reemplazamos el placeholder con el componente DiscountsPage */}
          <Route path="discounts" element={<DiscountsPage />} />

          <Route path="*" element={<h2 className="not-found">Página no encontrada desde AdminDashboard</h2>} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminDashboard;