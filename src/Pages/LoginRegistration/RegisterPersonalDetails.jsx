import React, { useState, useEffect } from "react";
import validator from "validator";

import Header from "../../Components/Header";
import CustomTextInput from "../../Components/CustomTextInput";

import "./RegisterPersonalDetails.css";
import RegisterFooter from "../../Components/RegisterFooter";

export default function RegisterPersonalDetails() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");
  const [personalContact, setPersonalContact] = useState("");

  useEffect(() => {
    const savedData = {
      firstName: sessionStorage.getItem("firstName"),
      lastName: sessionStorage.getItem("lastName"),
      personalEmail: sessionStorage.getItem("personalEmail"),
      personalContact: sessionStorage.getItem("personalContact"),
    };

    // Ensure valid values are used
    if (savedData.firstName) setFirstName(savedData.firstName);
    if (savedData.lastName) setLastName(savedData.lastName);
    if (savedData.personalEmail) setPersonalEmail(savedData.personalEmail);
    if (savedData.personalContact)
      setPersonalContact(savedData.personalContact);
  }, []);

  useEffect(() => {
    // Save data to sessionStorage whenever it changes
    sessionStorage.setItem("firstName", firstName);
    sessionStorage.setItem("lastName", lastName);
    sessionStorage.setItem("personalEmail", personalEmail);
    sessionStorage.setItem("personalContact", personalContact);
  }, [firstName, lastName, personalEmail, personalContact]);

  function validateForm() {
    const isFirstNameValid =
      validator.isAlpha(firstName) && validator.isLength(firstName, { min: 3 });
    const isLastNameValid =
      validator.isAlpha(lastName) && validator.isLength(lastName, { min: 3 });
    const isPersonalEmailValid = validator.isEmail(personalEmail);
    const isPersonalContactValid = validator.isMobilePhone(
      personalContact,
      "en-IN"
    );

    return {
      isValid:
        isFirstNameValid &&
        isLastNameValid &&
        isPersonalContactValid &&
        isPersonalEmailValid,
      // notificationMessage: null,
      errors: {
        firstName: isFirstNameValid ? null : "Please enter correct first name",
        lastName: isLastNameValid ? null : "Please enter correct last name",
        personalContact: isPersonalContactValid
          ? null
          : "Please enter correct personal contact number",
        personalEmail: isPersonalEmailValid
          ? null
          : "Please enter correct personal email address",
      },
    };
  }

  return (
    <div className="personal-details-page-container">
      <Header
        backButton={true}
        heading="Let's Get You Started"
        subText="Create a Salonify account to continue"
        // rightOption="Done"
      />
      <form>
        <div className="personal-details-form-container container">
          <div className="row">
            <div className="col-6">
              <CustomTextInput
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="col-6">
              <CustomTextInput
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <CustomTextInput
                label="Personal Email"
                value={personalEmail}
                onChange={(e) => setPersonalEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <CustomTextInput
                type="number"
                label="Personal Contact Number"
                value={personalContact}
                onChange={(e) => setPersonalContact(e.target.value)}
              />
            </div>
          </div>
        </div>
      </form>
      <div>
        <RegisterFooter
          buttonText="Next"
          path={"/registerbusinessdetails"}
          validate={validateForm}
          footerText="By signing up you agree to Salonify Terms of Use, to get email and update, and you acknowledge that you have read our Privacy Policy "
        />
      </div>
    </div>
  );
}
