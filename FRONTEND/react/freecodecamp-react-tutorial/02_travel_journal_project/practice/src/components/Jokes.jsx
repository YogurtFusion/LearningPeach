import React from "react";

export const Jokes = (props) => {
  console.log(
    ` this is the punchline: ${props.punchLine}, this is the comments ${props.comments}, this is the pun  ${props.isPun}, this is the upvotes ${props.upvotes}`,
  );
  console.log("this is props rendering in the jokes", props);

  console.log("it's in the jokes");

  return (
    <div>
      <h1 style={{ display: props.setup ? "block" : "none" }}>
        {" "}
        {props.setup}{" "}
      </h1>
      {/* { props.setup && <h1> {props.setup}  </h1>} */}
      <h2>{props.punchline} </h2>
      <hr />
    </div>);
};
