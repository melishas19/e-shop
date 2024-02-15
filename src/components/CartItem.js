import React, { useContext } from 'react';
//inport Link
import { Link } from 'react-router-dom';
//import cart context
import { CartContext } from '../contexts/CartContext';


const CartItem = ({item}) => {
  const {removeFromCart, increaseAmount, decreaseAmount}= useContext(CartContext);
  //destructure item
  const {id, title, image, price, amount} = item;
  return (
  <div className='section-cart'>
    <div className='container-cart'>
      {/* image */}
      <Link to={`/product/${id}`}>
        <img className='max-w-[80px]' src={image} alt='' />
      </Link>
      <div className='container-title-and-remove'>
        {/* title and  remove icon*/}
        <div className='title-and-remove'>
          {/* title */}
          <Link to={`/product/${id}`} className='cart-item-title' >{title}</Link>
          {/* remove icon */}
          <i onClick={()=> {removeFromCart(id)}} className='fa fa-remove'></i>
        </div>
        {/* quantity and prices*/}
        <div className='qty-and-price'>
          {/* qty */}
          <div className='container-qty'>
            {/* minus icon */} <i onClick={()=>decreaseAmount(id)} className='fa fa-minus'></i>
            {/* amount */} <div className='amt'>{amount}</div>
            {/* plus icon */} <i onClick={()=>increaseAmount(id)} className='fa fa-plus'></i>
          </div>
          {/* item price */}
          <div className='price'>$ {price}</div>
          {/* final price with 2 decimals  */}
          <div className='final-price'>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CartItem;
