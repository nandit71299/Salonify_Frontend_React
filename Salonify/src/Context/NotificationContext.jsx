import React, { createContext, useContext, useState, useEffect } from "react";
import NotificationComponent from "../Components/NotificationComponent"; // Import the renamed Notification component

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notification, setNotification] = useState(null);
  const [animationClass, setAnimationClass] = useState("slide-in");

  const showNotification = (message, duration = 3000) => {
    setAnimationClass("slide-in");
    setNotification(message);
    setTimeout(() => {
      setAnimationClass("slide-out");
      setTimeout(() => {
        setNotification(null);
        setAnimationClass("slide-in"); // Reset animation class for future notifications
      }, 500); // Duration of slide-out animation
    }, duration);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification && (
        <NotificationComponent
          message={notification}
          animationClass={animationClass} // Pass the animation class
        />
      )}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  return useContext(NotificationContext);
}
