
import "./index.css";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
import Header from "./component/Header.jsx";
import Main from "./component/Main.jsx";
import Footer from "./component/Footer.jsx";

root.render(
  <>
    <Header />
    <Main />
    <Footer />
  </>,
);
