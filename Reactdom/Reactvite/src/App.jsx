import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import image from './assets/image.png'
import viteLogo from './assets/vite.svg'
import './App.css'
import UseProps from './Component/UseProps'
import ICardGallery from './Component/ICardGallery'

function App() {
  const a = 20;
  const name = "Chandra Shekhar";

  return (
    <div >
      
      {/* <h2>WELCOME TO REACT VITE</h2>

      <h3>Name: {name}</h3>

      <img style={{ borderRadius: '50%', }}src={image} height={200} width={200} /> */}
      {/* <UseProps/> */}\

      
      <ICardGallery/>
    </div>
  )
}

export default App 