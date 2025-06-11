// src/components/DiscountsPage.jsx

import React, { useState } from 'react';
import './DiscountsPage.css'; // Importa el CSS específico

function DiscountsPage() {
  // Datos de ejemplo para los descuentos
  const allDiscountItems = [
    { id: 1, image: 'https://picsum.photos/id/100/40/40', name: 'Café de la Mañana', description: 'Descuento en todos los cafés.', percentage: 12 },
    { id: 2, image: 'https://picsum.photos/id/101/40/40', name: 'Almuerzo Ejecutivo', description: 'Menú completo con 31% de descuento.', percentage: 31 },
    { id: 3, image: 'https://picsum.photos/id/102/40/40', name: 'Postre del Día', description: 'Cualquier postre con 9% de descuento.', percentage: 9 },
    { id: 4, image: 'https://picsum.photos/id/103/40/40', name: 'Bebida Refrescante', description: 'Descuento en jugos naturales.', percentage: 7 },
    { id: 5, image: 'https://picsum.photos/id/104/40/40', name: 'Cena para 2', description: 'Aplicable a pedidos de más de $50.', percentage: 20 },
    { id: 6, image: 'https://picsum.photos/id/105/40/40', name: 'Happy Hour', description: 'En bebidas seleccionadas de 5-7pm.', percentage: 15 },
    { id: 7, image: 'https://picsum.photos/id/106/40/40', name: 'Desayuno Rápido', description: 'Combo de desayuno y bebida.', percentage: 10 },
    { id: 8, image: 'https://picsum.photos/id/107/40/40', name: 'Descuento Estudiantil', description: 'Presentando carnet universitario.', percentage: 18 },
    { id: 9, image: 'https://picsum.photos/id/108/40/40', name: 'Fines de Semana', description: 'Todos los pedidos de fin de semana.', percentage: 5 },
    { id: 10, image: 'https://picsum.photos/id/109/40/40', name: 'Pedidos Grandes', description: 'Más de 3 productos en el carrito.', percentage: 25 },
    { id: 11, image: 'https://picsum.photos/id/110/40/40', name: 'Delivery Gratis', description: 'En pedidos de $20 o más.', percentage: 0 }, // Un "descuento" de envío
    { id: 12, image: 'https://picsum.photos/id/111/40/40', name: 'Cliente Frecuente', description: 'Para miembros del programa de lealtad.', percentage: 8 },
  ];

  const itemsPerPage = 4; // Número de elementos por página (ajusta según lo que quepa sin scroll)
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual

  const totalPages = Math.ceil(allDiscountItems.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = allDiscountItems.slice(startIndex, endIndex);

  const goToNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleRemove = (id) => {
    console.log(`Eliminar descuento con ID: ${id}`);
    // Aquí iría la lógica para eliminar el descuento (ej. llamar a una API)
  };

  const handleAssign = (id) => {
    console.log(`Asignar descuento con ID: ${id}`);
    // Aquí iría la lógica para asignar el descuento (ej. abrir un modal, llamar a una API)
  };

  return (
    <div className="discounts-page-container">
      {/* Encabezado de la página */}
      <div className="discounts-header">
        <button
          className="arrow-button"
          onClick={goToPrevPage}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        <h2>DESCUENTOS</h2>
        <button
          className="arrow-button"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>

      {/* Sección de Descuentos de Producto */}
      <div className="discounts-content-scroll">
        <h3>DESCUENTOS DE PRODUCTO</h3> {/* Título de la sección */}
        <ul className="discounts-list">
          {currentItems.map(item => (
            <li key={item.id} className="discount-item-card">
              <div className="discount-item-header">
                <img src={item.image} alt={item.name} className="discount-item-image" />
                <div className="discount-info">
                  <span className="discount-name">NOMBRE</span>
                  <span className="discount-description">DESCRIPCION</span>
                </div>
              </div>
              <div className="discount-percentage">
                {item.percentage}%
              </div>
              <div className="discount-actions">
                <button className="action-button quit-button" onClick={() => handleRemove(item.id)}>QUITAR</button>
                <button className="action-button assign-button" onClick={() => handleAssign(item.id)}>ASIGNAR</button>
              </div>
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

export default DiscountsPage;