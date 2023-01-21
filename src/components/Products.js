import React from 'react'
import {  useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearItems } from '../store/Actions/actions'

function Products() {
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

      const datai = useSelector(state => state.Test)
      // console.log()
      const dispatch = useDispatch()
      // {store.getState()}
      // {store.subscribe(() => {
      //   console.log('store changed!', store.getState())
      // })}

  return (
    
    <div className='max-w-2xl mx-auto py-16 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='py-4'>
            <p className='text-4xl capitalize font-bold italic'>Browse our collection</p>
        </div>
          <div className='mt-2 grid grid-cols-1 gap-y-10 gap-x-2 sm:grid-cols-4 lg:grid-cols-5 xl:gap-x-6 font-roboto'>
            {data.bookList.map(item => (
                <div className='group relative bg-gray-200 rounded-lg p-2 hover:scale-105 transition-all ease-in' key={item.bookId}> 
                    <div className='w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-8- lg:aspect-none'>
                       <img className='w-full h-full object-center object-cover lg:w-full lg:h-full' src={process.env.PUBLIC_URL + `/${item.url}`} />
                    </div>
                    <div className='mt-4'>
                        <div className='flex justify-between'>
                          <h3 className='text-sm text-gray-700 font-medium'>{item.bookName}</h3>
                          <a href='#' className='font-medium text-sm'> $ {item.price}</a>
                        </div>

                        <div>          
                          <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 text-xs text-white uppercase px-1 py-1 w-full rounded-sm mt-2" onClick={() => dispatch(addItem(item))}>Add to cart</button>
                        </div>
                    </div>
                    
                </div>
              ))}
          </div>
        {/* <button onClick={() => dispatch(clearCart())}>Clear</button> */}
        </div>
  )
}

export default Products