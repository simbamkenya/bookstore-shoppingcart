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
        
        <div>
           <div className='container mx-auto'>
            <div className='shadow-md my-10 p-4 bg-gray-100 absolute right-0 top-10 rounded-lg'>
                     <div className=''>
                        {cartItems.length === 0 ? '': 
                         <div className='flex mt-10 mb-2 '>
                            <h3 className='font-semibold text-gray-800 text-sm uppercase w-2/6'>Books</h3>
                            <h3 className='font-semibold text-gray-800 text-center text-sm uppercase w-1/6'>Quantity</h3>
                            <h3 className='font-semibold text-gray-800 text-center text-sm uppercase w-1/6'>Price</h3>
                            <h3 className='font-semibold text-gray-800 text-center text-sm uppercase w-1/6'>Total</h3>
                            <h3 className='font-semibold text-gray-800 text-center text-sm uppercase w-1/6'></h3>
                         </div> 
                        }     
                          
                    <div>

                        </div>
                    <div className='px-2'>
                    {cartItems.length === 0 ? 'The cart is empty': 
                     cartItems.map((item, i) => (
                            <div className='flex  border-b-2 font-light border-gray-500  text-xm'  key={item.bookId}>
                            <div className='w-2/6 flex items-center'>
                                {/* <div className='bg-green-200'>
                                    <img className='h-12 w-8' src={process.env.PUBLIC_URL + `/${item.url}`} />
                                </div> */}
                                <div>  
                                      <p className='text-sm font-normal whitespace-nowrap'>{i+1}. {item.bookName}</p> 
                               </div>
                            </div>
                            
                            <div className='flex items-center justify-center font-bold w-1/6'>
                                <button className='inline-block px-1 py-2  text-4xl' onClick={() => dispatch(reduceCount(item))}>-</button>
                                <h2 className='text-xl'>{item.count}</h2>
                                <button className='inline-block px-2 py-2  text-4xl' onClick={() => dispatch(addCount(item))}>+</button>
                            </div>
                            <div className='w-1/6 flex items-center justify-center'>
                                <p className='text-lg'>$ {item.price}</p>
                            </div>
                            {/* <p>No of items {Ob ject.keys(data.cartItems.find(item.bookId)).length}</p> */}
                            <div className='w-1/6 flex items-center justify-center'>
                                <p className='text-xl'>$ {item.price * item.count}</p>
                            </div>

                            <div className='w-1/6 flex items-center justify-center'>
                                    <button onClick={() => dispatch(removeItem(item))} className="px-1 py-1 text-white text-sm md:text-lg rounded-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12"fill='red' height="12" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                                    </button>
                                    </div>
                            </div>
                        ))}
                    </div>
                    {cartItems.length === 0 ? '': 
                    <div className='flex items-end pt-4'>
                       <button className='ml-10 font-semibold bg-red-500 rounded-sm text-white text-lg px-2 py-1 md:mr-24' onClick={() => dispatch(clearCart())}>Clear Cart</button>
                       <h1 className='md:mr-24 mr-10'>Total Amount: <span className='text-xl font-medium'>${data.totalPrice}</span></h1>
                    </div>  
                    }
                    
                     </div>
                
            </div>
           </div>
             {/* {<h1 className='font-bold text-lg uppercase text-red-400'>Total Price: {data.totalPrice}</h1>} */}
        </div>
    )
}

export default Cart
