import React from "react";

import "./RegisterSetPassword.css";
import Header from "../Components/Header";
import RegisterFooter from "../Components/RegisterFooter";
import CustomTextInput from "../Components/CustomTextInput";

export default function RegisterSetPassword() {
  return (
    <div className="register-set-password-page-container">
      <Header
        backButton={true}
        heading="Let's Get You Started"
        subText="Create a Salonify account to continue"
      />
      <div className="container register-set-password-page-content-container d-flex flex-column justify-content-center align-items-center">
        <h6 className="align-self-center pb-4">Create Your Password</h6>
        <div className="col-10">
          <CustomTextInput label="Password" />
        </div>
        <div className="col-10">
          <CustomTextInput label="Confirm Password" />
        </div>
      </div>
      <RegisterFooter
        path="/registerotp"
        buttonText="Next"
        footerText="By signing up you agree to Salonify Terms of Use, to get email and update, and you acknowledge that you have read our Privacy Policy "
      />
    </div>
  );
}
