import axios from "axios";
import { useAppSelector } from "./hooks";
import { store } from "./store";

const instance = axios.create({
  baseURL: "http://localhost:5001",
});


instance.interceptors.request.use(
  (config) => {
    // Add request interceptors here
    const accessToken = store.getState().users.token;
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
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
