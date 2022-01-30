
import React from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Shop from './components/Shop'
import Cart from './components/Cart';
import 'font-awesome/css/font-awesome.min.css';

function App() {

  return (
  <div className='bg-green-700 min-h-screen'>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="cart"  element={<Cart/>} />
      </Routes>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
    </BrowserRouter>
    {/* {console.log(React.version)} */}
    
  </div>

  );
}

export default App;

