import { useState ,lazy,Suspense} from 'react'
import './App.css'

const Navbar = lazy(()=>import('./components/Navbar/Navbar'))
const Hero = lazy(()=>import('./components/Main/Hero'))
const Uploadvideo = lazy(()=>import('./components/uploadvideo/Uploadvideo'))
function App() {

  
  const [uploadvideo,setuploadvideo] = useState(false)  
  return (
    <>
      <body>
      <Suspense fallback={<div>Loading...</div>}> <Navbar setuploadvideo={setuploadvideo} uploadvideo={uploadvideo}/></Suspense>

         
        <section className="main">
          <Suspense fallback={<div>Loading...</div>}><Hero/></Suspense>
        </section>
        <section style={{display: uploadvideo?'block':'none'}} id='uploadvideo' >
          <Suspense fallback={<div>Loading...</div>}>
          <Uploadvideo setuploadvideo={setuploadvideo} uploadvideo={uploadvideo}/>
          </Suspense>
        </section>
      </body>
    </>
  )
}

export default App
