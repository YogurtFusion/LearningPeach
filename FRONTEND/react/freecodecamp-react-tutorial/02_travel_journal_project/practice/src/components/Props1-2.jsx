import React from "react";

const Props_1_2 = () => {
  const firstName = "Joe";
  const lastName = "Schmoe";
  const time = new Date().getHours();
  const mins = new Date().getMinutes();
  let timeOfDay;

  if (time < 12) {
    timeOfDay = "Morning";
  } else if (time >= 12 && time < 17) {
    timeOfDay = "afternoon";
  } else if (time < 21) {
    timeOfDay = "evening";
  } else {
    timeOfDay = "night";
  }

  return (
    <>
      <h1>
        Hellow {firstName} {lastName}
      </h1>
      <h1>
         It is currently about {time}:{mins}
      </h1>
      <h1>good {timeOfDay} </h1>
    </>
  );
};

export default Props_1_2;
