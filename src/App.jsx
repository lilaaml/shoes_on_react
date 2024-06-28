// import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Categories from './components/Categories'
import Brands from './components/Brands'
import Products from './components/Products'
import Footer from './Footer'
import Sale from './components/Sale'
import NewReleases from './components/NewReleases'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Sale />
      <NewReleases />
      <Categories />
      <Products />
      <Brands />
      <Footer />
    </div>
  )
}

export default App
