import React, { useContext } from 'react';
//sidebar context
import { SidebarContext } from '../contexts/SidebarContext';

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  return <header className='header'>
    <div>Header</div>
    <div onClick={() => setIsOpen(!isOpen)}>
      <i className='fa fa-shopping-cart'></i>
    </div>
    </header>;
};

export default Header;
