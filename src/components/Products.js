import React, { useEffect, useState } from 'react'
import {  useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearItems } from '../store/Actions/actions'
import Banner from './Banner';

function Products() {
  // const [books, setBooks] = useState({})
  const data = useSelector(state => state.books)
      // console.log()
      const dispatch = useDispatch()
      // {store.getState()}
      // {store.subscribe(() => {
      //   console.log('store changed!', store.getState())
      // })}

  return (
    
    <div className='max-w-2xl mx-auto py-16 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-8 ml-[12rem]'>
        <Banner />
        <div className='py-6 flex justify-center'>
            <p className='text-4xl capitalize font-bold text-blue-600'>Browse our collection</p>
        </div>
          <div className='mt-2 grid grid-cols-1 gap-y-10 gap-x-2 sm:grid-cols-4 lg:grid-cols-5 xl:gap-x-6 font-roboto'>
            {data.bookList.map(item => (
                <div className='group relative hover:shadow-lg rounded-lg p-2 hover:scale-105 transition-all ease-in' key={item.bookId}> 
                    <div className='w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-8- lg:aspect-none'>
                       <img className='w-full h-full object-center object-cover lg:w-full lg:h-full' src={process.env.PUBLIC_URL + `/${item.url}`} />
                    </div>
                    <div className='mt-4'>
                        <div className='flex justify-between'>
                          <h3 className='text-sm text-gray-700 font-medium'>{item.bookName}</h3>
                          <a href='#' className='font-medium text-sm'> $ {item.price}</a>
                        </div>

                        <div>          
                          <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 text-xs text-white uppercase px-2 py-2 w-full rounded-sm mt-2" onClick={() => dispatch(addItem(item))}>Add to cart</button>
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