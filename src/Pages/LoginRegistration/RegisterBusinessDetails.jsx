import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

import Header from "../../Components/Header";
import "./RegisterBusinessDetails.css";
import CustomTextInput from "../../Components/CustomTextInput";
import RegisterFooter from "../../Components/RegisterFooter";
import CustomSwitch from "../../Components/CustomFormSwitch";

export default function RegisterBusinessDetails({
  mode = "create", // mode: "create" or "edit"
  initialData = {},
  onSubmit,
}) {
  const [uploaderMessage, setUploaderMessage] = useState("+");
  const [imagePreview, setImagePreview] = useState(initialData.image || null);
  const [isSwitchOn, setIsSwitchOn] = useState(
    initialData.gstRegistered || false
  );
  const [formData, setFormData] = useState({
    salonName: initialData.salonName || "",
    contactNumber: initialData.contactNumber || "",
    email: initialData.email || "",
    description: initialData.description || "",
    salonType: initialData.salonType || "-",
    noOfSeats: initialData.noOfSeats || "",
    address: initialData.address || "",
    gstNumber: initialData.gstNumber || "",
    legalName: initialData.legalName || "",
    gstType: initialData.gstType || "-",
  });

  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  function onDrop(acceptedFiles) {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      if (file instanceof File) {
        const reader = new FileReader();
        reader.onload = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file); // Corrected method call
      } else {
        setUploaderMessage("The selected file is not an image file.");
      }
    } else {
      setUploaderMessage("No files were accepted.");
    }
  }

  function onDropRejected() {
    setUploaderMessage("Sorry, you cannot upload this file");
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDropRejected,
    accept: { "image/*": [] },
    maxFiles: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="register-business-details-page-container">
      <Header
        backButton={true}
        heading={
          mode === "create" ? "Let's Get You Started" : "Edit Business Details"
        }
        subText={
          mode === "create" ? "Create a Salonify account to continue" : ""
        }
        rightOption={mode === "edit" ? "Done" : <></>}
      />
      <div className="container d-flex flex-column justify-content-center align-items-center register-business-details-content-container">
        <div className="register-image-dropper-wrapper">
          <div
            style={{ alignSelf: "flex-start" }}
            className="py-2 custom-font-bold"
          >
            Image{" "}
            <span className="custom-font-small custom-text-gray">
              (to be displayed in customer app)
            </span>
          </div>
          <div className="register-image-dropper" {...getRootProps()}>
            <input {...getInputProps()} />
            {imagePreview ? (
              <div className="salon-register-image-preview">
                <img src={imagePreview} alt="Preview" />
                <button onClick={() => setImagePreview(null)} className="btn">
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
            ) : (
              <div className="salon-register-image-preview">
                <p className="m-0">{uploaderMessage}</p>
              </div>
            )}
          </div>
        </div>
        <div className="container">
          <div className="py-2 custom-font-bold">Business Details</div>
          <CustomTextInput
            label="Salon Name"
            name="salonName"
            value={formData.salonName}
            onChange={handleInputChange}
          />
          <div className="row">
            <div className="col-6">
              <CustomTextInput
                label="Salon Contact Number"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-6">
              <CustomTextInput
                label="Salon Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="custom-font-bold custom-font-small custom-text-blue py-2">
            Description
          </div>
          <textarea
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
          <div className="py-2 custom-text-blue custom-font-small custom-font-bold">
            Salon Type
            <select
              name="salonType"
              id="salonType"
              className="form-control my-1"
              value={formData.salonType}
              onChange={handleInputChange}
            >
              <option value="-">-</option>
              <option value="Men's">Men's</option>
              <option value="Women's">Women's</option>
              <option value="Unisex">Unisex</option>
            </select>
          </div>
          <CustomTextInput
            label="No. of Seats"
            name="noOfSeats"
            value={formData.noOfSeats}
            onChange={handleInputChange}
          />
          <CustomTextInput
            label="Salon Address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          <div className="d-flex justify-content-between pt-3">
            <p>Is Salon GST Registered? </p>
            <CustomSwitch
              id="switch1"
              checked={isSwitchOn}
              onChange={handleSwitchChange}
            />
          </div>
          {isSwitchOn && (
            <>
              <CustomTextInput
                label="GST Registration Number"
                name="gstNumber"
                value={formData.gstNumber}
                onChange={handleInputChange}
              />
              <CustomTextInput
                label="Legal Business Name"
                name="legalName"
                value={formData.legalName}
                onChange={handleInputChange}
              />
              <div className="py-2 custom-text-blue custom-font-small custom-font-bold">
                GST Registration Type
                <select
                  name="gstType"
                  id="gstType"
                  className="form-control my-1"
                  value={formData.gstType}
                  onChange={handleInputChange}
                >
                  <option value="-">-</option>
                  <option value="Sole Proprietorship">
                    Sole Proprietorship
                  </option>
                  <option value="Partnership">Partnership</option>
                  <option value="LLP">LLP</option>
                </select>
              </div>
            </>
          )}
        </div>
      </div>
      {mode === "create" && (
        <RegisterFooter
          buttonText={mode === "create" ? "Next" : "Save"}
          onClick={handleSubmit}
          path="/registersetpassword"
        />
      )}
    </div>
  );
}
