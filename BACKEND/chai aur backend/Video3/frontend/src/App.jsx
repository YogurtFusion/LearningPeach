import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import axios from "axios"
import { useEffect } from 'react'

function App() {

const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3000/jokes')
    .then((response)=>{
      setJokes(response.data)
    }).catch((error)=>{
      console.log(error);
      
    })
  })

  return (
  <>
  <h1>Chai and jsx</h1>
  <p> Jokes{jokes.length} </p>
  {
    jokes.map((jokes, index)=>{
      <div key={jokes.id}>
        <h3>{jokes.title} </h3>
        <p>{jokes.content} </p>
      </div>
    })
  }
  </>
  )
}

export default App
