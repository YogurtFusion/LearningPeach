import React from "react";
import Img from "../assets/img1.jpg";
const Event = () => {
  function onEnter() {
    console.log("mouse just entered ");
  }

  function handleClick(){
    console.log("Clicked!");
  }
  return (
    <div className="event">
      <h1>Events</h1>
      <div onMouseEnter={onEnter} className="event-img">
        <img src={Img} alt="hero image" />
      </div>
      <div className="event-btn">
        <button
          onClick={handleClick}
        >
          Click Me{" "}
        </button>
      </div>
    </div>
  );
};

export default Event;
