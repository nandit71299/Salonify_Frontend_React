// src/config/apiConfig.js
const API_PORT = 3000;

const API_BASE_URL = `http://localhost:${API_PORT}/api`; // Replace with your actual base URL

export const API_URLS = {
  registerSalon: `${API_BASE_URL}/registersalon`,
  verifyUser: `${API_BASE_URL}/verify-user`,
  sendOtp: `${API_BASE_URL}/send-otp`,
  salonLogin: `${API_BASE_URL}/salon-login`,

  // Add other endpoints as needed
};
