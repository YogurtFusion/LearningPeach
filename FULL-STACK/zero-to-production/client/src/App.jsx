import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("")
  useEffect(()=>{
    fetch("/api/message")
    .then((res)=>res.json())
    .then((data)=> setMessage(data.message))
    .catch((err)=>{
      console.error("Error message fetching", err)
    })
  })
  return (
    <>
    <h1>Welcome to chaicode frontend</h1>
    <h2>data from backend:  {message} </h2>
    </>
  )
}

export default App
