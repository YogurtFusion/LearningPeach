import { useState } from "react"

export default function App() {

  return (
    <main>
      <h1>How many times bob says "state" in this section ? </h1>
      <div className="counter">
        <button className="minus" aria-label="Decrease count">-</button>
        <h2 className="count">0</h2>
        <button className="plus" aria-label="Increase count">+</button>
      </div>
    </main>
  )
}
