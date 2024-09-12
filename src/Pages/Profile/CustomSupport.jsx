import React from "react";
import Header from "../../Components/Header";
import { Link } from "react-router-dom";

function CustomSupport() {
  return (
    <div className="custom-support-container">
      <Header heading="Customer Support" backButton />
      <div className="d-flex flex-column" style={{ minHeight: "90vh" }}>
        <div className="container flex-grow-1 d-flex flex-column gap-3">
          <div className="d-flex flex-column gap-3">
            <div>
              <select
                name="concern"
                id="concern"
                className="w-100 px-1 py-2 rounded border"
                defaultValue={"Concern"}
              >
                <option value="Concern">Concern</option>
                <option value="Appointment">Appointment</option>
                <option value="Payment">Payment</option>
                <option value="Settlement">Settlement</option>
                <option value="Complaints">Complaints</option>
              </select>
            </div>
            <div>
              <select
                name="ID"
                id="ID"
                className="w-100 px-1 py-2 rounded border"
              >
                <option value="-">Appointment / Settlement</option>
                <option value="app_1">Appointment #1</option>
                <option value="app_2">Appointment #2</option>
                <option value="app_3">Appointment #3</option>
                <option value="app_4">Appointment #4</option>
                <option value="set_1">Settlement #1</option>
                <option value="set_2">Settlement #2</option>
                <option value="set_3">Settlement #3</option>
              </select>
            </div>
            <textarea
              name="message"
              id="message"
              className="px-2 py-2 form-group border rounded"
              placeholder="Enter your message here"
              rows={5}
            ></textarea>
          </div>
        </div>
        <div className="d-flex justify-content-end p-3">
          <Link className="w-100" to={"/support-req-submitted"}>
            <button className="btn btn-primary w-100 py-2">Submit</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CustomSupport;
