import React from 'react'
import './Hero.scss'
import main from '../../assets/main.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>English worksheets</h1>
        <p>Karty pracy z języka angielskiego oraz wiele innych materiałów doskonalących umiejętności językowe dostępnych od zaraz</p>
        <button className='btn'>Kup już teraz</button>
      </div>
      <div className='hero-image'>
        <img src={main} alt="Zdjęcie główne strony" />
      </div>
    </div>
  )
}

export default Hero
