
import './App.css'
import {Header, Inicio, Experiencia, Contacto} from './components/'

function App() {
  
  return (
    <>
      <main className='grid w-full justify-center bg-[#0d1117]'>
        <div className='grid gap-4 xl:w-[1400px] w-full md:px-4'>
          <Header />
          <Inicio />
          <Experiencia />
          <Contacto />
        </div>
      </main>
    </>
  )
}

export default App
