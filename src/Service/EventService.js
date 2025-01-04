import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/events";

export const addEvent = (event) => {
  return axios.post(API_BASE_URL, event);
};

export const updateEvent = (id, event) => {
  return axios.put(`${API_BASE_URL}/${id}`, event);
};

export const deleteEvent = (id) => {
  return axios.delete(`${API_BASE_URL}/${id}`);
};

// Corrected function to fetch all events
export const getAllEvents = () => {
  return axios.get(API_BASE_URL);
};