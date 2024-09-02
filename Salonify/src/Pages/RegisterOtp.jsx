import React, { useRef, useState } from "react";
import Header from "../Components/Header";
import RegisterFooter from "../Components/RegisterFooter";
import OtpInput from "../Components/OtpInput";
import Loader from "../Components/Loader"; // Import the Loader component
import Notification from "../Components/Notification"; // Import the Notification component
import { mockApiCall } from "../utils/mockApi"; // Import the mock API function
import "./RegisterOtp.css";

function RegisterOtp() {
  const footerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [otpDisabled, setOtpDisabled] = useState(false);
  const [notification, setNotification] = useState(""); // State for notification

  const handleOtpComplete = async (otp) => {
    console.log("OTP is: ", otp);
    setLoading(true);
    setOtpDisabled(true);

    // Simulate API call
    await mockApiCall();

    setLoading(false);
    setOtpDisabled(false);

    // Show notification
    setNotification("OTP entered correctly!");

    // Trigger the button click in RegisterFooter
    if (footerRef.current) {
      footerRef.current.clickButton();
    }
  };

  return (
    <div className="register-otp-page-container">
      {loading && <Loader />} {/* Show loader when loading */}
      {notification && (
        <Notification
          message={notification}
          duration={3000} // Duration to show the notification (3 seconds)
          onClose={() => setNotification("")} // Clear notification after it disappears
        />
      )}
      <Header
        backButton={true}
        rightOption="Done"
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
      </div>
      <RegisterFooter ref={footerRef} buttonText="Verify" path={"/login"} />
    </div>
  );
}

export default RegisterOtp;
