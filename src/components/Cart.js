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
                <h1>List of Items</h1>
                        <Link to="/shop">Shop</Link>
                        <Link to="/cart">Cart</Link>
                    {cartItems.map(item => (
                        <div key={item.bookId}>
                        <img src={process.env.PUBLIC_URL + `/${item.url}`} />
                        <p>Item: {item.bookName}</p>
                        <p>Price: $ {item.price}</p>
                        {/* <p>No of items {Object.keys(data.cartItems.find(item.bookId)).length}</p> */}
                        <p>No of units {item.count}</p>
                        
                        <button onClick={() => dispatch(addCount(item))}>+</button>
                        <button onClick={() => dispatch(reduceCount(item))}>-</button>
                        <button onClick={() => dispatch(removeItem(item))}>Remove</button>
                        </div>
                    ))}
                <h1>Total Price: {data.totalPrice}</h1>
                <button className='font-semibold hover:text-red-500 text-gray-500 text-xs' onClick={() => dispatch(clearCart())}>Clear Cart</button>
            </div>
           </div>
        </div>
    )
}

export default Cart
