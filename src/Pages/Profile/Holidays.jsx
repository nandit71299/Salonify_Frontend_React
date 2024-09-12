import React from "react";
import holidayData from "./HolidayData";
import Header from "../../Components/Header";
import { Link } from "react-router-dom";

function Holidays() {
  return (
    <div>
      <Header
        heading="Holiday Schedule"
        backButton
        rightOptionLinkType="link"
        rightOptionLink="/add-holiday"
        rightOption="+ Add"
      />
      <div className="fw-bold custom-font-normal custom-text-gray ps-3">
        Holiday Schedule
      </div>
      <hr className="m-0 mt-2 mb-2" />
      <div className="container pt-3">
        {holidayData.map((value, index) => {
          return (
            <div key={index}>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column">
                  <div className="d-flex gap-2">
                    <h5 className="fw-bold custom-font-large m-0">
                      {value.day}
                    </h5>
                    <h5 className="fw-bold custom-font-large m-0">
                      {value.date}
                    </h5>
                  </div>
                  <p className="fw-bold custom-font-normal custom-text-gray m-0 mt-1">
                    {value.schedule}
                  </p>
                </div>
                <div>
                  <Link
                    className="text-decoration-none text-dark"
                    to={`/edit-holiday/${index}`}
                  >
                    <i className="fa-solid fa-arrow-right fa-icon"></i>
                  </Link>
                </div>
              </div>
              {holidayData.length != index - 1 ? (
                <hr className="mt-3" />
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Holidays;
