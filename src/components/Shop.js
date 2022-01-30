import '../App.css';
import {  useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearItems } from '../store/Actions/actions'
import React, { useEffect } from 'react'
import store from '../store/index'

const data = {
  bookList: [
    { bookId: 1, bookName : "Master Of The Game", price: 35, category: "thrill", url: 'master_of_the_game.jpg'},
    { bookId: 2, bookName : "Tell Me Your Dreams", price: 45, category: "detective", url: 'tell_me_your_dreams.jpg'},
    { bookId: 3, bookName : "If Tomorrow Comes", price: 30, category: "thrill", url: 'if_tomorrow_comes.jpg'}
  ],
}

function Shop() {
 
  // useEffect(() => {

  // })
  // console.log(data)

  const datai = useSelector(state => state.Test)
  console.log(datai)
  const dispatch = useDispatch()
  // {store.getState()}
  // {store.subscribe(() => {
  //   console.log('store changed!', store.getState())
  // })}
  return (
     <div className='bg-gray-700'>
        <div>
        {data.bookList.map(item => (
          <div key={item.bookId}> 
              <img src={process.env.PUBLIC_URL + `/${item.url}`} />
              <p>Item: {item.bookName}</p>
              <p>Price: $ {item.price}</p>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 text-sm text-white uppercase w-full" onClick={() => dispatch(addItem(item))}>Add To Cart</button>
              
          </div>
        ))}
        {/* <button onClick={() => dispatch(clearCart())}>Clear</button> */}
        </div>
     </div>

  );
}

export default Shop;
