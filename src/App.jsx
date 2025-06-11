// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import Login from './components/login';             // Tu componente de login
import RoleSelection from './components/RoleSelection'; // Tu componente de selección de rol
import AdminDashboard from './components/AdminDashboard'; // Tu dashboard de administrador
import MeseroDashboard from './components/MeseroDashboard'; // ¡Tu nuevo dashboard de mesero!

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal de login */}
        <Route path="/" element={<LoginComponentWithNavigation />} />
        {/* Ruta para la selección de roles después del login */}
        <Route path="/roles" element={<RoleSelectionComponentWithNavigation />} />
        {/* Ruta para el dashboard de administrador (con wildcard para rutas anidadas) */}
        <Route path="/admin-dashboard/*" element={<AdminDashboard />} /> 
        {/* Ruta para el dashboard del mesero (con wildcard para rutas anidadas) */}
        <Route path="/mesero-dashboard/*" element={<MeseroDashboard />} />

        {/* Ruta de fallback: si ninguna de las rutas anteriores coincide */}
        <Route path="*" element={<h2>Error 404 - Página no encontrada (desde App.jsx)</h2>} />
      </Routes>
    </Router>
  );
}

// Componente Wrapper para Login con navegación
function LoginComponentWithNavigation() {
  const navigate = useNavigate();
  const handleLoginSuccess = () => {
    navigate('/roles'); // Navega a la selección de roles tras un login exitoso
  };
  return <Login onLoginSuccess={handleLoginSuccess} />;
}

// Componente Wrapper para RoleSelection con navegación
function RoleSelectionComponentWithNavigation() {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    if (role === "Administrador") {
      navigate('/admin-dashboard'); // Navega al dashboard de administrador
    } else if (role === "Mesero") { 
      navigate('/mesero-dashboard'); // Navega al dashboard del mesero
    } else {
      console.log(`Rol seleccionado: ${role}. Implementar navegación para este rol.`);
      // Aquí podrías manejar otros roles o mostrar un mensaje
    }
  };

  return <RoleSelection onRoleSelect={handleRoleSelect} />;
}

export default App;