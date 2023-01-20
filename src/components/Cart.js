import React, { useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import {addItem, clearCart, clearItem, removeItem, addCount, reduceCount} from '../store/Actions/actions'


function Cart() {
    // const dispatch = useDispatch();
    const data = useSelector(state => state.Test)
    console.log(data)
    const dispatch = useDispatch()

    const cartItems = [...new Set(data.cartItems)]
    console.log(cartItems)

    //counting items 
      cartItems.forEach(item => (
          item.count = data.cartItems.filter(cartItem => cartItem.bookId === item.bookId).length
      ))
     
    return (
        
        <div className='border-2 border-red-300'>
           <div className='container mx-auto'>
            <div className='shadow-md my-10 p-4 bg-gray-300 absolute right-0 top-10'>
                     <div className=''>
                                {/* <Link to="/shop">Shop</Link>
                            <Link to="/cart">Cart</Link> */}
                        <div className='flex mt-10 mb-2'>
                            <h3 className='font-semibold text-gray-600 text-sm uppercase w-2/5'>Books</h3>
                            <h3 className='font-semibold text-gray-600 text-center text-sm uppercase w-1/5'>Quantity</h3>
                            <h3 className='font-semibold text-gray-600 text-center text-sm uppercase w-1/5'>Price</h3>
                            <h3 className='font-semibold text-gray-600 text-center text-sm uppercase w-1/5'>Total</h3>
                        </div>   
                    <div>

                        </div>
                    <div className='px-4 py-2 '>
                    {cartItems.map(item => (
                            <div className='flex flex-groiw border-b-2 border-gray-500 py-2 text-xm'  key={item.bookId}>
                            <div className='flex w-2/6'>
                                <div className='mr-2'>
                                    <img className='h-12' src={process.env.PUBLIC_URL + `/${item.url}`} />
                                </div>
                                <div className='w-1/6 items-center'>
                                    <div className=''>
                                      <p className='text-sm whitespace-now rap'>{item.bookName}</p> 
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-center font-bold w-1/5'>
                                <button className='inline-block px-1 py-2  text-2xl' onClick={() => dispatch(reduceCount(item))}>-</button>
                                <h2 className='text-lg'>{item.count}</h2>
                                <button className='inline-block px-2 py-2  text-2xl' onClick={() => dispatch(addCount(item))}>+</button>
                            </div>
                            <div className='w-1/6 flex items-center justify-center'>
                                <p className='text-lg'>$ {item.price}</p>
                            </div>
                            {/* <p>No of items {Ob ject.keys(data.cartItems.find(item.bookId)).length}</p> */}
                            <div className='w-1/6 flex items-center justify-center'>
                                <p className='text-xl'>$ {item.price * item.count}</p>
                            </div>

                            <div className='w-1/6'>
                                    <button onClick={() => dispatch(removeItem(item))} className="px-1 py-1 text-white text-sm md:text-lg rounded-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                                    </button>
                                    </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col items-end space-y-2 ml-4 pb-4'>
                        <h1 className='md:mr-24 mr-10'>Total Price: <span className='text-xl font-medium'>${data.totalPrice}</span></h1>
                        <button className='mr-10 font-semibold bg-red-500 rounded-sm text-white text-lg px-2 py-1 md:mr-24' onClick={() => dispatch(clearCart())}>Clear Cart</button>
                    </div>
                     </div>
                
            </div>
           </div>
             {/* {<h1 className='font-bold text-lg uppercase text-red-400'>Total Price: {data.totalPrice}</h1>} */}
        </div>
    )
}

export default Cart
