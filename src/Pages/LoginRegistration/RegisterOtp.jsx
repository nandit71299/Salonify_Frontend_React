import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../Components/Header";
import OtpInput from "../../Components/OtpInput";
import Loader from "../../Components/Loader";
import { useNotification } from "../../Context/NotificationContext";
import "./RegisterOtp.css";
import { API_URLS } from "../../config/apiConfig";

function RegisterOtp() {
  const [loading, setLoading] = useState(false);
  const [otpDisabled, setOtpDisabled] = useState(false);
  const [otp, setOtp] = useState("");
  const [resendButton, setResendButton] = useState(true);
  const navigate = useNavigate();
  const { showNotification } = useNotification();

  const validateOtp = (otp) => {
    if (otp.length === 0) {
      return { isValid: false, errors: { otp: "Please enter OTP" } };
    }
    if (!/^\d+$/.test(otp)) {
      return { isValid: false, errors: { otp: "OTP must be numeric" } };
    }
    if (otp.length !== 5) {
      return { isValid: false, errors: { otp: "OTP must be 5 digits" } };
    }
    return { isValid: true, errors: { otp: null } };
  };

  const handleOtpComplete = async (otp) => {
    setOtp(otp);
    const validationResult = validateOtp(otp);

    if (validationResult.isValid) {
      setLoading(true);
      setOtpDisabled(true);

      try {
        const email = sessionStorage.getItem("personalEmail");
        const response = await axios.post(`${API_URLS.verifyUser}`, {
          email,
          otp,
        });

        if (response.data.success) {
          showNotification("OTP entered correctly! Please login.");
          navigate("/login");
        } else {
          const errorMessage = response.data.message || "Invalid OTP";
          setResendButton(true);
          showNotification(errorMessage);
        }
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          "An error occurred. Please try again.";
        showNotification(errorMessage, "danger");
      } finally {
        setLoading(false);
        setOtpDisabled(false);
      }
    } else {
      showNotification(validationResult.errors.otp, "danger");
    }
  };

  const resendOtp = async () => {
    const email = sessionStorage.getItem("personalEmail");
    try {
      const response = await axios.post(`${API_URLS.sendOtp}`, { email });
      if (response.data.success) {
        showNotification("OTP sent successfully.");
        setResendButton(false); // Disable resend button until OTP is used
      } else {
        showNotification("Error sending OTP");
      }
    } catch (error) {
      showNotification("An error occurred while sending OTP.", "danger");
    }
  };

  return (
    <div className="register-otp-page-container">
      {loading && <Loader />}
      <Header
        backButton={true}
        heading="Let's Get You Started"
        subText="Create a Salonify account to continue"
      />
      <div className="register-otp-page-content-container d-flex flex-column align-items-center justify-content-center">
        <h6>Email Verification</h6>
        <OtpInput
          length={5}
          onComplete={handleOtpComplete}
          disabled={otpDisabled}
        />
        {resendButton && (
          <button
            className="btn border p-0 py-1 px-2 btn-dark mt-5 custom-font-small"
            onClick={resendOtp}
          >
            Resend OTP
          </button>
        )}
      </div>
      <p className="custom-text-gray text-center custom-font-small">
        Please enter a 5-digit OTP
      </p>
    </div>
  );
}

export default RegisterOtp;
