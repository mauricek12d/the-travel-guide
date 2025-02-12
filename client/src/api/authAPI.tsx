import axios from "axios";

const API_URL = "http://localhost:3001/api/users"; 

// Register User
export const registerUser = async (userData: { name: string; email: string; password: string }) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error: any) { // ✅ Explicitly type error as `any`
    return error.response?.data || { message: "An error occurred" };
  }
};

// Login User
export const loginUser = async (userData: { email: string; password: string }) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error: any) { // ✅ Explicitly type error as `any`
    return error.response?.data || { message: "An error occurred" };
  }
};

// Get Current User (Protected Route)
export const getUser = async (token: string) => {
  try {
    const response = await axios.get(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) { // ✅ Explicitly type error as `any`
    return error.response?.data || { message: "An error occurred" };
  }
};
