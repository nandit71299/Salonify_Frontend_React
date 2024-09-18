import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Header from "../../Components/Header";
import "./RegisterBusinessDetails.css";
import CustomTextInput from "../../Components/CustomTextInput";
import RegisterFooter from "../../Components/RegisterFooter";
import CustomSwitch from "../../Components/CustomFormSwitch";
import validator from "validator";

export default function RegisterBusinessDetails({
  mode = "create",
  initialData = {},
  onSubmit,
}) {
  const [uploaderMessage, setUploaderMessage] = useState("+");
  const [imagePreview, setImagePreview] = useState(initialData.image || null);
  const [imageFileName, setImageFileName] = useState(""); // State to store file name
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

  const handleSwitchChange = () => setIsSwitchOn((prev) => !prev);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length) {
        const file = acceptedFiles[0];
        if (file instanceof File) {
          const reader = new FileReader();
          reader.onload = () => {
            setImagePreview(reader.result);
            setImageFileName(file.name); // Extract file name
            // Save base64 string and file name to sessionStorage
            sessionStorage.setItem("image", reader.result);
            sessionStorage.setItem("imageFileName", file.name);
          };
          reader.readAsDataURL(file);
        } else {
          setUploaderMessage("The selected file is not an image.");
        }
      } else {
        setUploaderMessage("No files were accepted.");
      }
    },
    onDropRejected: () =>
      setUploaderMessage("Sorry, you cannot upload this file"),
    accept: { "image/*": [] },
    maxFiles: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData);
  };

  const validateFormData = () => {
    const commonValidations = {
      image: Boolean(imagePreview),
      salonName: validator.isAlpha(formData.salonName),
      salonContact: validator.isMobilePhone(formData.contactNumber, "en-IN"),
      salonEmail: validator.isEmail(formData.email),
      description: validator.isAlphanumeric(formData.description),
      salonType:
        validator.isAlpha(formData.salonType, "en-US", { ignore: "'" }) &&
        formData.salonType !== "-",
      seats: validator.isNumeric(formData.noOfSeats),
      salonAddress: validator.isAlphanumeric(formData.address),
      gstRegistered: typeof isSwitchOn === "boolean",
    };

    const gstValidations = isSwitchOn
      ? {
          gstNumber: validator.isAlphanumeric(formData.gstNumber),
          legalName: validator.isAlphanumeric(formData.legalName),
          gstType: validator.isAlpha(formData.gstType),
        }
      : {};

    return {
      isValid:
        Object.values(commonValidations).every(Boolean) &&
        Object.values(gstValidations).every(Boolean),
      errors: {
        image: commonValidations.image ? null : "Please upload an image",
        salonName: commonValidations.salonName
          ? null
          : "Please enter a valid salon name",
        salonContact: commonValidations.salonContact
          ? null
          : "Please enter a valid mobile number",
        salonEmail: commonValidations.salonEmail
          ? null
          : "Please enter a valid email address",
        description: commonValidations.description
          ? null
          : "Please enter a valid description",
        seats: commonValidations.seats
          ? null
          : "Please enter a valid number of seats",
        salonAddress: commonValidations.salonAddress
          ? null
          : "Please enter a valid address",
        gstRegistered: commonValidations.gstRegistered
          ? null
          : "Please select GST registration status",
        gstNumber: isSwitchOn
          ? gstValidations.gstNumber
            ? null
            : "Please enter a valid GST number"
          : null,
        legalName: isSwitchOn
          ? gstValidations.legalName
            ? null
            : "Please enter a valid legal name"
          : null,
        gstType: isSwitchOn
          ? gstValidations.gstType
            ? null
            : "Please select a GST type"
          : null,
        salonType: commonValidations.salonType
          ? null
          : "Please select salon type",
      },
    };
  };

  useEffect(() => {
    if (mode === "create") {
      const savedData = {
        image: sessionStorage.getItem("image"),
        imageFileName: sessionStorage.getItem("imageFileName"), // Retrieve file name
        salonName: sessionStorage.getItem("salonName"),
        contactNumber: sessionStorage.getItem("salonContact"),
        email: sessionStorage.getItem("salonEmail"),
        description: sessionStorage.getItem("description"),
        salonType: sessionStorage.getItem("salonType"),
        noOfSeats: sessionStorage.getItem("seats"),
        address: sessionStorage.getItem("salonAddress"),
        gstRegistered: sessionStorage.getItem("gstRegistered") === "true",
        gstNumber: sessionStorage.getItem("gstNumber"),
        legalName: sessionStorage.getItem("legalName"),
        gstType: sessionStorage.getItem("gstType"),
      };

      console.log(savedData.salonType);

      if (savedData.image) setImagePreview(savedData.image);
      setImageFileName(savedData.imageFileName || ""); // Set file name
      setFormData((prev) => ({
        salonName: savedData.salonName || prev.salonName,
        contactNumber: savedData.contactNumber || prev.contactNumber,
        email: savedData.email || prev.email,
        description: savedData.description || prev.description,
        salonType: savedData.salonType || prev.salonType,
        noOfSeats: savedData.noOfSeats || prev.noOfSeats,
        address: savedData.address || prev.address,
        gstNumber: savedData.gstNumber || prev.gstNumber,
        legalName: savedData.legalName || prev.legalName,
        gstType: savedData.gstType || prev.gstType,
      }));
    }
  }, [mode]);

  useEffect(() => {
    if (mode === "create") {
      sessionStorage.setItem("image", imagePreview || "");
      sessionStorage.setItem("imageFileName", imageFileName || ""); // Save file name
      sessionStorage.setItem("salonName", formData.salonName);
      sessionStorage.setItem("salonContact", formData.contactNumber);
      sessionStorage.setItem("salonEmail", formData.email);
      sessionStorage.setItem("description", formData.description);
      sessionStorage.setItem("salonType", formData.salonType);
      sessionStorage.setItem("seats", formData.noOfSeats);
      sessionStorage.setItem("salonAddress", formData.address);
      sessionStorage.setItem("gstRegistered", isSwitchOn.toString());
      sessionStorage.setItem("gstNumber", formData.gstNumber);
      sessionStorage.setItem("legalName", formData.legalName);
      sessionStorage.setItem("gstType", formData.gstType);
    }
  }, [formData, isSwitchOn, imagePreview, imageFileName, mode]);
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
                  <i className="fa fa-trash fa-icon" aria-hidden="true"></i>
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
                type="number"
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
            type={"number"}
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
          validate={validateFormData}
          buttonText={mode === "create" ? "Next" : "Save"}
          path="/registersetpassword"
        />
      )}
    </div>
  );
}
