import React, { useState } from "react";

const sampleData = [
  {
    id: 1,
    serviceName: "Hair Cut With Spa",
    apponintmentCounts: 2,
    salesAmount: 200,
  },
  {
    id: 2,
    serviceName: "Hair Cut",
    apponintmentCounts: 6,
    salesAmount: 900,
  },
  {
    id: 3,
    serviceName: "Hair Spa",
    apponintmentCounts: 2,
    salesAmount: 300,
  },
];

function MostBookedCard(props) {
  const [selectedSalesFilter, setSelectedSalesFilter] = useState("Today");

  return (
    <div className="mt-3 rounded custom-card-background  border border-secondary">
      <div className="p-2 d-flex justify-content-between align-items-center">
        <div className="card-title custom-font-semi-bold">
          {props.cardTitle || "Most Booked Services"}
        </div>
        <button className="btn p-0 card-title custom-font-small custom-text-blue">
          {props.button || "View More"}
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
            selectedSalesFilter === "Last 7 Days"
              ? "border-primary custom-text-blue"
              : "bg-transparent"
          }`}
          onClick={() => setSelectedSalesFilter("Last 7 Days")}
        >
          Last 7 Days
        </button>
        <button
          className={`border rounded custom-font-small p-1 ${
            selectedSalesFilter === "This Week"
              ? "border-primary custom-text-blue"
              : "bg-transparent"
          }`}
          onClick={() => setSelectedSalesFilter("This Week")}
        >
          This Week
        </button>{" "}
        <button
          className={`border rounded custom-font-small p-1 ${
            selectedSalesFilter === "This Month"
              ? "border-primary custom-text-blue"
              : "bg-transparent"
          }`}
          onClick={() => setSelectedSalesFilter("This Month")}
        >
          This Month
        </button>
      </div>

      {sampleData.map((data) => {
        return (
          <div
            key={data.id}
            className="container pt-2 d-flex gap-2 justify-content-center align-items-center flex-nowrap"
          >
            <div className="custom-bg-blue m-0 p-0   rounded-5 text-white">
              <p className="m-0 py-2 px-3">{data.id}</p>
            </div>
            <div className="d-flex flex-column flex-grow-1">
              <div className="custom-font-normal">{data.serviceName}</div>
              <div className="custom-font-small custom-text-gray">
                {data.apponintmentCounts} Appointments
              </div>
            </div>
            <div className="custom-font-normal fw-bold">
              ₹ {data.salesAmount}
              <span className="custom-font-small">.00</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MostBookedCard;
