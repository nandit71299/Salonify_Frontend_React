import React, { useRef, useState } from "react";
import "./TimePicker.css"; // Import the CSS file
import moment from "moment";

function TimePicker() {
  let currentHour = moment().format("HH");
  currentHour = Number(currentHour);
  let currentMinute = moment("2", "mm").format("mm");
  let dayOrNight = moment().format("a");

  currentMinute = Number(currentMinute);

  const [hour, setHour] = useState(currentHour);
  const [minute, setMinute] = useState(currentMinute);
  const [isPM, setIsPM] = useState(dayOrNight === "am" ? false : true);

  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const ampmRef = useRef(null);

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  const scrollToSelected = (ref, value) => {
    const container = ref.current;
    const items = container.querySelectorAll(".picker-item");
    items.forEach((item) => {
      if (
        item.textContent === value.toString() ||
        item.textContent === (value < 10 ? `0${value}` : value).toString()
      ) {
        item.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  };

  React.useEffect(() => {
    scrollToSelected(hourRef, hour);
    scrollToSelected(minuteRef, minute);
    scrollToSelected(ampmRef, isPM ? "PM" : "AM");
  }, [hour, minute, isPM]);

  return (
    <div className="time-picker">
      <div className="picker-container">
        <div className="picker-wheel" ref={hourRef}>
          {hours.map((h) => (
            <div
              key={h}
              className={`picker-item ${h === hour ? "selected" : ""}`}
              onClick={() => setHour(h)}
            >
              {h}
            </div>
          ))}
        </div>
        <div className="picker-wheel" ref={minuteRef}>
          {minutes.map((m) => (
            <div
              key={m}
              className={`picker-item ${m === minute ? "selected" : ""}`}
              onClick={() => setMinute(m)}
            >
              {m < 10 ? `0${m}` : m}
            </div>
          ))}
        </div>
        <div
          className="picker-wheel"
          style={{ paddingTop: "25px" }}
          ref={ampmRef}
        >
          <div
            className={`picker-item ${!isPM ? "selected" : ""}`}
            onClick={() => setIsPM(false)}
          >
            AM
          </div>
          <div
            className={`picker-item ${isPM ? "selected" : ""}`}
            onClick={() => setIsPM(true)}
          >
            PM
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimePicker;
