import React from 'react'
import './Contact.scss';
import msg_icon from '../../assets/mail.png';
import email_icon from '../../assets/email.png';

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
          <h3>Napisz wiadomość<img src={msg_icon} alt="" /></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptate aliquid veniam amet dolorem fuga neque quod expedita molestias vitae voluptas, ducimus modi delectus accusantium praesentium exercitationem mollitia eius. Earum.</p>
          <ul>
            <li><img src={email_icon} alt="" />emilia.zych@o2.pl</li>
          </ul>
        </div>
        <div className="contact-col">
          <form>
            <label>Twoje imię</label>
            <input type="text" name='name' placeholder='Podaj swoje imię' required/>
          
            <label>Treść wiadomości/zamówienia</label>
            <textarea name="message" rows="6" placeholder='Podaj treść wiadomości/zamówienia' required></textarea>

            <button type='submit' className='btn'>Wyślij</button>
          </form>
          <span>Wysyłanie...</span>
        </div>
    </div>
  )
}

export default Contact
