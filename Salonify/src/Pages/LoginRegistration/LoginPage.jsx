import React from "react";

import Header from "../../Components/Header";
import "./LoginPage.css";
import CustomTextInput from "../../Components/CustomTextInput";
import Footer from "../../Components/RegisterFooter";
export default function LoginPage() {
  return (
    <div className="login-page-container">
      <Header backButton="true" heading="Login" />
      <div className="login-page-contents d-flex flex-column justify-content-center align-items-center">
        <h1>Salonify</h1>
        <p>Please enter Email address and Password</p>
        <div
          className="row justify-content-center"
          style={{ textAlign: "start" }}
        >
          <div className="col-10">
            <CustomTextInput label="Email" />
            <CustomTextInput label="Password" />
          </div>
          <div className="text-end pe-5 pt-2 custom-font-small custom-font-bold custom-text-gray">
            Forgot Password?
          </div>
        </div>
      </div>
      <Footer buttonText="Login" path="/dashboard" />
    </div>
  );
}
