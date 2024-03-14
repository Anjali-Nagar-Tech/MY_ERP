import React, { createContext, useState } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Kajal',
      category: 'MakeUp',
      price: 50,
      stockQuantity: 10,
    },
    // other products
  ]);

  const [editingProduct, setEditingProduct] = useState(null);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const editProduct = (updatedProduct, index) => {
    const updatedProducts = [...products];
    updatedProducts[index] = updatedProduct;
    setProducts(updatedProducts);
  };

  const deleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        addProduct,
        editProduct,
        deleteProduct,
        editingProduct,
        setEditingProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};