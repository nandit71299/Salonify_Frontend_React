import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./assets/styles/global.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import "./assets/fonts/Metropolis-Black.otf";
import RegisterPersonalDetails from "./Pages/RegisterPersonalDetails";
import RegisterBusinessDetails from "./Pages/RegisterBusinessDetails";

const App = () => {
  return (
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
            </Routes>
          </div>
        </Router>
      </div>
      <div className="desktop-view">
        <h1>This website looks better on a mobile device.</h1>
        <p>Please visit us from your phone for the best experience!</p>
      </div>
    </div>
  );
};

export default App;
