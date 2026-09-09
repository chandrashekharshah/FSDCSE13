import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import image from './assets/image.png'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const a = 20;
  const name = "Chandra Shekhar";

  return (
    <div style={{ border: '5px solid red', width: '500px', height: '300px' }}>
      
      <h2>WELCOME TO REACT VITE</h2>

      <h2>Name: {name}</h2>

      <img src={image} height={200} width={200} />

    </div>
  )
}

export default App