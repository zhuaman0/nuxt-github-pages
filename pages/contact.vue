<template>
	<div class="form-container">
	  <form class="form" @submit.prevent="submitForm">
		 <!-- Form Fields -->
		 <div class="form-group">
			<label for="name">Name</label>
			<input type="text" id="name" v-model="formData.name" required />
		 </div>
 
		 <div class="form-group">
			<label for="email">Email</label>
			<input type="email" id="email" v-model="formData.email" required />
		 </div>
 
		 <div class="form-group">
			<label for="phone">Phone</label>
			<input type="tel" id="phone" v-model="formData.phone" required />
		 </div>
 
		 <div class="form-group">
			<label for="desc">Description</label>
			<textarea id="desc" v-model="formData.desc" required></textarea>
		 </div>
 
		 <!-- Submit Button -->
		 <button type="submit" class="submit-btn">Submit</button>
	  </form>
 
	  <!-- Result Message -->
	  <p v-if="result">{{ result }}</p>
	</div>
 </template>
 
 <script setup>
import { ref } from 'vue';

const formData = ref({
  access_key: "61c468e8-7780-4813-a691-5efab6852ebd",
  subject: "New Submission from Web3Forms",
  name: '',
  email: '',
  phone: '',
  desc: ''
});

const result = ref("");

const submitForm = async () => {
  result.value = "Please wait...";
  try {
    console.log("Sending data:", JSON.stringify(formData.value)); // Log the data to check

    const response = await $fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData.value),
    });

    console.log(response);  // Log response for debugging

    result.value = response.message;

    if (response.status === 200) {
      // Success logic
    } else {
      result.value = "Error in submission";
    }
  } catch (error) {
    console.log(error); // Log error
    result.value = "Something went wrong!";
  } finally {
    // Reset form after submission
    formData.value.name = "";
    formData.value.email = "";
    formData.value.phone = "";
    formData.value.desc = "";

    setTimeout(() => {
      result.value = "";
    }, 5000);
  }
};
</script>

 
 <style scoped>
 /* Existing styles remain unchanged */
 .form-container {
	width: 100%;
	max-width: 1000px;
	margin: 150px auto;
	padding: 20px;
	border-radius: 8px;
	background-color: white;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
 }
 
 .form {
	display: flex;
	flex-direction: column;
 }
 
 .form-group {
	margin-bottom: 15px;
 }
 
 .form-group label {
	font-size: 14px;
	font-weight: 500;
	margin-bottom: 5px;
 }
 
 .form-group input,
 .form-group textarea {
	width: 100%;
	padding: 10px;
	font-size: 14px;
	border: 1px solid #ccc;
	border-radius: 4px;
 }
 
 .form-group input:focus,
 .form-group textarea:focus {
	outline: none;
	border-color: #222653;
 }
 
 textarea {
	resize: vertical;
	min-height: 100px;
 }
 
 .submit-btn {
	padding: 10px 20px;
	background-color: #222653;
	color: white;
	border: none;
	border-radius: 4px;
	font-size: 16px;
	cursor: pointer;
	transition: background-color 0.3s ease;
 }
 
 .submit-btn:hover {
	background-color: #0056b3;
 }
 </style>
 