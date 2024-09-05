import React from "react";

function Filters(props) {
  return (
    <div
      style={{
        minHeight: "100vh",
        maxHeight: "100vh",
        maxWidth: "100vw",
        width: "100vw",
        backgroundColor: "rgba(120, 120, 120, 0.8)",
        position: "fixed",
        backdropFilter: "blur(2px)",
        zIndex: 1,
      }}
      className="d-flex flex-column justify-content-end pb-3 p-3 align-items-center"
      onClick={props.closeFilters}
    >
      <div
        className="bg-white container border w-100 d-flex justify-content-center rounded"
        onClick={props.handleInnerClick}
      >
        <div className="d-flex gap-2 pb-3 flex-column w-100 justify-content-center align-items-center">
          <div
            className="border w-25 mt-3 mb-3 border-black"
            onClick={props.closeFilters}
            role="button"
          ></div>
          <div className="w-100 custom-font-normal">Filter By</div>
          <div className="d-flex w-100 align-items-center">
            <h6 className="flex-grow-1 m-0">Booking Start Time</h6>
            <select
              name="bookingStartTime"
              id="bookingStartTime"
              className="p-2 rounded-3"
            >
              <option value="scheduled">Earliest First</option>
              <option value="cancelled">Earliest Last</option>
            </select>
          </div>
          <div className="d-flex w-100 align-items-center">
            <h6 className="flex-grow-1 m-0">Appointment Status</h6>
            <select
              name="appointmentStatusOptions"
              id="appointmentStatusOptions"
              className="p-2 rounded-3"
            >
              <option value="scheduled">Scheduled</option>
              <option value="cancelled">Cancelled</option>
              <option value="partially-paid">Partially Paid</option>
            </select>
          </div>
          <button
            onClick={props.closeFilters}
            className="btn btn-custom-blue text-white custom-font-large w-100"
          >
            Refine Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filters;
