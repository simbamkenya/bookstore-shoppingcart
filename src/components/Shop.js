import '../App.css';

import React, { useEffect } from 'react'
import store from '../store/index'
import Sidebar from './Sidebar';
import Products from './Products';



function Shop() {

 
  return (
     <div className='bg-white flex'>
        <Sidebar />
        <Products />
     </div>

  );
}

export default Shop;


