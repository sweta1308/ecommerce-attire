import { Route, Routes } from 'react-router';
import './App.css';
import { Home } from './pages/home/home';
import { Product } from './pages/product/product';
import { Cart } from './pages/cart/cart';
import { NavBar } from './components/navbar/navbar';
import { Wishlist } from './pages/wishlist/wishlist';

import MockMan from 'mockman-js';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/mockman' element={<MockMan />} />
        <Route path='/wishlist' element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
