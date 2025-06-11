// src/components/ProductsPage.jsx

import React, { useState } from 'react'; // ¡Importa useState!
import './ProductsPage.css';

function ProductsPage() {
  // Datos de ejemplo para los productos/categorías
  // He añadido más para que la paginación sea evidente.
  // En una aplicación real, esto vendría de una API.
  const allProductCategories = [
    { id: 1, name: 'Bebidas', quantity: 250, image: 'https://picsum.photos/id/200/50/50' },
    { id: 2, name: 'Platos Fuertes', quantity: 120, image: 'https://picsum.photos/id/201/50/50' },
    { id: 3, name: 'Entradas', quantity: 80, image: 'https://picsum.photos/id/202/50/50' },
    { id: 4, name: 'Postres', quantity: 95, image: 'https://picsum.photos/id/203/50/50' },
    { id: 5, name: 'Snacks', quantity: 180, image: 'https://picsum.photos/id/204/50/50' },
    { id: 6, name: 'Sopas', quantity: 40, image: 'https://picsum.photos/id/205/50/50' },
    { id: 7, name: 'Ensaladas', quantity: 60, image: 'https://picsum.photos/id/206/50/50' },
    { id: 8, name: 'Desayunos', quantity: 70, image: 'https://picsum.photos/id/207/50/50' },
    { id: 9, name: 'Pizzas', quantity: 110, image: 'https://picsum.photos/id/208/50/50' },
    { id: 10, name: 'Sandwiches', quantity: 130, image: 'https://picsum.photos/id/209/50/50' },
    { id: 11, name: 'Pastas', quantity: 90, image: 'https://picsum.photos/id/210/50/50' },
    { id: 12, name: 'Carnes', quantity: 75, image: 'https://picsum.photos/id/211/50/50' },
    { id: 13, name: 'Pescados', quantity: 55, image: 'https://picsum.photos/id/212/50/50' },
    { id: 14, name: 'Vegetariano', quantity: 65, image: 'https://picsum.photos/id/213/50/50' },
    { id: 15, name: 'Cafés', quantity: 200, image: 'https://picsum.photos/id/214/50/50' },
    { id: 16, name: 'Tés', quantity: 150, image: 'https://picsum.photos/id/215/50/50' },
    { id: 17, name: 'Jugos Naturales', quantity: 180, image: 'https://picsum.photos/id/216/50/50' },
    { id: 18, name: 'Salsas', quantity: 100, image: 'https://picsum.photos/id/217/50/50' },
    { id: 19, name: 'Aderezos', quantity: 70, image: 'https://picsum.photos/id/218/50/50' },
    { id: 20, name: 'Panadería', quantity: 140, image: 'https://picsum.photos/id/219/50/50' },
    { id: 21, name: 'Lácteos', quantity: 110, image: 'https://picsum.photos/id/220/50/50' },
    { id: 22, name: 'Cereales', quantity: 90, image: 'https://picsum.photos/id/221/50/50' },
    { id: 23, name: 'Embutidos', quantity: 85, image: 'https://picsum.photos/id/222/50/50' },
    { id: 24, name: 'Frutas Frescas', quantity: 160, image: 'https://picsum.photos/id/223/50/50' },
    { id: 25, name: 'Verduras', quantity: 130, image: 'https://picsum.photos/id/224/50/50' },
  ];

  // Configuración de la paginación
  const itemsPerPage = 8; // Número de elementos por página (ajusta según lo que quepa sin scroll)
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual

  // Calcula el número total de páginas
  const totalPages = Math.ceil(allProductCategories.length / itemsPerPage);

  // Calcula qué productos mostrar en la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = allProductCategories.slice(startIndex, endIndex);

  // Funciones para cambiar de página
  const goToNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="products-page-container">
      {/* Encabezado de la página de productos */}
      <div className="products-header">
        <button
          className="arrow-button"
          onClick={goToPrevPage} // Asocia la función
          disabled={currentPage === 1} // Deshabilita si es la primera página
        >
          &lt;
        </button>
        <h2>PRODUCTOS</h2>
        <button
          className="arrow-button"
          onClick={goToNextPage} // Asocia la función
          disabled={currentPage === totalPages} // Deshabilita si es la última página
        >
          &gt;
        </button>
      </div>

      {/* Sección de Categorías con tabla */}
      <div className="products-content-scroll">
        <h3>CATEGORIAS</h3>
        <ul className="categories-list">
          {/* Encabezado de la tabla/lista */}
          <li className="category-header">
            <span className="image-col">IMAGE</span>
            <span className="name-col">NOMBRE</span>
            <span className="quantity-col">CANTIDAD</span>
          </li>
          {/* Mapea los productos de la página actual */}
          {currentProducts.map(category => (
            <li key={category.id} className="category-item">
              <span className="image-col">
                <img src={category.image} alt={category.name} className="category-item-image" />
              </span>
              <span className="name-col">{category.name}</span>
              <span className="quantity-col">{category.quantity}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Sección de Paginación */}
      <div className="pagination">
        {/* Muestra la página actual y el total */}
        <span>{currentPage} / {totalPages}</span>
        <div className="pagination-arrows">
          <button
            className="arrow-button pagination-down"
            onClick={goToPrevPage} // Asocia la función
            disabled={currentPage === 1} // Deshabilita si es la primera página
          >
            &#9660; {/* Flecha abajo */}
          </button>
          <button
            className="arrow-button pagination-up"
            onClick={goToNextPage} // Asocia la función
            disabled={currentPage === totalPages} // Deshabilita si es la última página
          >
            &#9650; {/* Flecha arriba */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;