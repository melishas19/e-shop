import React, { useContext } from 'react';
//import link
import { Link } from 'react-router-dom';
//import components
import CartItem from '../components/CartItem';
//import sidebar context
import { SidebarContext } from '../contexts/SidebarContext';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  return <div className={`${isOpen ? 'right-0' : '-right-full'} sidebar-shopping`}>
    <div className='header-sidebar'>
      <div className='shopping-cart-text'>
        Shopping Bag (0)
      </div>
      <div onClick={handleClose} className='return-arrow'>
        <i className='fa fa-arrow-right'></i>
      </div>
    </div>
  </div>;
};

export default Sidebar;
