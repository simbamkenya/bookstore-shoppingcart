import { useState } from 'react'
import { useDispatch, useSelector} from "react-redux"
import { Link } from "react-router-dom";
import { FaCartArrowDown } from 'react-icons/fa';
import Cart from './Cart';

function Header() {
    
    const count = useSelector(state => state.Test)
    const totalCount = count.cartItems.length
    
    const [isOpen, setIsOpen] = useState(false)
    const toggling = () => setIsOpen(!isOpen);
    return (
        <nav className='flex items-center justify-center flex-wrap py-4 bg-[#383838] px-6 sticky top-0 z-50'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>    
                <span className='font-semibold text-xl tracking-tight'>Simba Store</span>
            </div>
            <div className='w-full block flex-grow lg:flex lg:item-center lg:w-auto'>
                <div className='text-sm lg:flex-grow '>
                    {/* <a className='block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:text-white mr-4 text-lg'>Shop</a>
                    <a className='block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:text-white mr-4 mb-8 md:mb-0 text-lg'>Cart</a>                   */}
                </div>
                <div className='relative'>
                   <div onClick={toggling}>
                    <span className='bg-red-600 px-2 py-1 rounded-full text-white text-xs font-semibold mb-2 absolute bottom-1'>{totalCount}</span>
                    <span className='text-white text-2xl mt-2' ><FaCartArrowDown/></span>
                   </div>
                </div>
            </div>
            {isOpen && <Cart/>}

        </nav>
    )
}

export default Header
