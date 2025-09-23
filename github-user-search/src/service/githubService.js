// src/services/githubService.js
import axios from "axios";

// Fetch a single GitHub user by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};

// 🔍 Fetch multiple GitHub users with advanced search
export const fetchUsers = async ({ username, location, minRepos }) => {
  try {
    // Build query string
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    // GitHub search API
    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
    );

    return response.data.items; // Array of users
  } catch (error) {
    throw new Error("Error fetching users");
  }
};
