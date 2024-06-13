import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Main/Hero'
function App() {

  return (
    <>
      <body>
          <Navbar/>
        <section className="main">
          <Hero/>
        </section>
      </body>
    </>
  )
}

export default App
