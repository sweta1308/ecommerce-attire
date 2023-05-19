import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { ProductProdvider } from "./context/productContext";
import { FilterProvider } from "./context/filterContext";
import { AuthProvider } from "./context/authContext";
import { CartProvider } from "./context/cartContext";
import { Wishlistprovider } from "./context/wishlistContext";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductProdvider>
          <Wishlistprovider>
            <CartProvider>
              <FilterProvider>
                <App />
              </FilterProvider>
            </CartProvider>
          </Wishlistprovider>
        </ProductProdvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
