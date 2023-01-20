import '../App.css';
import {  useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearItems } from '../store/Actions/actions'
import React, { useEffect } from 'react'
import store from '../store/index'

const data = {
  bookList: [
    { bookId: 1, bookName : "Master Of The Game", price: 35, category: "thrill", url: 'master_of_the_game.jpg'},
    { bookId: 2, bookName : "Tell Me Your Dreams", price: 45, category: "detective", url: 'tell_me_your_dreams.jpg'},
    { bookId: 3, bookName : "If Tomorrow Comes", price: 30, category: "thrill", url: 'if_tomorrow_comes.jpg'},
    { bookId: 4, bookName : "Range of Angles", price: 30, category: "thrill", url: 'rage-of-angels.jpg'},
    { bookId: 5, bookName : "Master Of The Game", price: 35, category: "thrill", url: 'master_of_the_game.jpg'},
    { bookId: 6, bookName : "Tell Me Your Dreams", price: 45, category: "detective", url: 'tell_me_your_dreams.jpg'},
    { bookId: 7, bookName : "If Tomorrow Comes", price: 30, category: "thrill", url: 'if_tomorrow_comes.jpg'},
    { bookId: 8, bookName : "Range of Angles", price: 30, category: "thrill", url: 'rage-of-angels.jpg'},
    { bookId: 9, bookName : "Master Of The Game", price: 35, category: "thrill", url: 'master_of_the_game.jpg'},
    { bookId: 10, bookName : "Tell Me Your Dreams", price: 45, category: "detective", url: 'tell_me_your_dreams.jpg'},
    { bookId: 11, bookName : "If Tomorrow Comes", price: 30, category: "thrill", url: 'if_tomorrow_comes.jpg'},
    { bookId: 12, bookName : "Range of Angles", price: 30, category: "thrill", url: 'rage-of-angels.jpg'},
    { bookId: 13, bookName : "Master Of The Game", price: 35, category: "thrill", url: 'master_of_the_game.jpg'},
    { bookId: 14, bookName : "Tell Me Your Dreams", price: 45, category: "detective", url: 'tell_me_your_dreams.jpg'},
    { bookId: 15, bookName : "If Tomorrow Comes", price: 30, category: "thrill", url: 'if_tomorrow_comes.jpg'},
    { bookId: 16, bookName : "Range of Angles", price: 30, category: "thrill", url: 'rage-of-angels.jpg'}
  ],
}

function Shop() {

  const datai = useSelector(state => state.Test)
  // console.log()
  const dispatch = useDispatch()
  // {store.getState()}
  // {store.subscribe(() => {
  //   console.log('store changed!', store.getState())
  // })}
  return (
     <div className='bg-white'>
        <div className='max-w-2xl mx-auto py-16 px-4 sm:py-23 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8 font-roboto'>
            {data.bookList.map(item => (
                <div className='group relative' key={item.bookId}> 
                    <div className='w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-8- lg:aspect-none'>
                       <img className='w-full h-full object-center object-cover lg:w-full lg:h-full' src={process.env.PUBLIC_URL + `/${item.url}`} />
                    </div>
                    <div className='flex justify-between mt-4'>
                        <div>
                          <h3 className='text-sm text-gray-700 font-medium'>{item.bookName}</h3>
                          <a href='#' className='font-medium text-xs'> $ {item.price}</a>
                        </div>

                        <div>          
                          <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 text-xs text-white uppercase px-1 py-1 rounded-sm" onClick={() => dispatch(addItem(item))}>buy</button>
                        </div>
                    </div>
                    
                </div>
              ))}
          </div>
        {/* <button onClick={() => dispatch(clearCart())}>Clear</button> */}
        </div>
     </div>

  );
}

export default Shop;


