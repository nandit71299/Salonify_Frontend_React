import React from "react";
import { Link } from "react-router-dom";
import { navigationService } from "../Services/navigationService";

export default function Header(props) {
  const { goBack, goForward } = navigationService();

  return (
    <header className="d-flex pt-3 pb-3 flex-nowrap justify-content-center align-items-center py-2">
      {/* Back Button Section */}
      <div className="flex-fill custom-font-larger mx-auto px-3">
        {props.backButton ? (
          <button className="btn p-0" onClick={goBack} aria-label="Go Back">
            <i className="fa-solid fa-arrow-left fa-icon"></i>
          </button>
        ) : (
          <span>&nbsp;&nbsp;&nbsp;</span>
        )}
      </div>

      {/* Header Text Content */}
      <div className="flex-fill header-text-content d-flex flex-column text-center flex-nowrap">
        <div className="p-0 header-text-content-heading text-truncate custom-font-bold custom-font-larger">
          {props.heading}
        </div>
        <div className="header-text-content-subtext text-truncate custom-font-small custom-font-bold custom-text-gray">
          {props.subText}
        </div>
      </div>

      {/* Right Option Section */}
      <div className="m-0 text-end flex-fill p-0 header-right-option mx-auto custom-font-normal custom-text-blue custom-font-bold">
        {props.rightOptionLinkType === "link" && props.rightOptionLink ? (
          <Link
            to={props.rightOptionLink}
            className="btn pe-2 m-0 p-0 text-decoration-none text-primary"
          >
            {props.rightOption}
          </Link>
        ) : (
          <button
            onClick={props.rightOptionOnClick || goBack} // Use `goForward` as default if `props.rightOptionOnClick` is not provided
            className="btn text-decoration-none text-primary"
            aria-label={props.rightOption || "Right Option"}
          >
            {props.rightOption || <span>&nbsp;&nbsp;&nbsp;</span>}
          </button>
        )}
      </div>
    </header>
  );
}
