import React from "react";
import { Jokes } from "./jokes";
import jokesData from "../data/jokes";
const Practice = () => {
  const JokesElement = jokesData.map((item) => {
    return <Jokes setup={item.setup} punchline={item.punchline} />;
  });

  return (
    <>
      Here are some of the driest jokes
      {/* <Jokes
        setup=" I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
      /> */}

        {JokesElement}

    </>
  );
};

export default Practice;
