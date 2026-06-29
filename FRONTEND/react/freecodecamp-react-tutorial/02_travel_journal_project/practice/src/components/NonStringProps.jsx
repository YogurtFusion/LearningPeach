import React from "react";
import { Jokes } from "./jokes";

const NonString = () => {
    console.log('nonString rendered' )
  return (
    <>
      <Jokes
        punchLine="It's hard to explain puns to keptomaniacs because they take things literally "
        upvotes={10}
        isPun={true}
        comments={[
            {author:"",text:"",title:""},
            {author:"",text:"",title:""},
            {author:"",text:"",title:""},
        ]}
      />
    </>
  );
};

export default NonString;
