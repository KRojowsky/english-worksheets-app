import React from 'react';
import '../Products/Products.scss';
import data from '../../Products.json';

const News = () => {
  const newProducts = data.products.filter(product => product.isNew === true);

  return (
    <div className='products' id='news'>
      {newProducts.map((product, index) => (
        <div className="product" key={index}>
          <div className="info-news">
            <p>NOWOŚĆ</p>
          </div>
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

export default News;