import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function add() {
    console.log("add");
    // setCount(function (prevCount) {
    //   return prevCount + 1;
    // });
    setCount((prevCount) => prevCount + 1);
  }

  function minus() {
    if (count > 0) {
      setCount((prevCount)=> prevCount - 1);
    }
    console.log("minus");
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
