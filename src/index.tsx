import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { ProductProvider } from './context/productContext';
import { FilterProvider } from './context/filterContext';
import { AuthProvider } from './context/authContext';
import { CartProvider } from './context/cartContext';
import { WishlistProvider } from './context/wishlistContext';
import { AddressProvider } from './context/addressContext';
import { makeServer } from './server';
import ScrollToTop from './components/scrollToTop';

// Call make Server
makeServer();

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <AuthProvider>
        <ProductProvider>
          <WishlistProvider>
            <CartProvider>
              <FilterProvider>
                <AddressProvider>
                  <App />
                </AddressProvider>
              </FilterProvider>
            </CartProvider>
          </WishlistProvider>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
