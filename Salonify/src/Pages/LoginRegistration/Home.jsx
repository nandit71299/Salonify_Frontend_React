import React from "react";
import { useNavigate, Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <div className="home-container d-flex flex-column  justify-content-between align-items-center">
      <div className="logo-container text-center">
        <div className="logo display-4">Salonify</div>
        <div>
          <p className="custom-font-bold">Let's get you started</p>
        </div>
      </div>
      <div className="button-container">
        <Link to="/login">
          <button className="login btn btn-dark rounded-5 custom-font-smaller">
            I already have Salonify account
          </button>
        </Link>
        <Link to="/register">
          <button className="register btn btn-white border border-black rounded-5 custom-font-smaller">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
