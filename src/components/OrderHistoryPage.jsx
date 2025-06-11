// src/components/OrderHistoryPage.jsx

import React, { useState } from 'react';
import './OrderHistoryPage.css'; // Importa el CSS específico

function OrderHistoryPage() {
  // Datos de ejemplo para el historial de pedidos
  // He añadido más para probar la paginación y el ajuste de espacio.
  const allOrders = [
    { id: 1, waiterName: 'Juan Pérez', orderId: 'ORD001', date: '2024-05-20 10:30', image: 'https://picsum.photos/id/1012/40/40' },
    { id: 2, waiterName: 'Ana Gómez', orderId: 'ORD002', date: '2024-05-20 11:15', image: 'https://picsum.photos/id/1013/40/40' },
    { id: 3, waiterName: 'Carlos Ruiz', orderId: 'ORD003', date: '2024-05-20 12:00', image: 'https://picsum.photos/id/1014/40/40' },
    { id: 4, waiterName: 'María López', orderId: 'ORD004', date: '2024-05-20 13:45', image: 'https://picsum.photos/id/1015/40/40' },
    { id: 5, waiterName: 'Pedro Martín', orderId: 'ORD005', date: '2024-05-20 14:20', image: 'https://picsum.photos/id/1016/40/40' },
    { id: 6, waiterName: 'Laura Díaz', orderId: 'ORD006', date: '2024-05-20 15:00', image: 'https://picsum.photos/id/1018/40/40' },
    { id: 7, waiterName: 'Sofía Castro', orderId: 'ORD007', date: '2024-05-20 16:10', image: 'https://picsum.photos/id/1019/40/40' },
    { id: 8, waiterName: 'Diego Torres', orderId: 'ORD008', date: '2024-05-20 17:05', image: 'https://picsum.photos/id/1020/40/40' },
    { id: 9, waiterName: 'Elena Soto', orderId: 'ORD009', date: '2024-05-21 09:00', image: 'https://picsum.photos/id/1021/40/40' },
    { id: 10, waiterName: 'Gabriel Vargas', orderId: 'ORD010', date: '2024-05-21 10:40', image: 'https://picsum.photos/id/1022/40/40' },
    { id: 11, waiterName: 'Valentina Rojas', orderId: 'ORD011', date: '2024-05-21 11:30', image: 'https://picsum.photos/id/1023/40/40' },
    { id: 12, waiterName: 'Andrés Gil', orderId: 'ORD012', date: '2024-05-21 12:50', image: 'https://picsum.photos/id/1024/40/40' },
    { id: 13, waiterName: 'Camila Ríos', orderId: 'ORD013', date: '2024-05-21 14:15', image: 'https://picsum.photos/id/1025/40/40' },
    { id: 14, waiterName: 'Fernando Vera', orderId: 'ORD014', date: '2024-05-21 15:30', image: 'https://picsum.photos/id/1026/40/40' },
    { id: 15, waiterName: 'Isabel León', orderId: 'ORD015', date: '2024-05-21 16:00', image: 'https://picsum.photos/id/1027/40/40' },
    { id: 16, waiterName: 'Jorge Núñez', orderId: 'ORD016', date: '2024-05-21 17:20', image: 'https://picsum.photos/id/1028/40/40' },
    // Añade más órdenes si necesitas probar más páginas
  ];

  const itemsPerPage = 8; // Número de órdenes por página (ajusta según lo que quepa sin scroll)
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual

  const totalPages = Math.ceil(allOrders.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOrders = allOrders.slice(startIndex, endIndex);

  const goToNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="order-history-page-container">
      {/* Encabezado de la página */}
      <div className="order-history-header">
        <button
          className="arrow-button"
          onClick={goToPrevPage}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        <h2>HISTORIAL DE PEDIDOS</h2>
        <button
          className="arrow-button"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>

      {/* Sección de Historial con tabla */}
      <div className="order-history-content-scroll">
        <h3>HISTORIAL</h3> {/* Título de la sección de la tabla */}
        <ul className="order-list">
          {/* Encabezado de la tabla/lista */}
          <li className="order-header">
            <span className="order-id-col">PEDIDO</span>
            <span className="waiter-col">MESERO</span>
            <span className="date-col">FECHA</span>
          </li>
          {/* Mapea los datos de las órdenes para crear las filas */}
          {currentOrders.map(order => (
            <li key={order.id} className="order-item">
              <span className="order-id-col">
                <img src={order.image} alt="Pedido" className="order-item-image" />
                {order.orderId}
              </span>
              <span className="waiter-col">
                <div className="waiter-info">
                  <div className="waiter-name">{order.waiterName}</div>
                  <div className="waiter-id">ID</div> {/* Este ID es estático según tu imagen */}
                </div>
              </span>
              <span className="date-col">{order.date}</span>
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

export default OrderHistoryPage;