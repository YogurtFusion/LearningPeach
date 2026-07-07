import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Event from './components/Event'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Event/>
   </>
  )
}

export default App
