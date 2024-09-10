import React, { useState } from "react";
import CustomTextInput from "../../Components/CustomTextInput";
import Header from "../../Components/Header";

function EditProfile(props) {
  const [firstName, setFirstName] = useState("Sareria");
  const [lastName, setLastName] = useState("Nandit");

  const handleFirstNameChange = (e) => {
    const { value } = e.target;
    setFirstName(value);
  };

  const handleLastNameChange = (e) => {
    const { value } = e.target;
    setLastName(value);
  };

  return (
    <div className="edit-profile-page-main-container">
      <Header
        backButton="true"
        heading="Edit Profile"
        subText="Bonanza"
        rightOption="Done"
      />
      <div className="pt-3 profile-page-content-container container">
        <h6 className="heading">Personal Details</h6>
        <div className="row">
          <div className="col-6">
            <CustomTextInput
              label="First Name"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="col-6">
            <CustomTextInput
              label="Last Name"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <CustomTextInput
                  label="Personal Email"
                  value="nanditsareria@gmail.com"
                  disabled
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <CustomTextInput
                  label="Personal Contact Number"
                  value={9664846228}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
