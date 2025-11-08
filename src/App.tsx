import './App.css'
import { useState, useEffect } from 'react'
import {Header, Inicio, Experiencia, Contacto, Curriculum} from './components/'

function App() {
  const [showCurriculum, setShowCurriculum] = useState(false);
  
  useEffect(() => {
    // Cada vez que cambie showCurriculum, hacer scroll al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [showCurriculum]);
  
  return (
    <>
      <main className='grid w-full justify-center bg-[#0d1117]'>
        <div className='grid gap-4 xl:w-[1400px] w-full md:px-4'>
          <Header showCurriculum={showCurriculum} setShowCurriculum={setShowCurriculum} />
          
          {showCurriculum ? (
            <Curriculum />
          ) : (
            <>
              <Inicio />
              <Experiencia />
              <Contacto />
            </>
          )}
        </div>
      </main>
    </>
  )
}

export default App