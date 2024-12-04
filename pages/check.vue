<template>
	<div :class="{'dark-background': allowWindow}" class="bo">
		<div v-if="allowWindow" class="again-window">
			<div class="window-con">
				<div class="hihi">
					<img src="/assets/img/Group 4.png" alt="">
				</div>
				<h1>Your account has been created!</h1>
				<p>Are you ready to manage your own wealth?</p>
				<button @click="toMainPage">Continue</button>
			</div>
		</div>
	  <div class="under-window">
		 <h1 class="code">{{ storedCode }}</h1>
	  </div>
	  <div class="layout-register">
		 <div class="layout-image">
			<img src="/assets/img/Banner.png" alt="" />
		 </div>
		 <div class="layout-registerg">
			<div class="register-container">
			  <div class="header-register">
				 <h1>CREATE AN ACCOUNT</h1>
				 <p>Create your account to start managing your wealth.</p>
			  </div>
			  <form @submit.prevent="handleRegister" action="">
				 <div class="inputs">
					<input
					  v-for="(value, index) in codeInputs"
					  :key="index"
					  v-model="codeInputs[index]"
					  placeholder=""
					  class="checkInput"
					  type="number"
					/>
				 </div>
				 <button type="submit" class="sign">Create an account</button>
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
 import { ref, onMounted } from 'vue';
 import { useRouter } from 'vue-router';
 
 const router = useRouter();
 const storedCode = ref('');
 const codeInputs = ref(new Array(6).fill(''));
 const allowWindow = ref(false)
 
 const handleRegister = () => {
	const enteredCode = codeInputs.value.join('');
	if (enteredCode === storedCode.value) {
	  alert("Code verified successfully!");
	  allowWindow.value = true;
	} else {
	  alert("Invalid code. Please try again.");
	}
 };
 
 onMounted(() => {
	const storedCodes = localStorage.getItem('registerUserCode');
	if (storedCodes) {
	  storedCode.value = storedCodes;
	} else {
	  console.error("No code found in localStorage");
	}
 });
 const toMainPage = () => {
	router.push('/')
 }
 </script>
 
 <style scoped>
 .dark-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9990000000; 
}
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
	display: flex;
	flex-direction: column;
 }
 .inputs {
	display: flex;
	justify-content: space-between;
 }
 .checkInput {
	background-color: white;
	border: 1px solid #DAE0F2;
	width: 80px;
	height: 80px;
	border-radius: 10px;
	display: flex;
	text-align: center;
	align-items: center;
	font-size: 25px;
	color: black;
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
 .under-window {
	background-color: white;
	border: 1px solid #4B5EFF;
	width: 250px;
	display: flex;
	justify-content: center;
	border-radius: 15px;
	padding: 15px 20px;
	position: absolute;
	bottom: 30px;
	right: 30px;
	font-size: 25px;
	z-index: 88;
	animation: slideIn 1s ease-out;
 }
 @keyframes slideIn {
	from {
	  transform: translateX(300px);
	  opacity: 0;
	}
	to {
	  transform: translateX(0);
	  opacity: 1;
	}
 }
 .again-window {
	position: absolute;
	display: flex;
	justify-content: center;
	background-color: white;
	padding: 30px 40px;
	border-radius: 20px;
	text-align: center;
	width: 700px;
	height: 300px;
	-webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
top: 350px;
left: 600px;
 }
 .window-con h1{
	color: #3A3F63;
	font-weight: bold;
	font-size: 25px;
 }
 .window-con p {
	color: #6A74A5;
	font-size: 20px;
 }
 .window-con button {
	background-color: #4B5EFF;
	color: white;
	border-radius: 50px;
	border: none;
	padding: 10px 20px;
	margin-top: 20px;
 }
 .window-con .hihi {
	display: flex;
	justify-content: center;
	margin: 10px 0;
 }
 </style>
 