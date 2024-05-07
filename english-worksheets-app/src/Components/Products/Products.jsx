import React from 'react';
import './Products.scss';
import worksheet from '../../assets/worksheet.png';

const Products = () => {
  return (
    <div className='products'>

      <div className="product">
        <div className="info">
          <p>NOWOŚĆ</p>
        </div>
        <img src={worksheet} alt="karta pracy" />
        <div className="description">
          <p>Czas Present Perfect & Present Continous</p>
          <p>Cena: 14.99 zł</p>
          <p>id: cppipcj</p>
        </div>
      </div>
    
      <div className="product">
        <div className="info">
          <p>NOWOŚĆ</p>
        </div>
        <img src={worksheet} alt="karta pracy" />
        <div className="description">
          <p>Czas Present Perfect & Present Continous</p>
          <p>Cena: 14.99 zł</p>
          <p>id: cppipcj</p>
        </div>
      </div>

      <div className="product">
        <div className="info">
          <p>NOWOŚĆ</p>
        </div>
        <img src={worksheet} alt="karta pracy" />
        <div className="description">
          <p>Czas Present Perfect & Present Continous</p>
          <p>Cena: 14.99 zł</p>
          <p>id: cppipcj</p>
        </div>
      </div>

      <div className="product">
        <div className="info">
          <p>NOWOŚĆ</p>
        </div>
        <img src={worksheet} alt="karta pracy" />
        <div className="description">
          <p>Czas Present Perfect & Present Continous</p>
          <p>Cena: 14.99 zł</p>
          <p>id: cppipcj</p>
        </div>
      </div>


    </div>
  );
}

export default Products;
