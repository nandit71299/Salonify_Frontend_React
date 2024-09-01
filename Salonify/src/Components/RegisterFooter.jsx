import React from "react";
import "./RegisterFooter.css";
import { navigationService } from "../Services/navigationService";

export default function RegisterFooter(props) {
  const { goForward } = navigationService();
  return (
    <div className="register-footer-container container ">
      <button
        onClick={() => goForward(`${props.path}`)}
        className="btn mt-3 mb-0 btn-dark custom-font-small rounded-5 px-5"
      >
        {props.buttonText}
      </button>
      <div className="footer-text custom-font-smaller text-center custom-text-gray  mb-2 mt-0">
        {props.footerText}
      </div>
    </div>
  );
}
