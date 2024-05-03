import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className='container'>
      <div className='logo'>
        <span>Emilia's missives</span>
      </div>
      <ul>
        <li>O mnie</li>
        <li>Promocje</li>
        <li>Najnowsze</li>
        <li>Wszystkie</li>
        <li>Opinie</li>
        <li><button className='btn'>Kup już teraz!</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
