import React, { useState } from "react";
import "./Dashboard.css";
import avatar from "../../assets/user-avatar.png";
import bulb from "../../assets/bulb.png";
import hamburger from "../../assets/hamburger.png";
import AnalyticsCard from "../../Components/AnalyticsCard";
import SalesCard from "../../Components/SalesCard";
import MostBookedCard from "../../Components/MostBookedCard";
import DashboardFooter from "../../Components/DashboardFooter";

function Dashboard(props) {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="dashboard-page-container pt-3 pb-5">
      <div className="container mb-5">
        <div className="dashboard-page-header d-flex gap-3 p-1 justify-content-center align-items-center">
          <div className="dashboard-user-icon">
            <img src={avatar} alt="" />
          </div>
          <div className="dashboard-user-name flex-grow-1 d-flex flex-column">
            <h4 className="custom-font-large m-0">
              {props.userName || "Nandit"}
            </h4>
            <h6 className="custom-text-gray custom-font-normal m-0">
              {props.salonName || "Bonanza"}
            </h6>
          </div>
          <div className="dashboard-switch-branch-button">
            <button className="btn custom-font-bold p-0 custom-font-small custom-text-blue">
              Switch Branch
            </button>
          </div>
        </div>
        {showBanner && (
          <div className="custom-bg-light-blue d-flex flex-column rounded px-2 my-3 justify-content-end align-items-end">
            <div className="dashboard-cross-icon">
              <button
                className="btn m-0 pb-0 pt-1 p-0 pe-1"
                style={{ justifySelf: "end" }}
                onClick={() => setShowBanner(false)}
              >
                <i
                  className="fa-solid fa-xmark m-0 p-0"
                  style={{ color: "white" }}
                ></i>
              </button>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <div className="p-0 m-0">
                <i
                  className="fa-solid fa-lightbulb fa-lg"
                  style={{ color: " #FFD43B" }}
                ></i>
              </div>
              <div className="flex-grow-1">
                <h6 className="custom-font-large text-white m-0">
                  Maximize your salon's potential with our platform offers.
                </h6>
              </div>
            </div>
            <div className="dashboard-banner-view-button">
              <button className="btn custom-font-bold custom-font-medium  text-white btn m-0 pb-0 pt-1 p-0 pe-1 pb-2">
                View
              </button>
            </div>
          </div>
        )}

        <div
          className={
            "dashboard-horizontal-menu d-flex gap-3 overflow-x-scroll " +
            (!showBanner ? "pt-3" : "")
          }
        >
          <div className="d-flex border custom-bg-gray border-secondary rounded-3 gap-2 p-1 justify-content-center align-items-center">
            <button className="d-flex gap-2 justity-content-center btn align-items-center p-0">
              <div>
                <img src={hamburger} alt="" />
              </div>
              <p className="m-0 custom-font-normal">Appointments</p>
            </button>
          </div>
          <div className="d-flex border custom-bg-gray border-secondary rounded-3 gap-2 p-1 justify-content-center align-items-center">
            <button className="d-flex gap-2 justity-content-center btn align-items-center p-0">
              <div>
                <img src={hamburger} alt="" />
              </div>
              <p className="m-0 custom-font-normal">Services</p>
            </button>
          </div>
          <div className="d-flex border custom-bg-gray border-secondary rounded-3 gap-2 p-1 justify-content-center align-items-center">
            <button className="d-flex gap-2 justity-content-center btn align-items-center p-0">
              <div>
                <img src={hamburger} alt="" />
              </div>
              <p className="m-0 custom-font-normal">Payments</p>
            </button>
          </div>
        </div>
        <div>
          <AnalyticsCard />
          <SalesCard />
          <MostBookedCard />
        </div>
      </div>
      <DashboardFooter />
    </div>
  );
}

export default Dashboard;
