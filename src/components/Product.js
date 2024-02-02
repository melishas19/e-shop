import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
  console.log(product);
  //destructure product
  const { id, image, category, title, price } = product;

  return (
    <div>
      <div className='each-product'>
        <div className='within-product'>
          {/*image*/}
          <div className='img-product'>
            <img className='img' src={image} alt='' />
          </div>
        </div>
        {/* buttons */}
        <div className='container-button'>
          <button>
            <div className="add-button"><b>+</b></div>
          </button>
          <hr className='text-white w-12'></hr>
          <Link to={`/product/${id}`}>
            <div><i className='fa fa-eye'></i></div>
          </Link>
        </div>
      </div>
      {/* category and title and price */}
      <div>
        <div className='category-text'>{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className='title-text'>{title}</h2>
        </Link>
        <div className='price-text'>{price}</div>
      </div>
    </div>
  );
};

export default Product;
