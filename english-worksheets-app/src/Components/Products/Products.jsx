import React, { useState } from 'react';
import './Products.scss';
import data from '../../Products.json';
import Modal from '../Modal/Modal.jsx';

const Products = () => {

  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='products' id='all'>
      {data.products.map((product,index) => (
        <div className="product" key={index}>
          <img
            src={product.image}
            alt="karta pracy"
            onClick={() => handleImageClick(product.image)}
          />
          <div className="description">
            <p>{product.description.topic}</p>
            <p>{product.description.price}</p>
            <p>{product.description.id}</p>
          </div>
        </div>
      ))}
       {selectedImage && (
        <Modal selectedImage={selectedImage} onCloseModal={handleCloseModal} />
      )}
    </div>
  );
}

export default Products;