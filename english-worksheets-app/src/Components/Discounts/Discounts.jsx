import React from 'react';
import '../Products/Products.scss';
import worksheet from '../../assets/worksheet.png';

const Products = () => {
  return (
    <div className='products'>

      <div className="product">
        <div className="info-discount">
          <p>PROMOCJA</p>
        </div>
        <img src={worksheet} alt="karta pracy" />
        <div className="description">
          <p>Czas Present Perfect & Present Continous</p>
          <p><s>Poprzednia cena: 14.99 zł</s></p>
          <p>Aktualna cena: 9.99 zł</p>
          <p>id: cppipcj</p>
        </div>
      </div>
    
      <div className="product">
        <div className="info-discount">
          <p>PROMOCJA</p>
        </div>
        <img src={worksheet} alt="karta pracy" />
        <div className="description">
          <p>Czas Present Perfect & Present Continous</p>
          <p><s>Poprzednia cena: 14.99 zł</s></p>
          <p>Aktualna cena: 9.99 zł</p>
          <p>id: cppipcj</p>
        </div>
      </div>

      <div className="product">
        <div className="info-discount">
          <p>PROMOCJA</p>
        </div>
        <img src={worksheet} alt="karta pracy" />
        <div className="description">
          <p>Czas Present Perfect & Present Continous</p>
          <p><s>Poprzednia cena: 14.99 zł</s></p>
          <p>Aktualna cena: <span>9.99 zł</span></p>
          <p>id: cppipcj</p>
        </div>
      </div>

      <div className="product">
        <div className="info-discount">
          <p>PROMOCJA</p>
        </div>
        <img src={worksheet} alt="karta pracy" />
        <div className="description">
          <p>Czas Present Perfect & Present Continous</p>
          <p><s>Poprzednia cena: 14.99 zł</s></p>
          <p>Aktualna cena: 9.99 zł</p>
          <p>id: cppipcj</p>
        </div>
      </div>


    </div>
  );
}

export default Products;
