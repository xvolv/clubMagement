import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

export const getUserById = (userId) => {
  return axios.get(`${API_BASE_URL}/users/${userId}`);
};

export const joinArtClub = (userId) => {
  return axios.post(`${API_BASE_URL}/art-club-memberships/join/${userId}`);
};

export const joinSportClub = (userId) => {
  return axios.post(`${API_BASE_URL}/sport-club-memberships/join/${userId}`);
};

export const joinPeaceClub = (userId) => {
  return axios.post(`${API_BASE_URL}/peace-club-memberships/join/${userId}`);
};

export const joinTechClub = (userId) => {
  return axios.post(`${API_BASE_URL}/tech-club-memberships/join/${userId}`);
};
