import React, { useState } from 'react';
import '../Products/Products.scss';
import data from '../../Products.json';
import Modal from '../Modal/Modal.jsx';

const Products = () => {
  const discountProducts = data.products.filter(product => product.isDiscount === true)

  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='products' id='discounts'>
      {discountProducts.map((product, index) => (
        <div className="product" key={index}>
          <div className="info-discount">
            <p>PROMOCJA</p>
          </div>
          <img
            src={product.image}
            alt="karta pracy"
            onClick={() => handleImageClick(product.image)}
          />
          <div className="description">
            <p>{product.description.topic}</p>
            <p>{product.description.price}</p>
            <p><s>{product.description.discount}</s></p>
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