import React from "react";

export default function Header(props) {
  return (
    <div
      className={`header-container d-flex gap-3 align-items-center ${
        props.backButton ? "justify-content-start" : "justify-content-end"
      } px-2 py-2 flex-nowrap`}
    >
      <div className="custom-font-larger">{props.backButton || ""}</div>
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
