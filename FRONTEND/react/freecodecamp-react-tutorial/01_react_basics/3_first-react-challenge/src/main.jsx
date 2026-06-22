/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding more styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="react-logo.png"` in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

import {createRoot} from "react-dom/client";
import "./index.css"

const root = createRoot(document.getElementById("root"))
console.log(<h1>Hello world!</h1>)

root.render(
  
<main>
<div className="head">
<img src="src\assets\react.svg" alt="" />
<h1>ReactFacts</h1>
</div>
<div className="text-body">
  <h1>Fun facts about React</h1>
  <ul>
    <li>Was first released in 2013</li>
    <li>Was originally created by Jordan Walke</li>
    <li>Has well over 200K stars on GitHub</li>
    <li>Is maintained by Meta</li>
    <li>Powers thousands of enterprise apps, including mobile apps</li>
  </ul>
</div>
</main>
)