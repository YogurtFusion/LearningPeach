import React from "react";

function Main() {
  return (
    <main>
      <h1>Fun facts about React</h1>
      <div className="text-body">
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 200K stars on GitHub</li>
          <li>Is maintained by Meta</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        <div className="bg-logo">
          {/* <img src="\src\assets\reactjs-icon 2.png" alt="react icon" /> */}
        </div>
      </div>
    </main>
  );
}
export default Main;
