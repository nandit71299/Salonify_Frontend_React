import React, { useEffect, useState } from "react";
import "./NotificationComponent.css"; // Import the CSS for styling

function AppNotification({ message, duration, onClose }) {
  const [visible, setVisible] = useState(true);
  const [animationClass, setAnimationClass] = useState("slide-in");

  useEffect(() => {
    if (message) {
      // Set up the timer to hide the notification after a certain duration
      const timer = setTimeout(() => {
        setAnimationClass("slide-out"); // Start slide-out animation
        setTimeout(() => {
          setVisible(false); // Hide the notification
          if (onClose) onClose(); // Call onClose callback after hiding
        }, 500); // Duration of slide-out animation
      }, duration || 3000); // Default duration 3000ms (3 seconds)

      return () => clearTimeout(timer); // Clear timeout on component unmount
    }
  }, [message, duration, onClose]);

  if (!visible) return null;

  return <div className={`notification ${animationClass}`}>{message}</div>;
}

export default AppNotification;
