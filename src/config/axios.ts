import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://laravelresfulapi-production.up.railway.app/api",
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json"
    }
})

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

export default axiosInstance