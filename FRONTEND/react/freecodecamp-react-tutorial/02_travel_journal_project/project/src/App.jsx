import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./components/Header";
import Entry from "./components/Entry";
import Challenges from "./components/Challenges";

function App() {
  const [count, setCount] = useState(0);

  const ninjaTurtles = ["Donatello", "Michaelangelo", "Rafael", "Leonardo"];
  return (
    <>

      <Header />
      <Entry
        countryName="JAPAN"
        PlaceName="Mount Fuji"
        img={{
          src: "/src/assets/japan.jpg",
          alt: "Mount fuji picture",
        }}
        dates="12 Jan, 2023 - 24 Jan, 2023"
        description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        link="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
        />
        {/* <main>{ninjaTurtles.map((item)=>(
          <h2> {item} </h2>
        ))}</main> */}
    </>
  );
}

export default App;
