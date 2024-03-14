import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';

// Importing ProductsContext and ProductsProvider which are used to provide the products data to all the components that are wrapped inside ProductsProvider
import { ProductsContext, ProductsProvider } from './ProductsContext';
import Products from './Products';
import Orders from './Orders';
import Calendar from './Calendar';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}> {/* Suspense component is used here to handle the loading state of the lazy-loaded components */}
        <Routes>
          <Route path="/" element={<Dashboard />} /> {/* Default route that displays the Dashboard component */}
          <Route path="/Dashboard" element={<Dashboard />} /> {/* Another route that displays the Dashboard component */}
          <Route
            path="/products"
            element={
              <ProductsProvider> {/* ProductsProvider is used here to provide the products data to the Products component */}
                <Products /> {/* Products component is wrapped inside ProductsProvider to access the products data */}
              </ProductsProvider>
            }
          />
          <Route path="/orders" element={<Orders />} /> {/* Route that displays the Orders component */}
          <Route path="/calendar" element={<Calendar />} /> {/* Route that displays the Calendar component */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;