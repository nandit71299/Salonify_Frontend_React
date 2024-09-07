import React from "react";
import { Link } from "react-router-dom";

import "./DashboardFooter.css";
import home from "../assets/home.png";
import currency from "../assets/currency.png";
import work from "../assets/work.png";
import avatar from "../assets/avatar.png";

function DashboardFooter() {
  return (
    <div className="p-1 pt-2 pb-2 shadow-lg dashboard-footer-container w-100 rounded-bottom rounded-4">
      <div className="d-flex gap-3  justify-content-center align-items-center">
        <Link
          to={"/dashboard"}
          className="flex-grow-1 d-flex justify-content-center align-items-center"
        >
          <button className="btn">
            <img src={home} alt="" />
          </button>
        </Link>
        <Link
          to={"/payments"}
          className="flex-grow-1 d-flex justify-content-center align-items-center"
        >
          <button className="btn">
            <img src={currency} alt="" />
          </button>
        </Link>
        <Link
          to={"/appointments"}
          className="flex-grow-1 d-flex justify-content-center align-items-center"
        >
          <button className="btn">
            <img src={work} alt="" />
          </button>
        </Link>
        <Link
          to={"/"}
          className="flex-grow-1 d-flex justify-content-center align-items-center"
        >
          <button className="btn">
            <img src={avatar} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DashboardFooter;
