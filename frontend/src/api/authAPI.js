import axiosClient from "./axiosClient";

const authAPI = {
  register: (data) => axiosClient.post("/auth/register", data),
  login: (data) => axiosClient.post("/auth/login", data),
  getProfile: () => axiosClient.get("/auth/profile"),
  updatePassword: (data) => axiosClient.put("/auth/password", data),
};

export default authAPI;
