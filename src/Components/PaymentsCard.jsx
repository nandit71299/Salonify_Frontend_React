import React from "react";

function PaymentsCard(props) {
  return (
    <div>
      <div className="pt-2 d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column">
          <div>
            <h6 className="m-0">{props.name || "Sareria Nandit"}</h6>
            <div className="d-flex align-items-center">
              <p className="custom-font-normal m-0">
                Appointment: {props.appointmentNo || "3423"} &nbsp;
              </p>
              <p className="m-0">•</p>
              <div className="custom-font-normal">
                &nbsp;{props.timeStamp || "05:05PM"}
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="fw-bold custom-font-normal">
            ₹{props.amount || 293.43}/-
          </div>
          <div
            //   className={`py-1 fw-bold  text-center custom-font-small rounded bg-success text-white`}>
            className={`py-1 fw-bold  text-center custom-font-small rounded bg-success text-white
               ${
                 props.status === "Failed"
                   ? "bg-danger"
                   : props.status === "Successful"
                   ? "bg-success"
                   : "bg-warning"
               }`}
          >
            {props.status || "Successful"}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default PaymentsCard;
