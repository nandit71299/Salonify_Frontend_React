import React, { useState } from "react";

import Header from "../../Components/Header";
import "./LoginPage.css";
import CustomTextInput from "../../Components/CustomTextInput";
import Footer from "../../Components/RegisterFooter";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="login-page-container">
      <Header backButton="true" heading="Login" />
      <div className="login-page-contents d-flex flex-column justify-content-center align-items-center">
        <h1>Salonify</h1>
        <p>Please enter Email address and Password</p>
        <form>
          <div
            className="row justify-content-center"
            style={{ textAlign: "start" }}
          >
            <div className="col-10">
              <CustomTextInput
                label="Email"
                required
                id="email"
                value={email}
                onChange={handleChange}
              />
              <CustomTextInput
                label="Password"
                required
                id="password"
                type="password" // Add type="password" for password input
                value={password}
                onChange={handleChange}
              />
            </div>
            <div className="text-end pe-5 pt-2 custom-font-small custom-font-bold custom-text-gray">
              Forgot Password?
            </div>
          </div>
        </form>
      </div>
      <Footer buttonText="Login" path="/dashboard" />
    </div>
  );
}
