import React, { useState } from "react";
import CustomSwitch from "./CustomFormSwitch";
import { TimePicker } from "react-ios-time-picker";
import "./BusinessHoursCard.css"; // Import the CSS file

function BusinessHoursCard({
  day,
  startTime,
  endTime,
  active,
  onTimeChange,
  onSwitchChange,
}) {
  const [startTimeValue, setStartTimeValue] = useState(startTime);
  const [endTimeValue, setEndTimeValue] = useState(endTime);

  const handleStartTimeChange = (time) => {
    setStartTimeValue(time);
    if (onTimeChange) {
      onTimeChange(day, "startTime", time);
    }
  };

  const handleEndTimeChange = (time) => {
    setEndTimeValue(time);
    if (onTimeChange) {
      onTimeChange(day, "endTime", time);
    }
  };

  const handleSwitchChange = () => {
    const newSwitchState = !active;
    if (onSwitchChange) {
      onSwitchChange(day, newSwitchState);
    }
  };

  return (
    <div className="container d-flex justify-content-evenly align-items-center gap-2 flex-nowrap">
      <div className="flex-grow-1">
        <h6 className="p-0 m-0 text-start text-truncate flex-shrink">{day}</h6>
      </div>
      <div className="d-flex align-items-start justify-content-start gap-2">
        <div
          className={`rounded border p-1 px-3 text-truncate text-center custom-font-normal custom-time-picker ${
            !active ? "bg-secondary bg-opacity-50" : ""
          }`}
        >
          <TimePicker
            value={startTimeValue}
            onChange={handleStartTimeChange}
            disabled={!active} // Disable if switch is off
            use12Hours
          />
        </div>
        <div
          className={`rounded border p-1 px-3 text-truncate text-center custom-font-normal custom-time-picker ${
            !active ? "bg-secondary bg-opacity-50" : ""
          }`}
        >
          <TimePicker
            value={endTimeValue}
            onChange={handleEndTimeChange}
            disabled={!active} // Disable if switch is off
            use12Hours
          />
        </div>
      </div>
      <div className="rounded p-1 px-3">
        <CustomSwitch
          id={`switch-${day}`}
          checked={active}
          onChange={handleSwitchChange}
        />
      </div>
    </div>
  );
}

export default BusinessHoursCard;
