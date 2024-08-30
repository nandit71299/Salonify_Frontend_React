import React from "react";
import "./RegisterFooter.css";
import { navigationService } from "../Services/navigationService";

export default function RegisterFooter(props) {
  const { goForward } = navigationService();
  return (
    <div className="register-footer-container container">
      <button
        onClick={() => goForward(`${props.path}`)}
        className="btn btn-dark custom-font-small rounded-5 px-5"
      >
        {props.buttonText}
      </button>
      <div className="footer-text">{props.footerText}</div>
    </div>
  );
}
