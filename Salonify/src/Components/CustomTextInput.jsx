import React from "react";

import "./CustomTextInput.css";

export default function CustomTextInput(props) {
  return (
    <>
      <label
        htmlFor="firstName"
        className="form-label custom-font-small custom-text-blue custom-font-bold"
      >
        {props.label}
      </label>
      <input
        type="text"
        className="form-control"
        id={props.id}
        required=""
        value={props.value}
      />
    </>
  );
}
