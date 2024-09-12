import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import { useParams } from "react-router-dom";
import holidayData from "./HolidayData";
import CustomTextInput from "../../Components/CustomTextInput";
import { navigationService } from "../../Services/navigationService";

function AddEditHoliday(props) {
  const { id } = useParams();
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const { goBack } = navigationService();

  useEffect(() => {
    if (props.mode === "edit") {
      const findFromDate = holidayData.find((_, index) => index === Number(id));
      if (findFromDate) {
        setFromDate(formatDate(findFromDate.fromDate));
        setToDate(formatDate(findFromDate.toDate || ""));
      }
    } else {
      setFromDate("");
      setToDate("");
    }
  }, [id, props.mode]);

  const formatDate = (dateStr) => {
    const [day, month, year] = dateStr.split("/").map(Number);
    return `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
  };

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };

  return (
    <div
      className="d-flex flex-column justify-content-between "
      style={{ minHeight: "100vh" }}
    >
      <div>
        <Header
          backButton
          heading={`${props.mode === "create" ? "Add" : "Edit"} Holiday`}
          rightOption="Save"
        />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <CustomTextInput
                label="From"
                type="date"
                value={fromDate}
                onChange={handleFromDateChange}
              />
            </div>
            <div className="col-12">
              <CustomTextInput
                label="To"
                type="date"
                value={toDate}
                onChange={handleToDateChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <button
          onClick={goBack}
          className="pt-4 pb-4 bg-danger bg-gradient bg-opacity-50 text-danger w-100 rounded-top-4 "
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default AddEditHoliday;
