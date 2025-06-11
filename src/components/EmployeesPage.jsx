// src/components/EmployeesPage.jsx

import React from 'react';
import './EmployeesPage.css'; // Importa el CSS

// Eliminamos las importaciones de imágenes locales, ya que usaremos URLs
// import chef1 from '../assets/chef1.jpg';
// import chef2 from '../assets/chef2.jpg';
// import waiter1 from '../assets/waiter1.jpg';
// import waiter2 from '../assets/waiter2.jpg';
// import cashier1 from '../assets/cashier1.jpg';
// import cashier2 from '../assets/cashier2.jpg';

function EmployeesPage() {
  return (
    <div className="employees-page-container">
      <div className="employees-header">
        <h2 className="employees-title">EMPLEADOS</h2>
        {/* Aquí podrías tener un icono o botón para añadir empleados */}
        <div className="add-employee-icon"></div> {/* Este será el rectángulo naranja */}
      </div>

      <div className="employee-category">
        <h3>Cocineros</h3>
        <div className="employee-cards-row">
          <div className="employee-card">
            {/* Usamos una URL de placeholder de Lorem Picsum */}
            <img src="https://picsum.photos/id/1011/150/150" alt="Cocinero 1" className="employee-photo" />
          </div>
          <div className="employee-card">
            <img src="https://picsum.photos/id/1025/150/150" alt="Cocinero 2" className="employee-photo" />
          </div>
          {/* Puedes añadir más cocineros aquí, cambiando el número ID si quieres imágenes diferentes */}
        </div>
      </div>

      <div className="employee-category">
        <h3>Meseros</h3>
        <div className="employee-cards-row">
          <div className="employee-card">
            <img src="https://picsum.photos/id/1027/150/150" alt="Mesero 1" className="employee-photo" />
          </div>
          <div className="employee-card">
            <img src="https://picsum.photos/id/1028/150/150" alt="Mesero 2" className="employee-photo" />
          </div>
        </div>
      </div>

      <div className="employee-category">
        <h3>Cajeros</h3>
        <div className="employee-cards-row">
          <div className="employee-card">
            <img src="https://picsum.photos/id/1029/150/150" alt="Cajero 1" className="employee-photo" />
          </div>
          <div className="employee-card">
            <img src="https://picsum.photos/id/1030/150/150" alt="Cajero 2" className="employee-photo" />
          </div>
        </div>
      </div>

      {/* Otras categorías de empleados si las hay */}
    </div>
  );
}

export default EmployeesPage;