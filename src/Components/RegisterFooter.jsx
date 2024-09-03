import React, { forwardRef, useRef, useImperativeHandle } from "react";
import "./RegisterFooter.css";
import { navigationService } from "../Services/navigationService";

// Define RegisterFooter as a normal function
function RegisterFooter(props, ref) {
  const { goForward } = navigationService();
  const buttonRef = useRef(null);

  // Expose methods to the parent component via ref
  useImperativeHandle(ref, () => ({
    clickButton: () => {
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    },
  }));

  return (
    <div className="register-footer-container container">
      <button
        ref={buttonRef}
        onClick={() => goForward(`${props.path}`)}
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

// Wrap RegisterFooter with forwardRef to forward the ref
export default forwardRef(RegisterFooter);
