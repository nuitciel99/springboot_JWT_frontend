import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: ACCESS_TOKEN ? `Bearer ${ACCESS_TOKEN}` : "",
  },
});

export const postLogin = async (data) => {
  try {
    const response = await axiosInstance.post("/api/login", data);
    console.log(response.data.token);
    if (response.data.token) {
      localStorage.setItem("ACCESS_TOKEN", response.data.token);
    }
  } catch (error) {}
};

export const getRestaurants = async () => {
  try {
    const response = await axiosInstance.get("/restaurants");
    return response.data;
  } catch (error) {}
};

export const getListView = async (id) => {
  try {
    const response = await axiosInstance.get(`/restaurant/${id}`);
    return response.data;
  } catch (error) {}
};
