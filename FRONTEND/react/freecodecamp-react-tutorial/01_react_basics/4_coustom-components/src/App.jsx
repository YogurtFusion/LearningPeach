import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <div className="head">
          <img src="src\assets\react.svg" alt="" />
          <h1>ReactFacts</h1>
        </div>
        <div className="text-body">
          <h1>Fun facts about React</h1>
          <ol>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 200K stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ol>
        </div>
        <footer>© 20xx chaple development. All rights reserved.</footer>
      </main>
    </>
  );
}
export default App;
