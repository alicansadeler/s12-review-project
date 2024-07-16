import axios from "axios";

function createAxiosInstance() {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://669617c50312447373c1057a.mockapi.io/api/v1",
    headers: {
      Authorization: token,
    },
  });
}

export const API = createAxiosInstance();
