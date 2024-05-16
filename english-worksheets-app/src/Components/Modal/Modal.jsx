import React from 'react';

const Modal = ({ selectedImage, onCloseModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="close" onClick={onCloseModal}>&times;</span>
        <img src={selectedImage} alt="Powiększone zdjęcie" />
      </div>
    </div>
  );
}

export default Modal;
