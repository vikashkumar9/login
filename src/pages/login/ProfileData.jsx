import React from "react";

export const ProfileData = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.profileImage} alt={props.name} />
    </div>
  );
};
