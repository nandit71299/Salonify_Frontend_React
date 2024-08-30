import React from "react";

import Header from "../Components/Header";
import CustomTextInput from "../Components/CustomTextInput";
import NavigateBack from "../Components/NavigateBack";
import "./Register.css";
import RegisterFooter from "../Components/RegisterFooter";

export default function Register() {
  return (
    <div className="personal-details-page-container">
      <Header
        backButton={<NavigateBack />}
        heading="Let's get you started"
        subText="Create a Salonify account to continue"
        // rightOption="Done"
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
        <RegisterFooter buttonText="Next" path={"/register2"} />
      </div>
    </div>
  );
}
