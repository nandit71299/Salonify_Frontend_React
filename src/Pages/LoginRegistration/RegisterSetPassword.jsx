import React, { useEffect, useState } from "react";

import "./RegisterSetPassword.css";
import Header from "../../Components/Header";
import RegisterFooter from "../../Components/RegisterFooter";
import CustomTextInput from "../../Components/CustomTextInput";
import validator from "validator";

export default function RegisterSetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    name === "confirmPassword" ? setConfirmPassword(value) : "";
    name === "password" ? setPassword(value) : "";
  };

  const validatePassword = () => {
    console.log(confirmPassword === password);
    const validate = {
      password: validator.isStrongPassword(password),
      confirmPassword: validator.isStrongPassword(confirmPassword),
    };

    return {
      isValid:
        validate.password &&
        validate.confirmPassword &&
        confirmPassword === password,
      errors: {
        password: validate.password ? null : "Please enter strong password",
        confirmPassword: validate.confirmPassword
          ? null
          : "Please enter strong confirm password",
        passwordMismatch:
          confirmPassword === password ? null : "Passwords should be same",
      },
    };
  };

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
          <CustomTextInput
            name={"password"}
            label="Password"
            type="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="col-10">
          <CustomTextInput
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={handleChange}
          />
        </div>
      </div>
      <RegisterFooter
        validate={validatePassword}
        path="/registerotp"
        buttonText="Next"
        footerText="By signing up you agree to Salonify Terms of Use, to get email and update, and you acknowledge that you have read our Privacy Policy "
      />
    </div>
  );
}
