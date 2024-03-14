import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdInventory } from 'react-icons/md';
import { MdShoppingCart } from 'react-icons/md';
import './Dashboard.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
//Above have added necessary imports
const images = [
  { src: './image1.jpg' },
  { src: './image2.jpg' },
  { src: './image3.jpg' },
  // Add more images as needed
];

function Dashboard() {
  const totalProducts = 10;
  const totalOrders = 5;

  return (
    <div className='dashboard,bg-animation'>
      <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="navbar is-primary" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <p className="navbar-item">My ERP</p>
          </div>
          <div className="navbar-menu">
            <NavLink to="/products" className="navbar-item">
              <MdInventory /> Products
            </NavLink>
            <NavLink to="/orders" className="navbar-item">
              <MdShoppingCart /> Orders
            </NavLink>
          </div>
        </div>
      </motion.nav>
      <Fade>
        {images.map((image, index) => (
          <Slide key={index} className="each-slide">
            <div style={{ backgroundImage: `url(${image.src})`, width: '100%', height: '50vh', backgroundPosition: 'center', backgroundSize: 'contain' }}></div>
          </Slide>
        ))}
      </Fade>
      <section className="features">
  <div className="container">
    <div className="feature-card">
      <h3 className="feature-title">Product Listing</h3>
      <p className="feature-description">
      Present a list of products with details like name, category, price, and stock quantity.Includes a brief description or summary of each product, providing additional context or details about its features      </p>
    </div>
    <div className="feature-card">
      <h3 className="feature-title">Editable Details</h3>
      <p className="feature-description">
        Each Product and  Order can be edited directly from the system.Also new  products can be added and previous products can be deleted.Can change the status of your orders accompanied by Deleting the order feature
      </p>
    </div>
    <div className="feature-card">
      <h3 className="feature-title">Calendar View</h3>
      <p className="feature-description">
        Orders can be tracked with  a calendar view showing orders of the selected date.After selecting a particular date, Order summary appears in tabular format,including Order Id, Customer Name,status of, Order &Delivery Date 
      </p>
    </div>
  </div>
</section>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
        <div className="box">
          <p>Total number of products: {totalProducts}</p>
          <p>Total number of orders: {totalOrders}</p>
        </div>
      </motion.div>
      <footer className="footer">
  <div className="content has-text-centered">
    <p>
      &copy; {new Date().getFullYear()} My ERP. All rights reserved.
    </p>
  </div>
   </footer>
    </div>

    
  );
}

export default Dashboard;