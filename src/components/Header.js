import React, { useContext } from 'react';
//sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
//import icons
import {BsBag} from 'react-icons/bs';

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  return <div>
    <div>Header</div>
    <div onClick={() => setIsOpen(!isOpen)}>
      <BsBag className='text-2xl cursor-pointer'></BsBag>
    </div>
    </div>;
};

export default Header;
