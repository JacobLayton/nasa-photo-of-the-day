import React, { useState } from "react";
import "./styles.css";

function Image(props) {
  console.log(props);
  return (
    <div>
      <img src={props.imageURL} />
    </div>
  );
}

export default Image;
