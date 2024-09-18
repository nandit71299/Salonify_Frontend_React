import React, { useState } from "react";
import Header from "../../Components/Header";
import RegisterFooter from "../../Components/RegisterFooter";
import CustomTextInput from "../../Components/CustomTextInput";
import validator from "validator";
import { useNotification } from "../../Context/NotificationContext";
import Loader from "../../Components/Loader";
import axios from "axios";
import { API_URLS } from "../../config/apiConfig";
import { useNavigate } from "react-router-dom";

// Utility function to extract MIME type and base64 data from data URL
function extractMimeTypeAndBuffer(dataUrl) {
  if (!dataUrl || !dataUrl.startsWith("data:")) {
    throw new Error("Invalid data URL");
  }
  const [header, base64Data] = dataUrl.split(";base64,");
  const mimeType = header.replace("data:", "");
  return { mimeType, base64Buffer: base64Data };
}

export default function RegisterSetPassword() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { showNotification } = useNotification();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "confirmPassword") setConfirmPassword(value);
    if (name === "password") setPassword(value);
  };

  const validatePassword = () => {
    return {
      isValid:
        validator.isStrongPassword(password) &&
        validator.isStrongPassword(confirmPassword) &&
        confirmPassword === password,
      errors: {
        password: validator.isStrongPassword(password)
          ? null
          : "Please enter a strong password",
        confirmPassword: validator.isStrongPassword(confirmPassword)
          ? null
          : "Please enter a strong confirm password",
        passwordMismatch:
          confirmPassword === password ? null : "Passwords should be the same",
      },
    };
  };

  const submitForm = async () => {
    const validationResult = validatePassword();

    if (!validationResult.isValid) {
      const errors = Object.values(validationResult.errors).filter(Boolean);
      errors.forEach((message, index) => {
        setTimeout(() => {
          showNotification(message, "danger");
        }, index * 2000);
      });
      return;
    }

    let imageFileData = null;
    const imageDataUrl = sessionStorage.getItem("image");
    const imageFileName = sessionStorage.getItem("imageFileName"); // Retrieve the file name

    if (imageDataUrl) {
      console.log(imageFileName);
      try {
        const { mimeType, base64Buffer } =
          extractMimeTypeAndBuffer(imageDataUrl);
        imageFileData = {
          mimetype: mimeType,
          buffer: base64Buffer,
          originalName: imageFileName, // Include the file name
        };
      } catch (error) {
        showNotification("Invalid image format", "danger");
        return;
      }
    }

    const sessionData = {
      description: sessionStorage.getItem("description"),
      gstNumber: sessionStorage.getItem("gstNumber"),
      gstRegistered: sessionStorage.getItem("gstRegistered"),
      gstType: sessionStorage.getItem("gstType"),
      file: imageFileData, // Add the image file data here
      legalName: sessionStorage.getItem("legalName"),
      contact_number: sessionStorage.getItem("personalContact"),
      email: sessionStorage.getItem("personalEmail"),
      salonAddress: sessionStorage.getItem("salonAddress"),
      phoneNumber: sessionStorage.getItem("salonContact"),
      salonEmail: sessionStorage.getItem("salonEmail"),
      salonName: sessionStorage.getItem("salonName"),
      type: sessionStorage.getItem("salonType"),
      seats: sessionStorage.getItem("seats"),
      personalName:
        sessionStorage.getItem("firstName") +
        " " +
        sessionStorage.getItem("lastName"),
    };

    try {
      setLoading(true);
      const response = await axios.post(`${API_URLS.registerSalon}`, {
        ...sessionData,
        password,
        confirmPassword,
      });

      if (response.data.success) {
        showNotification(
          "Account created successfully! Please enter OTP we sent to your email to verify."
        );
        navigate("/registerotp");
      } else {
        showNotification(response.data.message, "danger");
      }
    } catch (error) {
      showNotification(
        error.response?.data?.message || "Please try again.",
        "danger"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-set-password-page-container">
      {loading && <Loader />}
      <Header
        backButton={true}
        heading="Let's Get You Started"
        subText="Create a Salonify account to continue"
      />
      <div className="container register-set-password-page-content-container d-flex flex-column justify-content-center align-items-center">
        <h6 className="align-self-center pb-4">Create Your Password</h6>
        <div className="col-10">
          <CustomTextInput
            name="password"
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
        onSubmit={submitForm}
        buttonText="Next"
        footerText="By signing up you agree to Salonify Terms of Use, to get email updates, and acknowledge that you have read our Privacy Policy"
      />
    </div>
  );
}
