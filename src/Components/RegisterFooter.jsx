import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterFooter.css";
import { navigationService } from "../Services/navigationService";
import { useNotification } from "../Context/NotificationContext"; // Import the notification hook

function RegisterFooter(props, ref) {
  const { showNotification } = useNotification();

  const { goForward } = navigationService();
  const buttonRef = useRef(null);
  const navigate = useNavigate(); // useNavigate from react-router-dom

  // Expose methods to the parent component via ref
  useImperativeHandle(ref, () => ({
    clickButton: () => {
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    },
  }));

  const handleClick = () => {
    const validationResult = props.validate(); // Call the validate function passed as prop

    if (validationResult.isValid) {
      navigate(props.path); // Navigate to the specified path
      props.notificationMessage &&
        showNotification(validationResult.notificationMessage);
    } else {
      // Log each error message to the console
      const errors = Object.values(validationResult.errors).filter(Boolean); // Filter out null or undefined errors
      errors.forEach((message, index) => {
        console.log(message);
        setTimeout(() => {
          showNotification(message, "danger"); // Replace with actual notification display if needed
        }, index * 2000); // Delay each message by 1000ms (1 second) times the index
      });
    }
  };

  return (
    <div className="register-footer-container container">
      <button
        ref={buttonRef}
        onClick={props.validate ? handleClick : () => navigate(props.path)} // Use the handleClick function
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
