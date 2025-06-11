// src/components/PreferencesPage.jsx

import React, { useState } from 'react';
import './PreferencesPage.css'; // Importa el CSS específico

function PreferencesPage() {
  // Datos de ejemplo para las preferencias/pedidos dentro de preferencias
  const allPreferencesItems = [
    { id: 1, orderNum: 'ORD001', productName: 'Café Expreso', description: 'Doble, sin azúcar', image: 'https://picsum.photos/id/237/40/40' },
    { id: 2, orderNum: 'ORD002', productName: 'Té Verde', description: 'Con limón y miel', image: 'https://picsum.photos/id/238/40/40' },
    { id: 3, orderNum: 'ORD003', productName: 'Pizza Pepperoni', description: 'Extra queso', image: 'https://picsum.photos/id/239/40/40' },
    { id: 4, orderNum: 'ORD004', productName: 'Ensalada César', description: 'Sin crutones', image: 'https://picsum.photos/id/240/40/40' },
    { id: 5, orderNum: 'ORD005', productName: 'Hamburguesa Clásica', description: 'Sin pepinillos', image: 'https://picsum.photos/id/241/40/40' },
    { id: 6, orderNum: 'ORD006', productName: 'Jugo de Naranja', description: 'Natural, sin hielo', image: 'https://picsum.photos/id/242/40/40' },
    { id: 7, orderNum: 'ORD007', productName: 'Sopa de Tomate', description: 'Con crutones y albahaca', image: 'https://picsum.photos/id/243/40/40' },
    { id: 8, orderNum: 'ORD008', productName: 'Muffin de Arándanos', description: 'Caliente', image: 'https://picsum.photos/id/244/40/40' },
    { id: 9, orderNum: 'ORD009', productName: 'Agua Mineral', description: 'Con rodaja de limón', image: 'https://picsum.photos/id/245/40/40' },
    { id: 10, orderNum: 'ORD010', productName: 'Sandwich de Pavo', description: 'Pan integral, queso suizo', image: 'https://picsum.photos/id/246/40/40' },
    { id: 11, orderNum: 'ORD011', productName: 'Cerveza Artesanal', description: 'IPA, fría', image: 'https://picsum.photos/id/247/40/40' },
    { id: 12, orderNum: 'ORD012', productName: 'Papas Fritas', description: 'Grande, con kétchup', image: 'https://picsum.photos/id/248/40/40' },
    { id: 13, orderNum: 'ORD013', productName: 'Helado de Vainilla', description: 'Con sirope de chocolate', image: 'https://picsum.photos/id/249/40/40' },
    { id: 14, orderNum: 'ORD014', productName: 'Burrito de Pollo', description: 'Sin picante', image: 'https://picsum.photos/id/250/40/40' },
    { id: 15, orderNum: 'ORD015', productName: 'Nachos', description: 'Con guacamole y queso', image: 'https://picsum.photos/id/251/40/40' },
  ];

  const itemsPerPage = 8; // Número de elementos por página (ajusta según lo que quepa sin scroll)
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual

  const totalPages = Math.ceil(allPreferencesItems.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = allPreferencesItems.slice(startIndex, endIndex);

  const goToNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="preferences-page-container">
      {/* Encabezado de la página */}
      <div className="preferences-header">
        <button
          className="arrow-button"
          onClick={goToPrevPage}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        <h2>PREFERENCIAS</h2>
        <button
          className="arrow-button"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>

      {/* Sección de Pedidos con tabla */}
      <div className="preferences-content-scroll">
        <h3>PEDIDOS</h3> {/* Título de la sección de la tabla */}
        <ul className="preferences-list">
          {/* Encabezado de la tabla/lista */}
          <li className="preferences-header-row">
            <span className="order-num-col">PEDIDO</span>
            <span className="product-col">PRODUCTO</span>
          </li>
          {/* Mapea los datos de los elementos para crear las filas */}
          {currentItems.map(item => (
            <li key={item.id} className="preferences-item-row">
              <span className="order-num-col">
                <img src={item.image} alt="Pedido #" className="preferences-item-image" />
                {item.orderNum}
              </span>
              <span className="product-col">
                <div className="product-info">
                  <div className="product-name">{item.productName}</div>
                  <div className="product-description">{item.description}</div>
                </div>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Sección de Paginación */}
      <div className="pagination">
        <span>{currentPage} / {totalPages}</span>
        <div className="pagination-arrows">
          <button
            className="arrow-button pagination-down"
            onClick={goToPrevPage}
            disabled={currentPage === 1}
          >
            &#9660; {/* Flecha abajo */}
          </button>
          <button
            className="arrow-button pagination-up"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            &#9650; {/* Flecha arriba */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreferencesPage;