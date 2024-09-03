import React, { useRef, useState } from "react";
import "./OtpInput.css"; // Ensure this CSS file is created and linked

function OtpInput({ length, onComplete, disabled }) {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleOtpInputChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== "" && index < length - 1) {
        inputRefs.current[index + 1].focus();
      }
      if (newOtp.every((digit) => digit !== "")) {
        onComplete(newOtp.join(""));
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
        />
      ))}
    </div>
  );
}

export default OtpInput;
