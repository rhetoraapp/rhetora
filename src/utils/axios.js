import axios from "axios";
// configuration
const isProduction = process.env.NODE_ENV === "production";

const baseURL = isProduction ? "http://backend.rhetora.app/api/" : "http://localhost:8080/";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "content-type": "application/json",
    // Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

export default axiosInstance;
