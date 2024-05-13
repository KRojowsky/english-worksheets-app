import React, { useEffect, useState} from 'react'
import './Navbar.scss'
import { Link } from "react-scroll";
import menu from '../../assets/hamburger.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() =>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <div className='logo'>
        <span><Link to='hero' smooth={true} offset={-100} duration={750}>Emilia's missives</Link></span>
      </div>
      <ul>
        <li><Link to='about' smooth={true} offset={-100} duration={750}>O mnie</Link></li>
        <li><Link to='news' smooth={true} offset={-200} duration={750}>Nowości</Link></li>
        <li><Link to='discounts' smooth={true} offset={-200} duration={750}>Promocje</Link></li>
        <li><Link to='all' smooth={true} offset={-200} duration={750}>Wszystkie</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-250} duration={750}>Opinie</Link></li>
        <li><button className='btn'>Kup już teraz!</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
