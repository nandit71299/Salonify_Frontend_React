// AuthContext.jsx

import React, { createContext, useContext, useState } from "react";

// Create the context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // You can add methods to manage authentication
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easier context consumption
export const useAuth = () => useContext(AuthContext);
