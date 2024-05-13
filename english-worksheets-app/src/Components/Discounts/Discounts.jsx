import React from 'react';
import '../Products/Products.scss';
import data from '../../Products.json';

const Products = () => {
  const discountProducts = data.products.filter(product => product.isDiscount === true)

  return (
    <div className='products' id='discounts'>
      {discountProducts.map((product, index) => (
        <div className="product" key={index}>
          <div className="info-discount">
            <p>PROMOCJA</p>
          </div>
          <img src={product.image} alt="karta pracy" />
          <div className="description">
            <p>{product.description.topic}</p>
            <p><s>{product.description.discount}</s></p>
            <p>{product.description.price}</p>
            <p>{product.description.id}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;