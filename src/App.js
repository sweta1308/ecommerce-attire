import { Route, Routes } from 'react-router';
import './App.css';
import { Home } from './pages/home/home';
import { Product } from './pages/product/product';
import { NavBar } from './components/navbar/navbar';
import { Cart } from './pages/cart/cart';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
