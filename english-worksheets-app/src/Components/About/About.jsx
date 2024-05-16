import React from 'react'
import './About.scss'
import about_img from '../../assets/about_img.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="Zdjęcie Emilii Zych" className='about-img'/>
        </div>
        <div className="about-right">
            <h3>O MNIE</h3>
            <h2>Cześć, jestem Emilia</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam soluta illum quaerat voluptates nobis saepe molestias officiis cumque ab temporibus minima eius suscipit laboriosam repudiandae aut, repellat deleniti? Corrupti, dolores?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam soluta illum quaerat voluptates nobis saepe molestias officiis cumque ab temporibus minima eius suscipit laboriosam repudiandae aut, repellat deleniti? Corrupti, dolores?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam soluta illum quaerat voluptates nobis saepe molestias officiis cumque ab temporibus minima eius suscipit laboriosam repudiandae aut, repellat deleniti? Corrupti, dolores?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam soluta illum quaerat voluptates nobis saepe molestias officiis cumque ab temporibus minima eius suscipit laboriosam repudiandae aut, repellat deleniti? Corrupti, dolores?</p>
        </div>
    </div>
  )
}

export default About
