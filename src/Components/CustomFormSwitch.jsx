import React from "react";
import "./CustomSwitch.css";

export default function CustomSwitch({ id, checked, onChange }) {
  return (
    <div className="custom-switch">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        className="custom-switch-input"
        onChange={onChange} // Call the onChange handler
      />
      <label htmlFor={id} className="custom-switch-label">
        <span className="custom-switch-slider"></span>
      </label>
    </div>
  );
}
