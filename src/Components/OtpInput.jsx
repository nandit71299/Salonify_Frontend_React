import React, { useRef, useState } from "react";
import "./OtpInput.css";
import { useNotification } from "../Context/NotificationContext";

function OtpInput({ length, onComplete, disabled, validateOtp }) {
  const { showNotification } = useNotification();
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleOtpInputChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== "" && index < length - 1) {
        inputRefs.current[index + 1].focus();
      }
      if (newOtp.every((digit) => digit !== "")) {
        const otpString = newOtp.join("");
        const validationResult = validateOtp
          ? validateOtp(otpString)
          : { isValid: true, errors: { otp: null } };
        if (validationResult.isValid) {
          onComplete(otpString);
        } else {
          showNotification(validationResult.errors.otp, "danger");
        }
      }
    }
  };

  function handleKeyDown(e, index) {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  }

  return (
    <div className="otp-input-container">
      {otp.map((_, index) => (
        <input
          key={index}
          type="text"
          ref={(element) => {
            inputRefs.current[index] = element;
          }}
          className="otp-input"
          onKeyDown={(e) => handleKeyDown(e, index)}
          maxLength={1}
          onChange={(e) => handleOtpInputChange(e, index)}
          disabled={disabled}
          pattern="\d*"
          inputMode="numeric"
        />
      ))}
    </div>
  );
}

export default OtpInput;
