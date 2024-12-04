import { defineStore } from "pinia";
import axios from "axios";

export const useFinanceStore = defineStore("financeStore", {
  state: () => ({
    isLoading: false,
    finances: [],
  }),
  actions: {
    async fetchFinanceData() {
      this.isLoading = true;
      try {
        const response = await axios.get("https://6741de51e4647499008f0f76.mockapi.io/finance");
        this.finances = response.data;
		  this.filteredFinances = this.finances;
      } catch (err) {
        console.error("Error fetching finance data:", err);
      } finally {
        this.isLoading = false;
      }
    },
	 async sendFinanceData(data) {
		try {
			const response = await axios.post("https://6741de51e4647499008f0f76.mockapi.io/finance", data)
			if(response.data) {
				this.finances.push(response.data); 
				return response.data;
			}else {
			}
		}catch (err) {
			console.log(err)
		}
	 }
  },
});
