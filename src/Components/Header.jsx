import React from "react";
import { navigationService } from "../Services/navigationService";

export default function Header(props) {
  const { goBack, goForward } = navigationService();
  return (
    <div className="d-flex flex-nowrap justify-content-center align-items-center py-2">
      <div className="flex-fill custom-font-larger mx-auto px-3">
        {props.backButton ? (
          <button className="btn p-0" onClick={goBack}>
            <i className=" fa-solid fa-arrow-left"></i>
          </button>
        ) : (
          <span>&nbsp;&nbsp;&nbsp;</span>
        )}
      </div>
      <div className="flex-fill header-text-content d-flex flex-column text-center flex-nowrap">
        <div className="p-0 header-text-content-heading text-truncate custom-font-bold custom-font-larger">
          {props.heading}
        </div>
        <div className="header-text-content-subtext text-truncate custom-font-small custom-font-bold custom-text-gray">
          {props.subText}
        </div>
      </div>
      <div className="text-end flex-fill p-0 header-right-option mx-auto custom-font-normal custom-text-blue custom-font-bold">
        <button
          onClick={goBack}
          className="btn p-0 pe-3 text-decoration-none text-primary"
        >
          {props.rightOption ? (
            props.rightOption
          ) : (
            // <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <></>
          )}
        </button>
      </div>
    </div>
  );
}
