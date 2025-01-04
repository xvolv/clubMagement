import axios from "axios";

const REGISTER_API_BASE_URL = "http://localhost:8080/api/users";

export const addUser = (user) => {
  console.log("this is sent"+user);
  return axios.post(REGISTER_API_BASE_URL, user);
};
