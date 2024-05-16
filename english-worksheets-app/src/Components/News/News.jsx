import React, { useState } from 'react';
import '../Products/Products.scss';
import data from '../../Products.json';
import Modal from '../Modal/Modal.jsx';

const News = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const newProducts = data.products.filter(product => product.isNew === true);

  return (
    <div className='products' id='news'>
      {newProducts.map((product, index) => (
        <div className="product" key={index}>
          <div className="info-news">
            <p>NOWOŚĆ</p>
          </div>
          <img
            src={product.image}
            alt="karta pracy"
            onClick={() => handleImageClick(product.image)}
          />
          <div className="description">
            <p>{product.description.topic}</p>
            <p>{product.description.price}</p>
          </div>
        </div>
      ))}
      {selectedImage && (
        <Modal selectedImage={selectedImage} onCloseModal={handleCloseModal} />
      )}
    </div>
  );
}

export default News;