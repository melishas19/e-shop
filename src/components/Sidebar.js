import React, { useContext } from 'react';
//import link
import { Link } from 'react-router-dom';
//import components
import CartItem from '../components/CartItem';
//import sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
//import cart context
import { CartContext } from '../contexts/CartContext';


const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const {cart, clearCart } = useContext(CartContext);
  return <div className={`${isOpen ? 'right-0' : '-right-full'} sidebar-shopping`}>
    <div className='header-sidebar'>
      <div className='shopping-cart-text'>
        Shopping Bag (0)
      </div>
      <div onClick={handleClose} className='return-arrow'>
        <i className='fa fa-arrow-right'></i>
      </div>
    </div>
    <div>
      {cart.map(item=> {
        return <CartItem item={item} key={item.id} />
      })}
    </div>
    <div className='container-cart-total'>
      <div className='cart-total'>
        {/* total */}
        <div className='total-amt'>
          <span>Total:</span>$ 1000
        </div>
        {/* clear cart icon */}
        <div onClick={clearCart}>
          <i className='fa fa-trash'></i>
        </div>
      </div>
    </div>
  </div>;
};

export default Sidebar;
