import React, { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext"; // Import useAuth
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "../../Components/Header";
import Filters from "../../Components/Filters";
import AppointmentCard from "../../Components/AppointmentCard";
import DashboardFooter from "../../Components/DashboardFooter";

function Appointments(props) {
  const [showFilters, setShowFilters] = useState(false);
  const { isAuthenticated } = useAuth(); // Get authentication status
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    console.log("Checking authentication in Appointments:", isAuthenticated);
    if (!isAuthenticated) {
      console.log("HERE IN NOT AUTHENTICATED");
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (showFilters) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Clean up class on component unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showFilters]);

  const data = Array.from({ length: 10 }, (_, index) => index);

  function openFilters() {
    setShowFilters(true);
  }

  function closeFilters() {
    setShowFilters(false);
  }

  function handleInnerClick(e) {
    e.stopPropagation();
  }

  console.log("HERE IN APPOINTMENT");

  return (
    <div
      className="appointments-page-container pb-5"
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
            <i className="fa-solid fa-filter fa-icon"></i>
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
