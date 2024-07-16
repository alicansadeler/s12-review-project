import { API } from "../api/api";

export const getComments = () => {
  return API.get("/comments");
};
