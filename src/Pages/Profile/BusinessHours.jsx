import React, { useState } from "react";
import Header from "../../Components/Header";
import BusinessHoursCard from "../../Components/BusinessHoursCard";
import businessHoursdata from "./BusinessHoursData";

function BusinessHours() {
  const [data, setData] = useState(businessHoursdata);

  const [selectedDayIndex, setSelectedDayIndex] = useState(null);

  const handleTimeChange = (day, timeType, time) => {
    const updatedData = data.map((item, index) => {
      if (index === selectedDayIndex) {
        return { ...item, [timeType]: time };
      }
      return item;
    });
    setData(updatedData);
  };

  const handleSwitchChange = (day, newState) => {
    const updatedData = data.map((item, index) => {
      if (index === selectedDayIndex) {
        return { ...item, active: newState };
      }
      return item;
    });
    setData(updatedData);
    console.log(updatedData);
  };

  return (
    <div className="business-hours-page-container">
      <Header
        heading="Business Hours"
        subText="Bonanza"
        rightOption="Done"
        backButton="true"
      />
      <div className="pt-3 business-hours-page-content-container">
        {data.map((element, index) => (
          <div key={index} onClick={() => setSelectedDayIndex(index)}>
            <BusinessHoursCard
              day={element.day}
              startTime={element.startTime}
              endTime={element.endTime}
              active={element.active}
              onTimeChange={handleTimeChange}
              onSwitchChange={handleSwitchChange} // Pass the switch handler
            />
          </div>
        ))}

        {selectedDayIndex !== null && (
          <div
            style={{
              position: "absolute",
              bottom: "0",
              width: "100%",
              maxWidth: "100%",
            }}
          ></div>
        )}
      </div>
    </div>
  );
}

export default BusinessHours;
