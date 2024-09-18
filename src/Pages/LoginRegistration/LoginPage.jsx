import React, { useState, useRef } from "react";
import Header from "../../Components/Header";
import "./LoginPage.css";
import CustomTextInput from "../../Components/CustomTextInput";
import RegisterFooter from "../../Components/RegisterFooter";
import axios from "axios";
import { API_URLS } from "../../config/apiConfig";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useNotification } from "../../Context/NotificationContext";
import { useAuth } from "../../Context/AuthContext"; // Import useAuth

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const footerRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate
  const { showNotification } = useNotification(); // Use Notification Context
  const { login } = useAuth(); // Get the login function from AuthContext

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  const validateForm = () => {
    const isEmailValid = email.includes("@");
    const isPasswordValid = password.length >= 6;

    const validationResult = {
      isValid: isEmailValid && isPasswordValid,
      errors: {
        email: isEmailValid
          ? null
          : "Email is required and must be a valid email address.",
        password: isPasswordValid
          ? null
          : "Password must be at least 6 characters long.",
      },
    };

    return validationResult;
  };

  const handleSubmit = async () => {
    const validationResult = validateForm();

    if (validationResult.isValid) {
      try {
        const response = await axios.post(`${API_URLS.salonLogin}`, {
          email,
          password,
        });

        if (response.data.success) {
          // Handle successful login
          showNotification(response.data.message || "Successfully logged in");

          // Use the login method from AuthContext
          login(response.data.userData, response.data.token); // Assuming userData is returned

          return true;
        } else {
          // Handle failed login
          showNotification(
            response.data.message || "Invalid credentials",
            "danger"
          );
          return false;
        }
      } catch (error) {
        // Handle different types of errors
        if (error.response) {
          const errorMessage =
            error.response.data.message ||
            "An error occurred. Please try again.";
          showNotification(errorMessage, "danger");
        } else if (error.request) {
          showNotification(
            "No response received from server. Please try again.",
            "danger"
          );
        } else {
          showNotification(
            "Error in setting up the request. Please try again.",
            "danger"
          );
        }
        return false;
      }
    } else {
      return false;
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
                type="password"
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
      <RegisterFooter
        ref={footerRef}
        buttonText="Login"
        path="/dashboard"
        validate={validateForm}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
