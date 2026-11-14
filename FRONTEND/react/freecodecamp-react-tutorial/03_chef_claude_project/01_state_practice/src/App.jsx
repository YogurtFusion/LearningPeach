import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  function add() {
    console.log("add");
    setCount(count + 1);
  }

  function minus() {
    if (count > 0) {
      setCount(count - 1);
    }
    console.log("minus");
    

  }

  return (
    <main>
      <h1>How many times bob says "state" in this section ? </h1>
      <div className="counter">
        <button
          className="minus"
          aria-label="Decrease count"
          //  onClick={function(){setCount(count-1)}}
          onClick={minus}
        >
          -
        </button>
        <h2 className="count">{count} </h2>
        <button
          className="plus"
          aria-label="Increase count"
          // onClick={function(){setCount(count+1)}}
          onClick={add}
        >
          +
        </button>
      </div>
    </main>
  );
}
