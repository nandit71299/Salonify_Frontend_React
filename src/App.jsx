import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./assets/styles/global.css";
import Home from "./Pages/LoginRegistration/Home";
import "./assets/fonts/Metropolis-Black.otf";
import RegisterPersonalDetails from "./Pages/LoginRegistration/RegisterPersonalDetails";
import RegisterBusinessDetails from "./Pages/LoginRegistration/RegisterBusinessDetails";
import RegisterSetPassword from "./Pages/LoginRegistration/RegisterSetPassword";
import RegisterOtp from "./Pages/LoginRegistration/RegisterOtp";
import LoginPage from "./Pages/LoginRegistration/LoginPage";
import Dashboard from "./Pages/Dashboard/Dashboard";

import { NotificationProvider } from "./Context/NotificationContext"; // Import the provider
import Appointments from "./Pages/Appointments/Appointments";
import Payments from "./Pages/Payments/Payments";

const App = () => {
  return (
    <NotificationProvider>
      <div>
        <div className="mobile-view">
          <Router>
            <div className="app">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<RegisterPersonalDetails />} />
                <Route
                  path="/registerbusinessdetails"
                  element={<RegisterBusinessDetails />}
                />
                <Route
                  path="/registersetpassword"
                  element={<RegisterSetPassword />}
                />
                <Route path="/registerotp" element={<RegisterOtp />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/payments" element={<Payments />} />
              </Routes>
            </div>
          </Router>
        </div>
        <div className="desktop-view">
          <h1>This website looks better on a mobile device.</h1>
          <p>Please visit us from your phone for the best experience!</p>
        </div>
      </div>
    </NotificationProvider>
  );
};

export default App;
