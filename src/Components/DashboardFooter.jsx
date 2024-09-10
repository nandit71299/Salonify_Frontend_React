import React from "react";
import { Link } from "react-router-dom";

import "./DashboardFooter.css";

function DashboardFooter() {
  return (
    <div className="p-1 pt-3 pb-3 shadow-lg dashboard-footer-container w-100 rounded-bottom rounded-4 border-light-subtle border">
      <div className="d-flex gap-3  justify-content-center align-items-center">
        <Link
          to={"/dashboard"}
          className="flex-grow-1 d-flex justify-content-center align-items-center"
        >
          <button className="btn">
            <i className="fa-solid fa-xl fa-house fa-icon"></i>
          </button>
        </Link>
        <Link
          to={"/payments"}
          className="flex-grow-1 d-flex justify-content-center align-items-center"
        >
          <button className="btn">
            <i className="fa-solid fa-indian-rupee-sign fa-xl fa-icon"></i>
          </button>
        </Link>
        <Link
          to={"/appointments"}
          className="flex-grow-1 d-flex justify-content-center align-items-center"
        >
          <button className="btn">
            <i className="fa-solid fa-xl fa-briefcase fa-icon"></i>
          </button>
        </Link>
        <Link
          to={"/profile"}
          className="flex-grow-1 d-flex justify-content-center align-items-center"
        >
          <button className="btn">
            <i className="fa-solid fa-xl fa-user fa-icon"></i>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DashboardFooter;
