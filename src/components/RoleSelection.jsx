// src/components/RoleSelection.jsx

import React from 'react';
import './RoleSelection.css';

// Recibimos la prop `onRoleSelect`
function RoleSelection({ onRoleSelect }) {
  const roles = [
    "Administrador",
    "Cocinero",
    "Mesero",
    "Cajero"
  ];

  const handleCardClick = (role) => {
    if (onRoleSelect) {
      onRoleSelect(role); // Llama a la función de prop con el rol seleccionado
    }
  };

  return (
    <div className="role-selection-container">
      <div className="role-header">
        <h1 className="role-title">PEAK PERFORMANCE</h1>
        <p className="role-subtitle">Roles</p>
      </div>

      <div className="roles-grid">
        {roles.map((role, index) => (
          <div
            key={index}
            className="role-card"
            onClick={() => handleCardClick(role)} // Agrega el evento onClick
          >
            {role}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoleSelection;