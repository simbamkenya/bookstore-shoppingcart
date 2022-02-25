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
    { bookId: 4, bookName : "Range of Angles", price: 30, category: "thrill", url: 'rage-of-angels.jpg'}
  ],
}

function Shop() {
 
  // useEffect(() => {

  // })
  // console.log(data)

  const datai = useSelector(state => state.Test)
  // console.log()
  const dispatch = useDispatch()
  // {store.getState()}
  // {store.subscribe(() => {
  //   console.log('store changed!', store.getState())
  // })}
  return (
     <div className='bg-white'>
       <div className='min-w-full background-image py-32 bg-no-repeat bg-cover bg-bottom'>
        <div className='container mx-auto  flex'>
          <div className='md:w-1/2 w-full px-4 py-6 rounded bg-gray-500 shadow'>
            <h2 className='leading-10 -tracking-wide text-4xl font-bold text-white'>Buy your faviourite, <br/>best prices from our store.</h2>
            <p className='font-semibold text-white leading-6 mt-3'>we have a wide collection of books from authors around the world. The store is commited to keeping reading ethusiast with costant supply of the best writing availale. Shop with us for reliable services</p>
            <button className='text-2xl font-medium tracking-wide rounded mt-3 px-5 py-2 bg-orange-400 uppercase hover:bg-orange-200 transition ease-in-out'>Shop with Us</button>
          </div>
        </div>
       </div>
        <div className='max-w-2xl mx-auto py-16 px-4 sm:py-23 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {data.bookList.map(item => (
                <div className='group relative' key={item.bookId}> 
                    <div className='w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-8- lg:aspect-none'>
                       <img className='w-full h-full object-center object-cover lg:w-full lg:h-full' src={process.env.PUBLIC_URL + `/${item.url}`} />
                    </div>
                    <div className='flex justify-between mt-4'>
                        <div>
                          <h3 className='text-lg text-gray-700 font-medium'>Item: {item.bookName}</h3>
                          <a href='#' className='font-medium'> Price: $ {item.price}</a>
                        </div>

                        <div>          
                          <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 text-sm text-white uppercase px-1 py-1 rounded-sm" onClick={() => dispatch(addItem(item))}>Add To Cart</button>
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


