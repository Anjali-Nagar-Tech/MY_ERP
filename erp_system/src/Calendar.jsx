import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { NavLink } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { MdShoppingCart } from 'react-icons/md';
import { MdHome } from 'react-icons/md';
import './Calendar.css';

function Calendar() {
      // Initialize the state for selectedDate with the current date

  const [selectedDate, setSelectedDate] = useState(new Date());
  
    // Initialize the state for orders with some sample data

  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: 'John Doe',
      orderDate: '2024-03-4',
      deliveryDate: '2024-03-24',
      status: 'Pending',
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      orderDate: '2024-02-03',
      deliveryDate: '2024-02-23',
      status: 'Completed',
    },
    {
      id: 3,
      customerName: 'Bob Johnson',
      orderDate: '2024-03-05',
      deliveryDate: '2024-03-30',
      status: 'In Progress',
    },    // Add more orders here

  ]);

    // Define the handleDateChange function to update the selectedDate state

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

    // Define the handleOrderClick function to handle clicking on an order

  const handleOrderClick = (order) => {
    // Add functionality to view order details here
  };

    // Filter the orders array to get the orders for the selected date

  const ordersForDate = orders.filter((order) => {
    const orderDate = new Date(order.deliveryDate);
    return orderDate.getFullYear() === selectedDate.getFullYear() &&
           orderDate.getMonth() === selectedDate.getMonth() &&
           orderDate.getDate() === selectedDate.getDate();
  });

  return (
    <div>
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink to="/Dashboard" className="navbar-item">
            <MdHome /> Home
          </NavLink>
          <NavLink to="/orders" className="navbar-item">
            <MdShoppingCart /> Orders
          </NavLink>
        </div>
      </nav>
      <div className='calendar'>
    {/* Render the DatePicker component with the selectedDate and handleDateChange props */}

      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        inline
        className="datepicker"
        dateFormat="MMMM yyyy"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        />
                 {/* Render the list of orders for the selected date */}

                <ul>
          {ordersForDate.map((order) => (
            <li key={order.id} onClick={() => handleOrderClick(order)}>
              Order ID: {order.id}, Customer Name: {order.customerName}, Delivery Date: {order.deliveryDate}
            </li>
          ))}
        </ul>

                {/* Render the table of orders for the selected date if there are any orders */}

        {ordersForDate.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer Name</th>
                <th>Order Date</th>
                <th>Delivery Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {ordersForDate.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customerName}</td>
                  <td>{order.orderDate}</td>
                  <td>{order.deliveryDate}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Calendar;