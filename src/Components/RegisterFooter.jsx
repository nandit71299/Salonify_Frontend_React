import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterFooter.css";
import { useNotification } from "../Context/NotificationContext";

function RegisterFooter(props, ref) {
  const { showNotification } = useNotification();
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  useImperativeHandle(ref, () => ({
    clickButton: () => {
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    },
  }));

  const handleClick = async () => {
    const validationResult = props.validate();

    if (validationResult.isValid) {
      if (props.onSubmit) {
        const success = await props.onSubmit(); // Call the external submit function
        if (success) {
          navigate(props.path); // Navigate if submission is successful
        }
      } else {
        navigate(props.path); // Navigate if no onSubmit function is provided
      }
    } else {
      const errors = Object.values(validationResult.errors).filter(Boolean);
      errors.forEach((message, index) => {
        setTimeout(() => {
          showNotification(message, "danger");
        }, index * 2000);
      });
    }
  };

  return (
    <div className="register-footer-container container">
      <button
        ref={buttonRef}
        onClick={props.validate ? handleClick : () => navigate(props.path)}
        className="btn mt-3 mb-0 btn-dark custom-font-small rounded-5 px-5"
      >
        {props.buttonText}
      </button>
      <div className="footer-text custom-font-smaller text-center custom-text-gray mb-2 mt-0">
        {props.footerText}
      </div>
    </div>
  );
}

export default forwardRef(RegisterFooter);
