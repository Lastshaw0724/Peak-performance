// src/components/InventoryPage.jsx

import React, { useState } from 'react';
import './InventoryPage.css'; // Importa el CSS específico

function InventoryPage() {
  // Datos de ejemplo para los productos de inventario
  const allInventoryItems = [
    { id: 1, name: 'Café Grano', qtyStart: 50, qtyEnd: 45, image: 'https://picsum.photos/id/10/40/40' },
    { id: 2, name: 'Leche Entera', qtyStart: 30, qtyEnd: 28, image: 'https://picsum.photos/id/11/40/40' },
    { id: 3, name: 'Azúcar Blanca', qtyStart: 20, qtyEnd: 18, image: 'https://picsum.photos/id/12/40/40' },
    { id: 4, name: 'Pan de Molde', qtyStart: 15, qtyEnd: 10, image: 'https://picsum.photos/id/13/40/40' },
    { id: 5, name: 'Huevos Docena', qtyStart: 25, qtyEnd: 22, image: 'https://picsum.photos/id/14/40/40' },
    { id: 6, name: 'Mantequilla 250g', qtyStart: 10, qtyEnd: 9, image: 'https://picsum.photos/id/15/40/40' },
    { id: 7, name: 'Harina Trigo', qtyStart: 18, qtyEnd: 17, image: 'https://picsum.photos/id/16/40/40' },
    { id: 8, name: 'Aceite Girasol', qtyStart: 12, qtyEnd: 11, image: 'https://picsum.photos/id/17/40/40' },
    { id: 9, name: 'Arroz 1kg', qtyStart: 40, qtyEnd: 38, image: 'https://picsum.photos/id/18/40/40' },
    { id: 10, name: 'Frijoles Lata', qtyStart: 35, qtyEnd: 30, image: 'https://picsum.photos/id/19/40/40' },
    { id: 11, name: 'Tomate Kg', qtyStart: 22, qtyEnd: 19, image: 'https://picsum.photos/id/20/40/40' },
    { id: 12, name: 'Cebolla Kg', qtyStart: 28, qtyEnd: 25, image: 'https://picsum.photos/id/21/40/40' },
    { id: 13, name: 'Papas Kg', qtyStart: 50, qtyEnd: 48, image: 'https://picsum.photos/id/22/40/40' },
    { id: 14, name: 'Zanahoria Kg', qtyStart: 17, qtyEnd: 16, image: 'https://picsum.photos/id/23/40/40' },
    { id: 15, name: 'Manzanas Kg', qtyStart: 30, qtyEnd: 27, image: 'https://picsum.photos/id/24/40/40' },
    { id: 16, name: 'Naranjas Kg', qtyStart: 32, qtyEnd: 30, image: 'https://picsum.photos/id/25/40/40' },
    { id: 17, name: 'Plátanos Kg', qtyStart: 45, qtyEnd: 40, image: 'https://picsum.photos/id/26/40/40' },
    { id: 18, name: 'Atún Lata', qtyStart: 20, qtyEnd: 15, image: 'https://picsum.photos/id/27/40/40' },
    { id: 19, name: 'Salsa Tomate', qtyStart: 15, qtyEnd: 13, image: 'https://picsum.photos/id/28/40/40' },
    { id: 20, name: 'Pasta Espagueti', qtyStart: 25, qtyEnd: 23, image: 'https://picsum.photos/id/29/40/40' },
  ];

  const itemsPerPage = 8; // Número de elementos por página (ajusta según lo que quepa sin scroll)
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual

  const totalPages = Math.ceil(allInventoryItems.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = allInventoryItems.slice(startIndex, endIndex);

  const goToNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="inventory-page-container">
      {/* Encabezado de la página */}
      <div className="inventory-header">
        <button
          className="arrow-button"
          onClick={goToPrevPage}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        <h2>INVENTARIO</h2>
        <button
          className="arrow-button"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>

      {/* Sección de Categorías con tabla */}
      <div className="inventory-content-scroll">
        <h3>CATEGORIAS</h3> {/* Título de la sección de la tabla */}
        <ul className="inventory-list">
          {/* Encabezado de la tabla/lista */}
          <li className="inventory-header-row">
            <span className="product-col">PRODUCTO</span>
            <span className="qty-start-col">CANTIDAD INICIO DIA</span>
            <span className="qty-end-col">CANTIDAD FINALIZAR DIA</span>
          </li>
          {/* Mapea los datos de los productos de inventario para crear las filas */}
          {currentItems.map(item => (
            <li key={item.id} className="inventory-item-row">
              <span className="product-col">
                <img src={item.image} alt={item.name} className="inventory-item-image" />
                <span className="product-name">{item.name}</span>
              </span>
              <span className="qty-start-col"># DE CANTIDAD</span> {/* Placeholder para cantidad de inicio */}
              <span className="qty-end-col"># DE CANTIDAD</span> {/* Placeholder para cantidad de fin */}
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

export default InventoryPage;