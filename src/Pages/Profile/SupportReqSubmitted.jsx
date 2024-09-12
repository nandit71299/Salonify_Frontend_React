import React from "react";
import Header from "../../Components/Header";
import { Link } from "react-router-dom";

function SupportReqSubmitted() {
  return (
    <div>
      <div>
        <Header heading="Customer Support" />
      </div>
      <div
        className="container d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "85vh" }}
      >
        <div
          className="px-4 py-4 bg-primary"
          style={{ color: "white", borderRadius: "50%" }}
        >
          <i className="fa fa-xl fa-check fa-icon" aria-hidden="true"></i>
        </div>
        <div className="mt-3">Request Submitted</div>
        <span className="custom-font-normal pt-2 text-center">
          {" "}
          Looks like you’ve given us something to do! Sit tight, we’ll get back
          to you asap.{" "}
        </span>
        <span className="custom-font-normal pt-5">
          {" "}
          (If we survive this one! Just kidding...){" "}
        </span>
      </div>
      <Link to={"/dashboard"} className="container d-flex">
        <button className="px-2 text-white btn py-2 text-center w-100 bg-primary">
          Done
        </button>
      </Link>
    </div>
  );
}

export default SupportReqSubmitted;
