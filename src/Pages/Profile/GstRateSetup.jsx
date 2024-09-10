import React from "react";
import Header from "../../Components/Header";
import CustomTextInput from "../../Components/CustomTextInput";

function GstRateSetup() {
  return (
    <div className="gst-rate-setup-page-conatiner">
      <div className="gst-rate-setup-page-content-container">
        <div className="gst-rate-setup-page-header">
          <Header
            heading="GST Setup"
            subText="Bonanza"
            rightOption="Done"
            backButton
          />
        </div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <CustomTextInput
                  label="GST Number"
                  disabled
                  value="ABC1568AF8AQ"
                />
              </div>
              <div className="col-12 mt-1">
                <label
                  htmlFor="gstRate"
                  className="custom-font-normal custom-text-blue"
                >
                  Rate
                </label>
                <br />
                <select
                  name="gstRate"
                  id="gstRate"
                  className="p-2 mt-1 rounded w-100"
                >
                  <option value="18">18</option>
                  <option value="12">12</option>
                  <option value="-" selected>
                    -
                  </option>
                  <option value="5">5</option>
                  <option value="8">8</option>
                  <option value="22">22</option>
                  <option value="25">25</option>
                </select>
              </div>
            </div>
            <p className="m-0 custom-text-gray custom-font-bold custom-font-small pt-2">
              Please note: The selected rate will be applied to all the
              services, in all the next appointments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GstRateSetup;
