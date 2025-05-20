import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001",
  withCredentials: true
});


instance.interceptors.request.use(
  (config) => {
    // Add request interceptors here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // Add response interceptors here
    return response;
  },
  (error) => {
    // Handle error responses
    return Promise.reject(error);
  }
);

export default instance;
