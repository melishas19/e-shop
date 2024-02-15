import React, { useContext, useEffect, useState } from 'react';
//sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
//cart context
import { CartContext } from '../contexts/CartContext';
//import link
import { Link } from 'react-router-dom'; 
//import logo
import Logo from '../img/logo.svg';

const Header = () => {
  //header state
  const [isActive, setIsActive] =useState(false);
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext);
  //event listener
  useEffect(()=>{
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return <header className={`${isActive? 'header1' : 'header2'} header `}>
    <div className='header-element'>
      {/* logo */}
      <Link to={'/'}>
        <div>
          <img className='logo' src={Logo} alt="" />
        </div>
      </Link>
      {/* cart */}
      <div onClick={() => setIsOpen(!isOpen)} className='inside-header'>
        <i className='fa fa-shopping-cart'></i>
        <div className='header-amount'>{itemAmount}</div>
      </div>
    </div>
    </header>;
};

export default Header;
