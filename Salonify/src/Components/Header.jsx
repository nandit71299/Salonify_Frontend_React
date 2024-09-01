import React from "react";
import { navigationService } from "../Services/navigationService";

export default function Header(props) {
  const { goBack, goForward } = navigationService();
  return (
    <div
      className={`header-container d-flex gap-3 align-items-center ${
        props.backButton ? "justify-content-start" : "justify-content-end"
      } px-2 py-2 flex-nowrap`}
    >
      <div className="custom-font-larger">
        {props.backButton && (
          <button className="btn" onClick={goBack}>
            <i className=" fa-solid fa-arrow-left"></i>
          </button>
        )}
      </div>
      <div className="header-text-content text-center">
        <div className="header-text-content-heading custom-font-bold text-truncate custom-font-larger">
          {props.heading}
        </div>
        <div className="header-text-content-subtext custom-font-small custom-font-bold custom-text-gray">
          {props.subText}
        </div>
      </div>
      <div className="custom-font-small custom-text-blue custom-font-bold px-2">
        {props.rightOption}
      </div>
    </div>
  );
}
