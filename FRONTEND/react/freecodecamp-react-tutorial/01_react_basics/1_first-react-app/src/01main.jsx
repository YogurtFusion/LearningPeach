import { createRoot } from "react-dom/client";
import { createElement } from "react";

const root = createRoot(document.getElementById("root"));

const reactElement = createElement(
  "h1",
  null,
  "Hellow from inside of the create element",
);

const jsxElement = <h1>Heyy from jsx element</h1>

console.log(reactElement);

root.render(
  <>
    {reactElement}
  {jsxElement}
    <ul>
      <li>I've react because i can make cool things with it </li>
      <li>get good money </li>
      <li>solve bussiness problems </li>
    </ul>
  </>,
);

// import { createRoot } from "react-dom/client"

// const root = createRoot(document.getElementById("root"));
// root.render(
//   <ul>
//     <li>I love react because I'm going to make cool things with it </li>
//     <li>I love react because I'm going to make cool things with it </li>
//     <li>I love react because I'm going to make cool things with it </li>
//   </ul>,
// );
