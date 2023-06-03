import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./pages/home/home";
import { Product } from "./pages/product/product";
import Cart from "./pages/cart/cart";
import { NavBar } from "./components/navbar/navbar";
import { Wishlist } from "./pages/wishlist/wishlist";
import { ProductDetails } from "./pages/productDetails/productDetails";
import { Login } from "./pages/login/login";
import { Signup } from "./pages/signup/signup";
import { RequireAuth } from "./components/auth/requireAuth";
import MockMan from "mockman-js";
import { Address } from "./pages/address/address";
import { OrderSummary } from "./pages/orderSummary/orderSummary";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Profile } from "./pages/profile/profile";
import { AddressDetails } from "./pages/profile/addressDetails";
import { PageNotFound } from "./pages/404/pageNotFound";

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <ToastContainer position="bottom-right" autoClose={2000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:productID" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        <Route element={<RequireAuth />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path='/address' element={<Address />} />
          <Route path='/order-summary' element={<OrderSummary />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/address-details' element={<AddressDetails />} />
        </Route>
        <Route path="/mockman" element={<MockMan />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
