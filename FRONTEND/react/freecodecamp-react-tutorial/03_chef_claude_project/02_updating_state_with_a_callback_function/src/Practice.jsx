import { useState } from "react";

export default function Practice() {
  const [count, setCount] = useState(0);
  function add() {
    setCount((prevCountValue) => prevCountValue + 1);
  }

  function minus() {
    if (count > 0) {
      setCount((prevCountValue) => prevCountValue - 1);
    }
  }

  return (
    <main>
      <h1>Updating State With a Callback Function</h1>
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
