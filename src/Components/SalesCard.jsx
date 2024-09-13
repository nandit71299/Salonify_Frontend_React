import React, { useState } from "react";

function SalesCard(props) {
  const [selectedSalesFilter, setSelectedSalesFilter] = useState("Today");
  return (
    <div className="mt-3 rounded custom-card-background  border border-secondary">
      <div className="p-2 d-flex justify-content-between align-items-center">
        <div className="card-title custom-font-semi-bold">
          {props.cardTitle || "Sales"}
        </div>
        <button className="btn p-0 card-title custom-font-small custom-text-blue">
          {/* {props.button || "View More"} */}
        </button>
      </div>
      <hr className="m-0" />
      <div className="p-2 d-flex gap-2">
        <button
          className={`border rounded custom-font-small p-1 ${
            selectedSalesFilter === "Today"
              ? "border-primary custom-text-blue"
              : "bg-transparent"
          }`}
          onClick={() => setSelectedSalesFilter("Today")}
        >
          Today
        </button>
        <button
          className={`border rounded custom-font-small p-1 ${
            selectedSalesFilter === "Yesterday"
              ? "border-primary custom-text-blue"
              : "bg-transparent"
          }`}
          onClick={() => setSelectedSalesFilter("Yesterday")}
        >
          Yesterday
        </button>
        <button
          className={`border rounded custom-font-small p-1 ${
            selectedSalesFilter === "All Time"
              ? "border-primary custom-text-blue"
              : "bg-transparent"
          }`}
          onClick={() => setSelectedSalesFilter("All Time")}
        >
          All Time
        </button>
      </div>
      <div className="d-flex justify-space-between p-2">
        <div className="d-flex flex-column flex-grow-1">
          <h6 className="custom-font-large m-0">Net Sales</h6>
          <p className="custom-font-small custom-text-gray m-0">
            Total {props.totalClosedAppointments || 6} Closed Appointments
          </p>
        </div>
        <div className="custom-font-bold d-flex">
          ₹{" "}
          {props.totalNetSales || (
            <p>
              1897
              <span className="custom-font-small custom-font-normal">.00</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SalesCard;
