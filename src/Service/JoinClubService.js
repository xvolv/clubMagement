import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

// Join Tech Club by sending username and password as query parameters
export const joinTechClub = (username, password) => {
  return axios
    .post(`${API_BASE_URL}/tech-club-memberships/join`, null, {
      params: {
        userName: username,
        password: password,
      },
    })
    .catch((error) => {
      if (error.response) {
        // Handle errors based on response status
        if (error.response.status === 409) {
          console.error("Conflict: User is already a member");
        } else  {
          console.error("Error: ", error.response.data);
        }
      } else if (error.request) {
        // No response received
        console.error("No response from server", error.request);
      } else {
        // Something else went wrong
        console.error("Error:", error.message);
      }
      throw error; // Rethrow to handle it in the component
    });
};

export const joinArtClub = (userId) => {
  return axios.post(`${API_BASE_URL}/art-club-memberships/join`, null, {
    params: {
      userId: userId,
    },
  });
};

export const joinPeaceClub = (userId) => {
  return axios.post(`${API_BASE_URL}/peace-club-memberships/join`, null, {
    params: {
      userId: userId,
    },
  });
};
export const joinSportClub = (username) => {
  return axios.post(`${API_BASE_URL}/sport-club-memberships/join`, null, {
    params: {
      username: username,
    },
  });
};
