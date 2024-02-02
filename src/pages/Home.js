import React, {useContext} from 'react';
//import product context
import { ProductContext } from '../contexts/ProductContext';
//import companents
import Product from '../components/Product';

const Home = () => {
  //get product form product context
  const { products } = useContext(ProductContext);
  console.log(products);
  //get only men's and women's clothing category
  const filteredProducts = products.filter(item => {return item.category === "men's clothing" || item.category === "women's clothing"});
  console.log(filteredProducts);
  return <div>
    <section className='py-16'>
      <div className="container-box">
        <div className='container-product'>
          {filteredProducts.map(product =>{
            return <Product product={product} key={product.id} />
          })}
        </div>
      </div>
    </section>
  </div>;
};

export default Home;
