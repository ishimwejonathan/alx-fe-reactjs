// src/services/githubService.js
import axios from "axios";

// Fetch GitHub user data by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // Return the user data
  } catch (error) {
    // Handle errors (like user not found)
    throw new Error("User not found");
  }
};
