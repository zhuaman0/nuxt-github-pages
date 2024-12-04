<template>
	<div>
	  <div class="layout-register">
		 <div class="layout-image">
			<img src="/assets/img/Banner.png" alt="">
		 </div>
		 <div class="layout-registerg">
			<div class="register-container">
			  <div class="header-register">
				 <h1>CREATE AN ACCOUNT</h1>
				 <p>Create your account to start managing your wealth.</p>
			  </div>
			  <form @submit.prevent="handleRegister" action="">
				 <div class="email">
					<label for="email">Email</label>
					<input v-model="email" id="email" placeholder="Sample@gmail.com" type="text">
				 </div>
				 <div class="password">
					<label for="">Password</label>
					<input v-model="password" placeholder="Password" type="password">
				 </div>
				 <div class="avatar">
					<label for="avatar">Avatar</label>
					<input type="file" @change="handleAvatarChange" accept="image/*">
				 </div>
				 <div v-if="avatarUrl" class="avatar-preview">
					<img :src="avatarUrl" alt="Avatar Preview" width="100" height="100">
				 </div>
				 <h1 class="h">By creating an account, you agree to our <span @click="toTheLogin" class="register-bold">Login</span></h1>
				 <button type="submit" class="sign">Create an account</button>
			  </form>
			</div>
		 </div>
	  </div>
	</div>
 </template>
 
 <script setup>
 import { ref } from 'vue';
 import { useUserStore } from '~/stores/usersStore';
 import { useRouter } from 'vue-router';
 
 const router = useRouter();
 const userStore = useUserStore();
 
 const email = ref('');
 const password = ref('');
 const avatarUrl = ref(null);  // Store the avatar path

 definePageMeta({
	layout: ''
 })
 
 // To handle the avatar change
 const handleAvatarChange = (event) => {
	const file = event.target.files[0];
	if (file) {
	  const fileReader = new FileReader();
	  
	  fileReader.onloadend = () => {
		 avatarUrl.value = fileReader.result;  
	  };
	  
	  fileReader.readAsDataURL(file);  // Convert the file to base64 data URL
	}
 };

 const toTheLogin = () => {
	router.push('/login')
 }
 
 const code = Math.floor(Math.random() * 900000) + 100000;
 
 const handleRegister = async () => {
	const data = {
	  email: email.value,
	  password: password.value,
	  code: code,
	  avatar: avatarUrl.value  // Include the avatar path (in this case, base64 string)
	};
 
	const user = await userStore.registerUser(data);
 
	if (user) {
	  alert("Account created successfully!");
	  localStorage.setItem('registerUserCode', code);
	  localStorage.setItem('avatar', avatarUrl.value)
	  email.value = '';
	  password.value = '';
	  avatarUrl.value = null;  // Clear the avatar after registration
	} else {
	  alert("Error creating account, please try again.");
	}
	router.push('/check');
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
 .avatar {
	display: flex;
	flex-direction: column;
	margin: 15px 0;
 }
 .avatar label {
	color: #3A3F63;
	font-size: 20px;
 }
 .avatar input {
	padding: 10px;
 }
 .avatar-preview img {
	border-radius: 50%;
	margin-top: 10px;
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
 .sing-up p {
	color: #6A74A5;
	font-size: 15px;
	font-weight: bold;
 }
 .sing-up {
	display: flex;
	align-items: center;
	gap: 30px;
 }
 .line-si {
	background-color: #6A74A5;
	height: 1px;
	width: 670px;
 }
 </style>
 