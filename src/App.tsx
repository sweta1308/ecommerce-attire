import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Address from './pages/address/address';
import AddressDetails from './pages/profile/addressDetails';
import Cart from './pages/cart/cart';
import Home from './pages/home/home';
import Login from './pages/login/login';
import OrderSummary from './pages/orderSummary/orderSummary';
import PageNotFound from './pages/404/pageNotFound';
import Product from './pages/product/product';
import ProductDetails from './pages/productDetails/productDetails';
import Profile from './pages/profile/profile';
import RequireAuth from './components/auth/requireAuth';
import Signup from './pages/signup/signup';
import Wishlist from './pages/wishlist/wishlist';
import { NavBar } from './components/navbar/navbar';
import { Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';

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
          <Route path="/address" element={<Address />} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/address-details" element={<AddressDetails />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
