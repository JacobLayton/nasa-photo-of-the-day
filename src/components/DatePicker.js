import React from "react";
import "./styles.css";
import TextField from "@material-ui/core/TextField";

function DatePicker(props) {
  return (
    <div>
      <TextField
        id="date"
        label="Choose Different Date"
        type="date"
        defaultValue="2020-05-04"
        className="picker"
      />
    </div>
  );
}

export default DatePicker;
