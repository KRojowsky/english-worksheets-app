import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Products from './Components/Products/Products'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import News from './Components/News/News'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <About/>
        <Title subTitle='Nowości' title='Sprawdź moje najnowsze produkty'/>
        <Products/>
        <Title subTitle='Promocje' title='Produkty w promocyjnej cenie'/>
        <News/>
      </div>
    </div>
  )
}

export default App
