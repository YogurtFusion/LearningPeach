import { useState } from "react";

export default function App() {
  const [isGoingOut, setIsGoingOut] = useState(true);
  function toggelGoingOut() {
    setIsGoingOut((prev) => !prev);
  }
  return (
    <main>
      <h1>Toggling State</h1>

      <h2 className="title">Do I feel like going out tonight?</h2>
      <button
       className="value"
       aria-label={`Current answer is ${isGoingOut?"Yes":"No"}. click to change it.`}
        onClick={toggelGoingOut}
        >{isGoingOut ? "yes" : "no I wana goon tonight"}
      </button>
    </main>
  );
}
// don't format this page