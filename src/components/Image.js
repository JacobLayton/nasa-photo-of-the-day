import React, { useState } from "react";

function Image(props) {
  console.log(props);
  return (
    <div>
      <img src={props.imageURL} />
    </div>
  );
}

export default Image;
