import React, { useEffect, useState } from "react";
import "./Notification.css"; // Import the CSS for styling

function Notification({ message, duration, onClose }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose(); // Call onClose callback after hiding
      }, duration || 3000); // Default duration 3000ms (3 seconds)

      return () => clearTimeout(timer); // Clear timeout on component unmount
    }
  }, [message, duration, onClose]);

  if (!visible) return null;

  return <div className="notification">{message}</div>;
}

export default Notification;
