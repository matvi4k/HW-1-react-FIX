import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
const myName = 'Matviy'

const favoriteSite = {
    name: "Google",
    url: "https://www.google.com/"
  };

  const num1 = 6;
  const num2 = 7;
  const sum = num1 + num2;

   const colors = ["Червоний", "Синій", "Зелений"];

   const imageUrl = "https://via.placeholder.com/150";

   return(
    <div className='App'>

      <h1>{myName}</h1>

      <p>Ласкаво просимо до нашого сайту!</p>
      <img src={imageUrl} alt="Photo" />

      <p>
        Visit my favorite site:{" "}
        <a href={favoriteSite.url} target='_blank'>
          {favoriteSite.name}
          </a>
      </p>

      <p>Сума чисел {num1} + {num2} дорівнює {sum}</p>

      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>

    </div>

    
   )
}

export default App
