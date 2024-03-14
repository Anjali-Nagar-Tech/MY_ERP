import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdHome } from 'react-icons/md';
import { MdCalendarMonth } from 'react-icons/md';

import './Orders.css'  // Import the Orders.css file

function Orders() {
      // Define the mockData array of orders

  const mockData = [
    {
      id: 1,
      customerName: 'John Doe',
      orderDate: '2024-03-4',
      status: 'Pending',
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      orderDate: '2024-02-03',
      status: 'Completed',
    },
    {
        id: 3,
        customerName: 'Bob Johnson',
        orderDate: '2024-03-05',
        status: 'In-Progress',
      },
      {
        id: 4,
        customerName: 'Rahul Sharma',
        orderDate: '2024-01-03',
        status: 'Completed',
      },
      {
        id: 5,
        customerName: 'Rakul  Patel',
        orderDate: '2024-04-17',
        status: 'Pending',
      },
    // Add more mock data here
  ];

    // Initialize the state for orders using the mockData array

  const [orders, setOrders] = useState(mockData);

    // Define the handleOrderClick function

  const handleOrderClick = (orderId) => {
    // Add functionality to view order details here
  };

    // Define the handleStatusUpdate function

  const handleStatusUpdate = (orderId, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const handleDelete = (orderId) => {
    setOrders(orders.filter((order) => order.id !== orderId));
  };

  return (
    
    <div>
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink to="/Dashboard" className="navbar-item">
          <MdHome /> Home
        </NavLink>
        <NavLink to="/calendar" className="navbar-item">
        <MdCalendarMonth /> Calendar view
                </NavLink>
      </div>
    </nav>
    <div className="orders-container">
    <div className="order-tiles">
      {orders.map((order, index) => (
        <div key={order.id} className={`order-tile ${index > 1 ? 'order-tile-bottom' : ''}`}>
          <p>Order ID: {order.id}</p>
          <p>Customer Name: {order.customerName}</p>
          <p>Order Date: {order.orderDate}</p>
          <p>Status: {order.status}</p>
          <button onClick={() => handleOrderClick(order.id)}>View Details</button>
          <button onClick={() => handleStatusUpdate(order.id, 'In Progress')}>Update Status</button>
          <button onClick={() => handleDelete(order.id)}>Delete Order</button>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
}

export default Orders;