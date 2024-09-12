import React, { useState } from "react";
import settlementData from "./settlementData";
import Header from "../../Components/Header";
import CustomTextInput from "../../Components/CustomTextInput";
import { Link } from "react-router-dom";

function Settlements() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  function toggleSearch() {
    setIsSearchOpen((prev) => {
      return !prev;
    });
  }

  return (
    <div className="d-flex flex-column gap-3">
      <div>
        <Header heading="Settlements" backButton />
      </div>
      <div className="container d-flex flex-column gap">
        <div className="d-flex gap-1 align-items-center">
          <p className="custom-font-normal  m-0 p-0">Current Balance: </p>
          <p className="fw-bolder custom-font-normal m-0 p-0 ">
            ₹{settlementData.currentBalance}
          </p>
        </div>
        <div className="mt-2 d-flex gap-2 justify-content-center ">
          <div
            className="rounded d-flex flex-column p-2 ps-3 justify-space-between w-100 border"
            style={{ backgroundColor: "var(--bg-card)" }}
          >
            <h6 className="m-0 p-0">Amount on way to your bank account</h6>
            <h4 className="m-0 mt-4 p-0">
              ₹{settlementData.amountOnWay.toFixed(2)}/-
            </h4>
          </div>
          <div
            className="rounded d-flex flex-column p-2 ps-3 justify-space-between w-100 border"
            style={{ backgroundColor: "var(--bg-card)" }}
          >
            <h6 className="m-0 p-0">Next Settlement</h6>
            <p className="custom-font-normal pt-2 p-0 m-0">
              (Starts {settlementData.nextSettlement.startDate})
            </p>
            <h4 className="m-0 mt-3 p-0">
              ₹{settlementData.nextSettlement.amount.toFixed(2)}/-
            </h4>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column container">
        <h5>All Settlements</h5>
        <div className="d-flex gap-2 justify-content-between align-items-center">
          <div className="d-flex gap-2">
            <select
              name="settlementDateFilter"
              id="settlementDateFilter"
              className="form-group py-1 rounded border"
              style={{ backgroundColor: "var(--bg-card)" }}
            >
              <option value="All Time">All Time</option>
              <option value="Last Month">Last Month</option>
              <option value="Last Week">Last Week</option>
            </select>
            <select
              name="settlementStatusFilter"
              id="settlementStatusFilter"
              className="form-group py-1 rounded border"
              style={{ backgroundColor: "var(--bg-card)" }}
            >
              <option value="-">Status</option>
              <option value="Processed">All Time</option>
              <option value="Failed">Last Month</option>
            </select>
          </div>
          <div
            style={{ backgroundColor: "var(--bg-card)" }}
            className="d-flex justify-content-center align-items-center px-1 py-1 rounded border"
          >
            {isSearchOpen && (
              <CustomTextInput
                placeholder="Search"
                classNames="border-0 bg-transparent"
              />
            )}
            <i
              onClick={toggleSearch}
              className="fa-solid fa-magnifying-glass fa-icon"
            ></i>
          </div>
        </div>
      </div>
      <div className="container d-flex flex-column ">
        <div
          className="d-flex px-2 py-2 mb-3 rounded justify-content-between border "
          style={{
            backgroundColor: "var(--bg-card)",
          }}
        >
          <h6 className="m-0">Date</h6>
          <h6 className="m-0">Net Settlement</h6>
        </div>
        {settlementData.settlements.map((data, index) => {
          return (
            <div key={index}>
              <Link
                className="text-decoration-none text-black"
                to={`/settlement-details/${data.details.settlementID}`}
              >
                <div className="px-2 d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-column">
                    <div className="d-flex gap-2 align-items-center">
                      <div>{data.date}</div>
                      <div className="bg-success px-2 rounded text-white">
                        <p className="m-0 custom-font-small ">Processed</p>
                      </div>
                    </div>
                    <div>
                      <p className="m-0 mt-2 custom-font-small">
                        {data.details.settlementID}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <h6 className="m-0 custom-font-normal fw-bold">
                      ₹{data.details.netAmount}
                    </h6>
                    <i className="fa-icon fa-arrow-right fa-solid"></i>
                  </div>
                </div>
              </Link>
              {index != settlementData.settlements.length - 1 ? <hr /> : <></>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Settlements;
