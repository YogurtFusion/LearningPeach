import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Props_1_2 from "./components/Props1-2";
import Props3 from "./components/Props3-10";
import Practice from "./components/PropsPractice";
import NonString from "./components/NonStringProps";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Props_1_2 />
      <Props3 />
      <Practice />
      <NonString/>
    </>
  );
}

export default App;
