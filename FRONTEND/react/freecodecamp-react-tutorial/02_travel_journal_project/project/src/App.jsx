import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./components/Header";
import Entry from "./components/Entry";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <Entry/>
    </>
  );
}

export default App;
