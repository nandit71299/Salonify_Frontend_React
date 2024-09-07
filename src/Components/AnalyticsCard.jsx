import React, { useState } from "react";

import { Tooltip } from "react-tooltip";

function AnalyticsCard(props) {
  const [selectedAnalyticsFilter, setSelectedAnalyticsFilter] =
    useState("Today");
  return (
    <div className="mt-3 rounded custom-card-background  border border-secondary">
      <div className="p-2 d-flex justify-content-between align-items-center">
        <div className="card-title custom-font-semi-bold">
          {props.cardTitle || "Analytics"}
        </div>
        <button className="btn p-0 card-title custom-font-small custom-text-blue">
          {props.button || "View More"}
        </button>
      </div>
      <hr className="m-0" />
      <div className="m-0 p-2 custom-font-small pb-0 custom-text-gray">
        From {props.dateRange || "20-02-2023 - 20-03-2024 "}
      </div>
      <div className="p-2 d-flex gap-2">
        <button
          className={`border rounded custom-font-small p-1 ${
            selectedAnalyticsFilter === "Today"
              ? "border-primary custom-text-blue"
              : "bg-transparent"
          }`}
          onClick={() => setSelectedAnalyticsFilter("Today")}
        >
          Today
        </button>
        <button
          className={`border rounded custom-font-small p-1 ${
            selectedAnalyticsFilter === "Last 30 Days"
              ? "border-primary custom-text-blue"
              : "bg-transparent"
          }`}
          onClick={() => setSelectedAnalyticsFilter("Last 30 Days")}
        >
          Last 30 Days
        </button>
        <button
          className={`border rounded custom-font-small p-1 ${
            selectedAnalyticsFilter === "Last 7 Days"
              ? "border-primary custom-text-blue"
              : "bg-transparent"
          }`}
          onClick={() => setSelectedAnalyticsFilter("Last 7 Days")}
        >
          Last 7 Days
        </button>
        <button
          className={`border rounded custom-font-small p-1 ${
            selectedAnalyticsFilter === "All Time"
              ? "border-primary custom-text-blue"
              : "bg-transparent"
          }`}
          onClick={() => setSelectedAnalyticsFilter("All Time")}
        >
          All Time
        </button>
      </div>
      <div className="d-flex p-2 gap-2 overflow-scroll">
        <div className="border border-secondary rounded d-flex flex-column w-50 p-2 justify-content-between">
          <h4 className="custom-font-normal">Total Appointments</h4>
          <h2 className="custom-font-larger m-0">
            {props.totalAppointmentsCount || 28}
          </h2>
        </div>

        <div className="border border-secondary rounded d-flex flex-column w-50 p-2 justify-content-between">
          <h4 className="custom-font-normal">Completed</h4>
          <h2 className="custom-font-larger m-0">
            {props.completedAppointmentsCount || 7}
          </h2>
        </div>

        <div className="border border-secondary rounded d-flex flex-column w-50 p-2 justify-content-between">
          <h4 className="custom-font-normal">Cancelled</h4>
          <h2 className="custom-font-larger m-0">
            {props.cancelledAppointmentsCount || 28}
          </h2>
        </div>

        <div className="border border-secondary rounded d-flex flex-column w-50 p-2 justify-content-between">
          <div className="d-flex align-items-start">
            <h4 className="custom-font-normal">Expected Sales</h4>
            <button
              className="btn pt-0 ps-3 pe-0"
              data-tooltip-id="expected-sales"
              data-tooltip-content={
                "Expected Sales is a expected amount of the sales that can be made in a specified date range. It's not actual sales."
              }
            >
              <i className="fa-solid fa-circle-info fa-xs custom-bg-card-background"></i>
            </button>
            <Tooltip id="expected-sales" className="w-75" />
          </div>
          <h2 className="custom-font-larger m-0 ">
            ₹
            {props.expectedSales || (
              <span>
                2800<span className="custom-font-small">.00</span>
              </span>
            )}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsCard;
