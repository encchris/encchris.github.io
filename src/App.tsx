import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Sections from './components/Sections'
import Contacto from './components/Contacto'
import Experiencia from './components/Experiencia'

function App() {
  
  return (
    <>
      <main className='grid w-full justify-center bg-[#0d1117]'>
        <div className='grid gap-4 xl:w-[1400px] w-full md:px-4'>
          <Header />
          <Sections />
          <Experiencia />
          <Contacto />
        </div>
      </main>
    </>
  )
}

export default App
