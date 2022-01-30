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
        
        <div className='bg-gray-100'>
           <div className='container mx-auto mt-10'>
            <div className='flex shadow-md my-10'>
                     <div className='flex-1'>
                                {/* <Link to="/shop">Shop</Link>
                            <Link to="/cart">Cart</Link> */}
                        <div className='flex mt-10 mb-2'>
                            <h3 className='font-semibold text-gray-600 text-xs uppercase w-2/5'>Product Details</h3>
                            <h3 className='font-semibold text-gray-600 text-center text-xs uppercase w-1/5'>Quantity</h3>
                            <h3 className='font-semibold text-gray-600 text-center text-xs uppercase w-1/5'>Price</h3>
                            <h3 className='font-semibold text-gray-600 text-center text-xs uppercase w-1/5'>Total</h3>
                        </div>   
                        <div>

                        </div>
                    <div className=''>
                    {cartItems.map(item => (
                            <div className='flex flex-grow'  key={item.bookId}>
                            <div className='flex w-2/5'>
                                <div className='w-20'>
                                    <img className='h-24' src={process.env.PUBLIC_URL + `/${item.url}`} />
                                </div>
                                <div className='w-1/5'>
                                    {item.bookName}
                                    <button onClick={() => dispatch(removeItem(item))}>Remove</button>
                                </div>
                            </div>
                            <div className='flex items-center justify-center font-bold w-1/5'>
                                <button className='inline-block px-2 py-2  font-semibold' onClick={() => dispatch(reduceCount(item))}>-</button>
                                <h2 className='text-xl'>{item.count}</h2>
                                <button className='inline-block px-2 py-2  font-semibold' onClick={() => dispatch(addCount(item))}>+</button>
                            </div>
                            <div className='w-1/5'>
                                <p>$ {item.price}</p>
                            </div>
                            {/* <p>No of items {Object.keys(data.cartItems.find(item.bookId)).length}</p> */}
                            <div className='w-1/5'>
                                <p>{item.price * item.count}</p>
                            </div>
                            </div>
                        ))}
                    </div>
                     </div>
                <h1>Total Price: {data.totalPrice}</h1>
                <button className='font-semibold hover:text-red-500 text-gray-500 text-xs' onClick={() => dispatch(clearCart())}>Clear Cart</button>
            </div>
           </div>
             {/* {<h1 className='font-bold text-lg uppercase text-red-400'>Total Price: {data.totalPrice}</h1>} */}
        </div>
    )
}

export default Cart
