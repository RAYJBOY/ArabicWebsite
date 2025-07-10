import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
  withCredentials: true,
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
  async (error) => {
    // Handle error responses
    if (error.response.data.message === "Access token missing" || error.response.data.message === "No JWT token in header") {
      // If the access token is missing, try to refresh it
      try {
        await instance.post("/auth/refresh", {}, { withCredentials: true });
        // Retry the original request after refreshing the token
        // Error config is the original request that failed
        return instance.request(error.config);
      } catch (refreshError) {
        console.error("Error refreshing token:", refreshError);
        // If refreshing fails, reject the original error
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
