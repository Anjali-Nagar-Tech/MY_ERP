import React, { useState } from 'react';
import './Products.css';
import { NavLink } from 'react-router-dom';
import { MdHome } from 'react-icons/md';

function Products() {
      // Initialize the state for products and editingProduct

  const [products, setProducts] = useState([

    {
      id: 1,
      name: 'Mobile C50',
      category: 'Electronics',
      price: 2500,
      stockQuantity: 150,
    },
    {
        id: 2,
        name: 'Wall Clock',
        category: 'Interior',
        price: 250,
        stockQuantity: 10,
      },
      {
        id: 3,
        name: 'T-shirt blue',
        category: 'Clothes',
        price: 100,
        stockQuantity: 20,
      },
      {
        id: 4,
        name: 'Shirt black',
        category: 'Clothes',
        price: 150,
        stockQuantity: 100,
      },
      {
        id: 5,
        name: 'Pen Red1022',
        category: 'Stationery',
        price: 10,
        stockQuantity: 10,
      },
      {
        id: 6,
        name: 'Eyeliner',
        category: 'Makeup',
        price: 50,
        stockQuantity: 10,
      },
      {
        id: 7,
        name: ' Lakme Kajal',
        category: 'Makeup',
        price: 10,
        stockQuantity: 10,
      },
      {
        id: 8,
        name: 'Camlin Colors',
        category: 'Art Stationery',
        price: 20,
        stockQuantity: 100,
      },
      {
        id: 9,
        name: 'Watch',
        category: 'Accessories',
        price: 150,
        stockQuantity: 15,
      },
      {
        id: 10,
        name: 'Laptop',
        category: 'Electronics',
        price: 1000,
        stockQuantity: 550,
      }
    // other products
        // Add product objects to the array

  ]);

  const [editingProduct, setEditingProduct] = useState(null);

    // Define the addProduct function

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

    // Define the editProduct function

  const editProduct = (updatedProduct, index) => {
    const updatedProducts = [...products];
    updatedProducts[index] = updatedProduct;
    setProducts(updatedProducts);
  };

    // Define the deleteProduct function

  const deleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
    // Initialize the new product object with the input values

      id: Date.now(),
      name: e.target.name.value,
      category: e.target.category.value,
      price: parseFloat(e.target.price.value),
      stockQuantity: parseInt(e.target.stockQuantity.value),
    };
    addProduct(newProduct);
  };

    // Define the handleEditProduct function

  const handleEditProduct = (e) => {
    e.preventDefault();
    const updatedProduct = {
        // Initialize the updated product object with the input values and the id of the editingProduct

      id: editingProduct.id,
      name: e.target.name.value,
      category: e.target.category.value,
      price: parseFloat(e.target.price.value),
      stockQuantity: parseInt(e.target.stockQuantity.value),
    };
    const index = products.findIndex((p) => p.id === updatedProduct.id);
    editProduct(updatedProduct, index);
  };

  return (
    <div className='all'>
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink to="/dashboard" className="navbar-item">
            <MdHome /> Home
          </NavLink>
        </div>
      </nav>
      <div className="products-container">
        {products.map((product, index) => (
          <div className="product-card" key={product.id}>
            <h3 className="product-name">{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Stock Quantity: {product.stockQuantity}</p>
            <button onClick={() => setEditingProduct(product)}>Edit</button>
            <button onClick={() => deleteProduct(index)}>Delete</button>
          </div>
        ))}
        <form onSubmit={handleAddProduct}>
          <input type="hidden" name="id" />
          <input type="text" name="name" placeholder="Product name" required />
          <input type="text" name="category" placeholder="Category" required />
          <input type="number" name="price" step="0.01" placeholder="Price" required/>
          <input className='stock' type="number" name="stockQuantity" placeholder="Stock quantity" required />
          <button type="submit">Add Product</button>
        </form>
        {editingProduct && (
          <form onSubmit={handleEditProduct}>
            <input type="hidden" name="id" value={editingProduct.id} />
            <input
              type="text"
              name="name"
              defaultValue={editingProduct.name}
              placeholder="Product name"
              required
            />
            <input
              type="text"
              name="category"
              defaultValue={editingProduct.category}
              placeholder="Category"
              required
            />
            <input
              type="number"
              name="price"
              step="0.01"
              defaultValue={editingProduct.price}
              placeholder="Price"
              required
            />
            <input
              type="number"
              name="stockQuantity"
              defaultValue={editingProduct.stockQuantity}
              placeholder="Stock quantity"
              required
            />
            <button type="submit">Save Changes</button>
          </form>
        )}
      </div>
    </div>
  );
 }
 
 export default Products;