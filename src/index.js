import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { ProductProdvider } from "./context/productContext";
import { FilterProvider } from "./context/filterContext";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProdvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </ProductProdvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
