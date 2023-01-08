import axios from "axios";
// configuration
const baseURL = "http://backend.rhetora.app/api/";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "content-type": "application/json",
    // Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

export default axiosInstance;
