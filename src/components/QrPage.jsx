// src/components/QrPage.jsx

import React, { useState } from 'react';
import './QrPage.css'; // Importa el CSS específico para esta página

function QrPage() {
  // Estado para manejar qué categoría está activa (opcional para futura funcionalidad)
  const [activeCategory, setActiveCategory] = useState('Comidas Fritas');

  const categories = [
    "Comidas Fritas",
    "Bebidas",
    "Almuerzos",
    "Descuentos"
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    console.log(`Categoría seleccionada: ${category}`);
    // Aquí podrías cargar los productos de esa categoría
  };

  return (
    <div className="qr-page-container">
      <div className="qr-content-box"> {/* El recuadro negro central */}
        <div className="qr-header">
          <div className="menu-icon-qr">☰</div> {/* Icono de menú dentro del recuadro */}
          <span className="mesero-name-header-qr">Nombre Mesero</span>
        </div>

        {/* Título cambiado a "QR" */}
        <h1 className="qr-title">QR</h1>

        <div className="category-buttons-qr">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-button-qr ${activeCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="qr-image-container">
          <img src="https://via.placeholder.com/250x200?text=Bebidas" alt="Bebidas en bandeja" className="qr-main-image" />
          {/* Reemplaza la URL de la imagen por la que desees */}
        </div>

        {/* Aquí iría el listado de productos de la categoría seleccionada en el futuro */}
        {/* <div className="product-list-placeholder-qr">
          <p>Aquí se mostrarán los productos de la categoría: {activeCategory}</p>
        </div> */}

      </div>
    </div>
  );
}

export default QrPage;