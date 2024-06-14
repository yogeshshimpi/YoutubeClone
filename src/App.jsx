import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Main/Hero'
import Uploadvideo from './components/Navbar/Uploadvideo'
function App() {
  
  const [uploadvideo,setuploadvideo] = useState(false)  
  return (
    <>
      <body>
          <Navbar setuploadvideo={setuploadvideo} uploadvideo={uploadvideo}/>
        <section className="main">
          <Hero/>
        </section>
        <section style={{display: uploadvideo?'block':'none'}} id='uploadvideo' >
          <Uploadvideo setuploadvideo={setuploadvideo} uploadvideo={uploadvideo}/>
        </section>
      </body>
    </>
  )
}

export default App
