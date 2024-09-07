import React from "react";
import "./AppointmentCard.css";

function AppointmentCard(props) {
  return (
    <div className="appointment-card-container">
      <hr />
      <div className="container appointment-card-content-container d-flex gap-3 justify-content-evenly align-items-center">
        <div className="icon">{props.customerName?.[0] || "N"}</div>
        <div className="d-flex flex-grow-1 flex-column justify-content-center align-items-start">
          <div className="custom-font-bold">
            {props.customerName || "Nandit Sareria"}
          </div>
          <div className="d-flex gap-2 align-items-center">
            <div className="custom-font-small m-0 ">
              Appointment No. {props.appointmentNo || "2739"}
            </div>
            <div className="m-0">•</div>
            <div className="custom-font-small m-0">
              {props.appointmentItemsCount || "2"} Items
            </div>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <div className="custom-font-small">
              Appointment time: {props.appointmentTime || "02:30 - 03:30"}
            </div>
          </div>
          <div className="d-flex pt-2 gap-2 align-items-center">
            <div className="bg-success custom-font-small text-white p-1 rounded">
              {props.paymentStatus || "Partially Paid"}
            </div>
            <div className="bg-primary custom-font-small text-white p-1 rounded">
              {props.appointmentStatus || "Scheduled"}
            </div>
          </div>
        </div>
        <div className="custom-font-normal fw-bold">
          ₹{props.appointmentAmount || 290.32}
        </div>
      </div>
    </div>
  );
}

export default AppointmentCard;
