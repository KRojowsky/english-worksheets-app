import React from 'react';
import './Products.scss';
import data from '../../Products.json';

const Products = () => {
  return (
    <div className='products'>
      {data.products.map((product,index) => (
        <div className="product" key={index}>
          <img src={product.image} alt="karta pracy" />
          <div className="description">
            <p>{product.description.topic}</p>
            <p>{product.description.price}</p>
            <p>{product.description.id}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;