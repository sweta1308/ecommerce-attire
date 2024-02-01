import './index.css';
import App from './App';
import React from 'react';
import ScrollToTop from './components/scrollToTop';
import { AddressProvider } from './context/addressContext';
import { AuthProvider } from './context/authContext';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/cartContext';
import { createRoot } from 'react-dom/client';
import { FilterProvider } from './context/filterContext';
import { makeServer } from './server';
import { ProductProvider } from './context/productContext';
import { WishlistProvider } from './context/wishlistContext';

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
