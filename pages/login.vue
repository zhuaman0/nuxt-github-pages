<template>
	<div>
	  <div class="layout-register">
		 <div class="layout-image">
			<img src="/assets/img/Banner.png" alt="">
		 </div>
		 <div class="layout-registerg">
			<div class="register-container">
			  <div class="header-register">
				 <h1>LOGIN AN ACCOUNT</h1>
				 <p>Create your account to start managing your wealth.</p>
			  </div>
			  <form @submit.prevent="loginToAccount">
				 <div class="email">
					<label for="email">Email</label>
					<input v-model="email" id="email" placeholder="Sample@gmail.com" type="text">
				 </div>
				 <div class="password">
					<label for="password">Password</label>
					<input v-model="password" placeholder="Password" type="password">
				 </div>
				 <h1 class="h">By creating an account, you agree to our <span @click="toTheRegister" class="register-bold">Register</span></h1>
				 <button type="submit" class="sign">Login an account</button>
			  </form>
			</div>
		 </div>
	  </div>
	</div>
 </template>
 
 <script setup>
 definePageMeta({
	layout: ''
 })
 import { ref } from 'vue';
 import { useUserStore } from '#build/imports';  // Adjust the path as necessary
import { routerKey } from 'vue-router';
import { useRouter } from 'vue-router';
const router = useRouter();
 
 const email = ref('');
 const password = ref('');
 const userStore = useUserStore();  // Use the Pinia store
 
 // Function to handle login
 const loginToAccount = async () => {
	const credentials = { email: email.value, password: password.value };
	try {
	  const user = await userStore.loginUser(credentials); // Call the store action to login
	  if (user) {
		 // Navigate to the user page or show success message
		 console.log('Login successful!', user);
		 router.push('/')
	  } else {
		 // Handle failed login
		 alert('Invalid email or password');
	  }
	} catch (error) {
	  console.error('Login failed:', error);
	  alert('An error occurred during login');
	}
 };
 
 // Example: Navigate to register page
 const toTheRegister = () => {
	// Navigate to the registration page
	console.log('Redirect to register page');
 };
 </script>
 
 <style scoped>
 .layout-image img {
	height: 100vh;
	width: 700px;
 }
 .layout-register {
	display: flex;
 }
 .layout-registerg {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
 }
 .header-register h1 {
	font-size: 40px;
	font-weight: bold;
	color: #3A3F63;
 }
 .header-register p {
	color: #6A74A5;
	font-size: 20px;
 }
 .register-container {
	width: 900px;
 }
 form {
	padding: 30px 0;
 }
 .email {
	display: flex;
	flex-direction: column;
 }
 .email label {
	color: #3A3F63;
	font-size: 20px;
 }
 .email input {
	background-color: white;
	border: 1px solid #DAE0F2;
	padding: 15px 30px;
	font-size: 16px;
	border-radius: 5px;
	margin: 5px 0;
 }
 .email input::placeholder {
	font-size: 16px;
 }
 .password {
	display: flex;
	flex-direction: column;
	margin: 30px 0;
 }
 .password label {
	color: #3A3F63;
	font-size: 20px;
 }
 .password input {
	background-color: white;
	border: 1px solid #DAE0F2;
	padding: 15px 30px;
	font-size: 16px;
	border-radius: 5px;
	margin: 5px 0;
 }
 .password input::placeholder {
	font-size: 16px;
 }
 .h {
	color: #6A74A5;
	font-size: 20px;
 }
 .h span {
	color: #3A3F63;
	font-weight: bold;
	font-size: 20px;
 }
 .sign {
	background-color: #4B5EFF;
	border-radius: 30px;
	color: white;
	border: none;
	padding: 15px 30px;
	font-size: 20px;
	box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
	margin: 30px 0;
 }
 </style>
 