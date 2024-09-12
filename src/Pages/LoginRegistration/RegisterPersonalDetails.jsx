import React from "react";

import Header from "../../Components/Header";
import CustomTextInput from "../../Components/CustomTextInput";

import "./RegisterPersonalDetails.css";
import RegisterFooter from "../../Components/RegisterFooter";

export default function RegisterPersonalDetails() {
  return (
    <div className="personal-details-page-container">
      <Header
        backButton={true}
        heading="Let's Get You Started"
        subText="Create a Salonify account to continue"
        rightOption="Done"
      />
      <div className="personal-details-form-container container">
        <div className="row">
          <div className="col-6">
            <CustomTextInput label="First Name" />
          </div>
          <div className="col-6">
            <CustomTextInput label="Last Name" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <CustomTextInput label="Personal Email" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <CustomTextInput label="Personal Contact Number" />
          </div>
        </div>
      </div>
      <div>
        <RegisterFooter
          buttonText="Next"
          path={"/registerbusinessdetails"}
          footerText="By signing up you agree to Salonify Terms of Use, to get email and update, and you acknowledge that you have read our Privacy Policy "
        />
      </div>
    </div>
  );
}
