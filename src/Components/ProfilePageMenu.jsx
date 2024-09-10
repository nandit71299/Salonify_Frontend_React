import React from "react";
import { Link } from "react-router-dom";

function ProfilePageMenu({ title, options }) {
  return (
    <div className="menu-section">
      <h3 className="menu-title custom-heading-1">{title}</h3>
      <ul
        className="menu-options rounded ps-3 pe-3"
        style={{ backgroundColor: "var(--options-bg-gray)" }}
      >
        {options.map((option, index) => (
          <Link key={index} to={option.link} className="text-decoration-none">
            <div
              // className="d-flex justify-content-between"
              className={
                index !== options.length - 1
                  ? "d-flex justify-content-between border-bottom ps-0"
                  : "d-flex justify-content-between ps-0"
              }
            >
              <ul key={index} className="ps-0 p-2">
                <p
                  className="m-0 text-decoration-none bg-transparent text-dark p-0"
                  // href={option.link}
                >
                  {option.name}
                </p>
              </ul>
              <button className="btn">
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default ProfilePageMenu;
