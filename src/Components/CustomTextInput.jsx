import React from "react";
import "./CustomTextInput.css";

const CustomTextInput = React.forwardRef((props, ref) => {
  return (
    <>
      <label
        htmlFor={props.id} // Use props.id for the label's htmlFor attribute
        className="form-label custom-font-small custom-text-blue custom-font-bold"
      >
        {props.label}
      </label>
      <input
        className={`${props.classNames} form-control`}
        placeholder={props.placeholder}
        type={props.type || "text"} // Default to text if no type is provided
        id={props.id}
        name={props.name} // Added name attribute
        required={props.required} // Allow for a dynamic 'required' attribute
        value={props.value}
        onChange={props.onChange} // Handle change events
        disabled={props.disabled}
        ref={ref} // Correctly assign the ref
      />
    </>
  );
});

export default CustomTextInput;
