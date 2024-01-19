import React from "react";

export const Home = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.profileImage} alt={props.name} />
    </div>
  );
};
