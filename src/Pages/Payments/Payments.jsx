import React, { useState } from "react";
import Header from "../../Components/Header";
import Filters from "../../Components/Filters";
import CustomTextInput from "../../Components/CustomTextInput";
import PaymentsCard from "../../Components/PaymentsCard";
import Footer from "../../Components/DashboardFooter";

function Payments() {
  const [selectedPaymentsFilter, setSelectedPaymentsFilter] = useState("Today");
  const [showFilters, setShowFilters] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function toggleFilterPage() {
    setShowFilters((prev) => !prev);
  }

  const data = [
    {
      date: "April 18",
      transactions: [
        {
          name: "Sareria Nandit",
          appointment: "#1284",
          time: "05:48 PM",
          amount: "298.00",
          status: "Failed",
        },
        {
          name: "Sareria Nandit",
          appointment: "#1284",
          time: "05:48 PM",
          amount: "393.00",
          status: "Successful",
        },
        {
          name: "Sareria Nandit",
          appointment: "#1284",
          time: "05:48 PM",
          amount: "3982.00",
          status: "Successful",
        },
        {
          name: "Sareria Nandit",
          appointment: "#1284",
          time: "05:48 PM",
          amount: "3984.00",
          status: "Successful",
        },
        {
          name: "Sareria Nandit",
          appointment: "#1284",
          time: "05:48 PM",
          amount: "3938.00",
          status: "Refunded",
        },
      ],
    },
    {
      date: "April 17",
      transactions: [
        {
          name: "Sareria Nandit",
          appointment: "#1284",
          time: "05:48 PM",
          amount: "348.00",
          status: "Successful",
        },
        {
          name: "Sareria Nandit",
          appointment: "#1284",
          time: "05:48 PM",
          amount: "328.00",
          status: "Successful",
        },
      ],
    },
  ];

  // Determine whether to hide the icon and text
  const shouldHide = isFocused || inputValue.length > 0;

  return (
    <div className="pb-5">
      {showFilters && <Filters closeFilters={toggleFilterPage} />}
      <Header heading="Payments" subText="Bonanza" />

      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex gap-2">
          <button
            className={`border rounded custom-font-small p-1 ${
              selectedPaymentsFilter === "Today"
                ? "border-primary custom-text-blue"
                : "bg-transparent"
            }`}
            onClick={() => setSelectedPaymentsFilter("Today")}
          >
            Today
          </button>
          <button
            className={`border rounded custom-font-small p-1 ${
              selectedPaymentsFilter === "Last 30 Days"
                ? "border-primary custom-text-blue"
                : "bg-transparent"
            }`}
            onClick={() => setSelectedPaymentsFilter("Last 30 Days")}
          >
            Last 30 Days
          </button>
          <button
            className={`border rounded custom-font-small p-1 ${
              selectedPaymentsFilter === "Last 7 Days"
                ? "border-primary custom-text-blue"
                : "bg-transparent"
            }`}
            onClick={() => setSelectedPaymentsFilter("Last 7 Days")}
          >
            Last 7 Days
          </button>
          <button
            className={`border rounded custom-font-small p-1 ${
              selectedPaymentsFilter === "All Time"
                ? "border-primary custom-text-blue"
                : "bg-transparent"
            }`}
            onClick={() => setSelectedPaymentsFilter("All Time")}
          >
            All Time
          </button>
        </div>
        <div>
          <button className="btn m-0 p-0" onClick={toggleFilterPage}>
            <i className="fa-solid fa-filter fa-icon"></i>
          </button>
        </div>
      </div>
      <div className="container pt-3">
        <div className="position-relative">
          <input
            type="search"
            className="border-0 bg-transparent input-group border rounded py-2 px-2"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <hr className="mt-0" />
          <div
            className={`position-absolute ${shouldHide ? "d-none" : ""}`}
            style={{ top: 5, left: 5 }}
          >
            <div>
              <i
                className="fa-solid fa-magnifying-glass p-1"
                style={{ color: "gray" }}
              ></i>
              &nbsp; Search
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {data.flatMap((d) => {
          return d.transactions.flatMap((d) => {
            return (
              <PaymentsCard
                name={d.name}
                appointmentNo={d.appointment}
                amount={d.amount}
                status={d.status}
              />
            );
          });
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Payments;
