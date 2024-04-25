import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import Carrusel from './components/Carrusel'
import Hero from './components/Hero'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Carrusel/>
      <Footer/>
    </>
  )
}

export default App
