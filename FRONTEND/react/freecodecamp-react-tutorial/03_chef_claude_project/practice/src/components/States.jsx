import React from "react";

const States = () => {
  //   let [array, func] = React.useState("yes");
  let [isImportant, setIsImportant] = React.useState("yes");

  function handleClick(){
    setIsImportant("Hell yeah")
  }

  return (
    <div>
      <h1 className="title">Is state</h1>
      <button className="vlaue" onClick={handleClick}>{isImportant}</button>
    </div>
  );
};

export default States;
