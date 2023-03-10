import axios from "axios";
// configuration
const isProduction = process.env.NODE_ENV === "production";

// const baseURL = isProduction ? "https://rhetora-backend-production-d331.up.railway.app/" : "http://localhost:8080/";
const baseURL = "https://rhetora-backend-production-d331.up.railway.app/";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "content-type": "application/json",
    // Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

export default axiosInstance;
