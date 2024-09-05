import React, { useState } from "react";
import Header from "../../Components/Header";
import Filters from "../../Components/Filters";
import AppointmentCard from "../../Components/AppointmentCard";
import DashboardFooter from "../../Components/DashboardFooter";

function Appointments(props) {
  const [showFilters, setShowFilters] = useState(false); // Initially hide the filters

  const data = Array.from({ length: 10 }, (_, index) => index);

  console.log(data);
  function openFilters() {
    setShowFilters(true);
  }

  function closeFilters() {
    setShowFilters(false);
  }

  function handleInnerClick(e) {
    e.stopPropagation();
  }

  return (
    <div
      className=" appointments-page-container pb-5"
      style={{ position: "relative" }}
    >
      {showFilters && (
        <Filters
          closeFilters={closeFilters}
          handleInnerClick={handleInnerClick}
        />
      )}
      <Header heading="Appointments" subText="Bonanza" />
      <div className="container pb-5 appointments-page-content-container">
        <div className="custom-font-normal">
          Total Appointments: {props.totalAppointments || 219}
        </div>
        <div className="pt-2 d-flex justify-content-between align-items-center">
          <div className="custom-font-bold">Today</div>
          <button className="btn m-0 p-0" onClick={openFilters}>
            <i className="fa-solid fa-filter"></i>
          </button>
        </div>
        {data.map((data, index) => {
          return (
            <div key={index}>
              <AppointmentCard />
            </div>
          );
        })}
      </div>
      <DashboardFooter />
    </div>
  );
}

export default Appointments;
