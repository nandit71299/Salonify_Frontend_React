import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/styles/global.css";
import Home from "./Pages/LoginRegistration/Home";
import "./assets/fonts/Metropolis-Black.otf";
import RegisterPersonalDetails from "./Pages/LoginRegistration/RegisterPersonalDetails";
import RegisterBusinessDetails from "./Pages/LoginRegistration/RegisterBusinessDetails";
import RegisterSetPassword from "./Pages/LoginRegistration/RegisterSetPassword";
import RegisterOtp from "./Pages/LoginRegistration/RegisterOtp";
import LoginPage from "./Pages/LoginRegistration/LoginPage";
import Dashboard from "./Pages/Dashboard/Dashboard";

import { NotificationProvider } from "./Context/NotificationContext";
import Appointments from "./Pages/Appointments/Appointments";
import Payments from "./Pages/Payments/Payments";
import Profile from "./Pages/Profile/Profile";
import EditProfile from "./Pages/Profile/EditProfile";
import SalonDetails from "./Pages/Profile/SalonDetails";
import BusinessHours from "./Pages/Profile/BusinessHours";
import GstRateSetup from "./Pages/Profile/GstRateSetup";
import Holidays from "./Pages/Profile/Holidays";
import AddEditHoliday from "./Pages/Profile/AddEditHoliday";
import Settlements from "./Pages/Settlements/Settlements";
import SettlementDetails from "./Pages/Settlements/SettlementDetails";

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
                  element={<RegisterBusinessDetails mode="create" />}
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
                <Route path="/profile" element={<Profile />} />
                <Route path="/edit-profile" element={<EditProfile />} />
                <Route path="/salon-details" element={<SalonDetails />} />
                <Route path="/business-hours" element={<BusinessHours />} />
                <Route path="/gst-rate" element={<GstRateSetup />} />
                <Route path="/holidays" element={<Holidays />} />
                <Route
                  path="/edit-holiday/:id"
                  element={<AddEditHoliday mode="edit" />}
                />
                <Route
                  path="/add-holiday/"
                  element={<AddEditHoliday mode="create" />}
                />
                <Route path="/settlements" element={<Settlements />} />
                <Route
                  path="/settlement-details/:id"
                  element={<SettlementDetails />}
                />
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
