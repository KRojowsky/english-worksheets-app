import React, { useEffect, useState} from 'react'
import './Navbar.scss'

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
        <span>Emilia's missives</span>
      </div>
      <ul>
        <li>O mnie</li>
        <li>Nowości</li>
        <li>Promocje</li>
        <li>Wszystkie</li>
        <li>Opinie</li>
        <li><button className='btn'>Kup już teraz!</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
