import React, { useState } from "react";
import "./styles.css";

function Explanation(props) {
  return (
    <div>
      <p>{props.imageExplanation}</p>
    </div>
  );
}

export default Explanation;
