import axios from "axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    isLoading: false,
    users: [],
    code: '',
	 currentUser: null,
  }),
  actions: {
    async registerUser(data) {
      this.isLoading = true;
      try {
        const response = await axios.post(
          'https://6741de51e4647499008f0f76.mockapi.io/users',
          data
        );
        console.log("User Registered:", response.data);
        this.users.push(response.data);
		  localStorage.setItem('registerUser', JSON.stringify(response.data))
        return response.data;
      } catch (err) {a
        console.log("Error during registration:", err);
        return null; 
      } finally {
        this.isLoading = false;
      }
    },
async loginUser(credentials) {
      try {
        const response = await axios.get("https://6741de51e4647499008f0f76.mockapi.io/users");
        const user = response.data.find(
          (u) => u.email === credentials.email && u.password === credentials.password
        );

        if (user) {
          this.currentUser = user; // Set logged-in user
          localStorage.setItem("loggedInUser", JSON.stringify(user)); // Save user to localStorage
          return user;
        } else {
          return null; // Login failed
        }
      } catch (err) {
        console.error("Error during login:", err);
        throw err;
      }
    },
  }
});
