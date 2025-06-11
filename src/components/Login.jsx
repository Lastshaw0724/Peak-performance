// src/components/Login.jsx

import React from 'react';
import './Login.css';

// Recibimos la prop `onLoginSuccess`
function Login({ onLoginSuccess }) {
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que la página se recargue al enviar un formulario
    // Aquí iría tu lógica de autenticación (ej: enviar a una API, verificar credenciales).
    // Por ahora, solo simularemos un login exitoso.

    console.log("Intentando ingresar...");

    // Simulamos un login exitoso después de un pequeño retraso
    setTimeout(() => {
      // Si el login fue exitoso, llamamos a la función de navegación
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    }, 500); // Pequeño retraso para simular un proceso
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">PEAK PERFORMANCE</h1>

        {/* Envuelve tus inputs y el botón INGRESAR en un <form> */}
        {/* Así puedes manejar el envío del formulario más fácilmente */}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Correo:</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className="input-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" />
          </div>

          <div className="button-group">
            <button type="button" className="forgot-password-btn">OLVIDE MI CONTRASEÑA</button>
            {/* El botón INGRESAR ahora es de tipo submit para el formulario */}
            <button type="submit" className="login-btn">INGRESAR</button>
            <button type="button" className="create-account-btn">CREAR CUENTA</button>
          </div>
        </form> {/* Cierra el <form> */}
      </div>
    </div>
  );
}

export default Login;