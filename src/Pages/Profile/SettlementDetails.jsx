import React, { useState } from "react";
import { useParams } from "react-router-dom";
import settlementData from "./settlementData";
import Header from "../../Components/Header";

function SettlementDetails() {
  const { id } = useParams();

  const setData = settlementData.settlements.find(
    (data) => data.details.settlementID == id
  );

  const [activeTab, setActiveTab] = useState("payments");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="settlement-details-page-container">
      <div>
        <Header heading="Settlement Details" subText={setData.id} backButton />
      </div>
      <div className="container d-flex flex-column gap-3">
        <div
          className="d-flex flex-column border rounded-3 px-2 py-3"
          style={{ backgroundColor: "var(--bg-card)" }}
        >
          <div className="d-flex gap-1 flex-column">
            <h6 className="custom-text-gray m-0">Settlement Details</h6>
            <h6 className="m-0">{setData.id}</h6>
          </div>
          <hr className="m-0 mt-2 mb-2 " />
          <div>
            <div className="d-flex gap-1 flex-column">
              <h6 className="custom-text-gray m-0">UTR</h6>
              <h6 className="m-0">{setData.details.utr}</h6>
            </div>
          </div>
          <hr className="m-0 mt-2 mb-2 " />
          <div>
            <div className="d-flex gap-1 flex-column">
              <h6 className="custom-text-gray m-0">Created On</h6>
              <h6 className="m-0">{setData.details.createdOn}</h6>
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-column border rounded-3 px-2 py-3 gap-2"
          style={{ backgroundColor: "var(--bg-card)" }}
        >
          <div className="d-flex justify-content-between">
            <h6 className="m-0">Gross Settlement</h6>
            <p className="m-0">₹{setData.details.grossAmount}</p>
          </div>
          <div className="d-flex justify-content-between">
            <h6 className="m-0">Deductions</h6>
            <p className="m-0">₹{setData.details.deductions}</p>
          </div>
          <div className="d-flex justify-content-between">
            <h6 className="m-0">Net Amount</h6>
            <p className="m-0">₹{setData.details.netAmount}</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div
          className="d-flex justify-content-between px-2 py-1"
          //   style={{ backgroundColor: "var(--bg-card)" }}
        >
          <button
            className={`tab-button w-100 text-center ${
              activeTab === "payments" ? "custom-border-color-blue" : ""
            }`}
            style={{
              borderBottom: activeTab === "payments" ? "1px solid" : "none",
            }}
            onClick={() => handleTabChange("payments")}
          >
            Payments
          </button>
          <button
            className={`tab-button w-100 text-center ${
              activeTab === "refunds" ? "custom-border-color-blue" : ""
            }`}
            style={{
              borderBottom: activeTab === "refunds" ? "1px solid" : "none",
            }}
            onClick={() => handleTabChange("refunds")}
          >
            Refunds
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "payments" && (
          <div
            className="d-flex flex-column  rounded-3 gap-2"
            // style={{ backgroundColor: "var(--bg-card)" }}
          >
            <div
              className="d-flex rounded justify-content-between px-2 py-2"
              style={{ backgroundColor: "var(--bg-card)" }}
            >
              <h6 className="m-0">Date</h6>
              <h6 className="m-0">Amount</h6>
            </div>
            {/* Example placeholder for payments data */}
            {setData.details.payments && setData.details.payments.length > 0 ? (
              setData.details.payments.map((payment, index) => (
                <div className="px-2">
                  <div key={index} className="d-flex justify-content-between">
                    <div className="d-flex flex-column gap-1">
                      <span> {payment.date}</span>
                      <span className="custom-text-gray custom-font-normal">
                        {" "}
                        Appointment #{payment.appointmentID}
                      </span>
                    </div>
                    <span>₹{payment.amount}</span>
                  </div>
                  <hr className="m-1" />
                </div>
              ))
            ) : (
              <p className="text-center pt-5">No refunds available.</p>
            )}
          </div>
        )}

        {activeTab === "refunds" && (
          <div
            className="d-flex flex-column   rounded-3 "
            // style={{ backgroundColor: "var(--bg-card)" }}
          >
            <div
              className="d-flex rounded justify-content-between px-2 py-2"
              style={{ backgroundColor: "var(--bg-card)" }}
            >
              <h6 className="m-0">Date</h6>
              <h6 className="m-0">Amount</h6>
            </div>
            {/* Example placeholder for refunds data */}
            {setData.refunds && setData.refunds.length > 0 ? (
              setData.refunds.map((refund, index) => (
                <div key={index} className="d-flex justify-content-between">
                  <span>Refund ID: {refund.id}</span>
                  <span>Amount: ₹{refund.amount}</span>
                </div>
              ))
            ) : (
              <p className="text-center pt-5">No refunds available.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SettlementDetails;
