import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(sessionStorage.getItem("authKey"));
  const navigate = useNavigate();
  const location = useLocation();

  const login = (userData, token) => {
    sessionStorage.setItem("authKey", token);
    setToken(token);
    setUser(userData);
    setIsAuthenticated(true);
    navigate("/dashboard");
  };

  const logout = () => {
    sessionStorage.removeItem("authKey");
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    navigate("/");
  };

  const checkToken = async () => {
    const token = sessionStorage.getItem("authKey");
    if (!token) {
      logout();
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/validate-token", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Token validated, user data:", data.user);
        setUser(data.user);
        setIsAuthenticated(true);
      } else {
        console.log("Invalid token");
        logout();
      }
    } catch (error) {
      console.error("Token validation failed:", error);
      logout();
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  // Redirect only if the user is authenticated and not on login or register pages
  useEffect(() => {
    if (isAuthenticated && location.pathname === "/login") {
      navigate("/dashboard");
    }
  }, [isAuthenticated, location.pathname, navigate]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
