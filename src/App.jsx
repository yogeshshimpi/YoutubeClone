import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Main/hero'
function App() {
  const [count, setCount] = useState(0)

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
