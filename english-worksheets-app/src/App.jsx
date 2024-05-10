import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Products from './Components/Products/Products'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import News from './Components/News/News'
import Discounts from './Components/Discounts/Discounts'
import Testimonials from './Components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <About/>
        <Title subTitle='Nowości' title='najnowsze dostępne produkty'/>
        <News/>
        <Title subTitle='Promocje' title='Produkty w promocyjnej cenie'/>
        <Discounts/>
        <Title subTitle='Wszystkie produkty' title='Sprawdź wszystkie moje produkty'/>
        <Products/>
        <Title subTitle='Opinie' title='Co mówią moi kupujący'/>
        <Testimonials/>
        <Title subTitle='Kontakt' title='Skontaktuj się ze mną w razie pytań'/>
      </div>
    </div>
  )
}

export default App
