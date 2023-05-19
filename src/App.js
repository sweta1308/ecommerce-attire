import { Route, Routes } from 'react-router';
import './App.css';
import { Home } from './pages/home/home';
import { Product } from './pages/product/product';
import Cart from './pages/cart/cart';
import { NavBar } from './components/navbar/navbar';
import { Wishlist } from './pages/wishlist/wishlist';
import { ProductDetails } from './pages/productDetails/productDetails';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { RequireAuth } from './components/auth/requireAuth';
import { RestrictAuth } from './components/auth/restrictAuth';
import MockMan from 'mockman-js';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product />} />
        <Route path='/products/:productID' element={<ProductDetails />} />
        <Route element={<RequireAuth />}>
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<Wishlist />} />
        </Route>
        <Route element={<RestrictAuth />}>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Route>
        <Route path='/mockman' element={<MockMan />} />
      </Routes>
    </div>
  );
}

export default App;
