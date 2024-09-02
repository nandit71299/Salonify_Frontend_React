import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

import Header from "../Components/Header";
import "./RegisterBusinessDetails.css";
import CustomTextInput from "../Components/CustomTextInput";
import RegisterFooter from "../Components/RegisterFooter";
import CustomSwitch from "../Components/CustomFormSwitch";

export default function RegisterBusinessDetails() {
  const [uploaderMessage, setUploaderMessage] = useState("+");
  const [imagePreview, setImagePreview] = useState(null);

  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn);
  };
  const [isSwitchOn, setIsSwitchOn] = useState(false);

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

  return (
    <div className="register-business-details-page-container">
      <Header
        backButton={true}
        heading="Let's Get You Started"
        subText="Create a Salonify account to continue"
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
          <CustomTextInput label="Salon Name" />
          <div className="row">
            <div className="col-6">
              <CustomTextInput label="Salon Contact Number" />
            </div>{" "}
            <div className="col-6">
              <CustomTextInput label="Salon Email" />
            </div>
          </div>
          <div className="custom-font-bold custom-font-small custom-text-blue py-2">
            Description
          </div>
          <textarea className="form-control"></textarea>
          <div className="py-2 custom-text-blue custom-font-small custom-font-bold">
            Salon Type
            <select
              name="salonType"
              id="salonType"
              className="form-control my-1"
            >
              <option value="-">-</option>
              <option value="Select">Men's</option>
              <option value="Selected">Women's</option>
              <option value="Selected">Unisex</option>
            </select>
          </div>
          <CustomTextInput label="No. of Seats" />
          <CustomTextInput label="Salon Address" />
          <div className="d-flex justify-content-between pt-3">
            <p>Is Salon GST Registered? </p>
            <CustomSwitch
              id="switch1"
              checked={isSwitchOn}
              onChange={handleSwitchChange}
            />
          </div>
          {isSwitchOn && <CustomTextInput label="GST Registration Number" />}
          {isSwitchOn && <CustomTextInput label="Legal Business Name" />}
          {isSwitchOn && (
            <div className="py-2 custom-text-blue custom-font-small custom-font-bold">
              GST Registration Type
              <select
                name="gstRegistrationType"
                id="gstRegistrationType"
                className="form-control my-1"
              >
                <option value="-">-</option>
                <option value="Sole Proprietership">Men's</option>
                <option value="Partnership">Women's</option>
                <option value="LLP">Unisex</option>
              </select>
            </div>
          )}
        </div>
      </div>
      <RegisterFooter buttonText="Next" path={"/registersetpassword"} />
    </div>
  );
}
