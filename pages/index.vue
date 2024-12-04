<template>
	<div :class="{'dark-background': isDarkMode}" class="bo">
	  <CreatePrice class="io" v-if="allowWindow" @broClicked="handleCloseCreatePrice"/>
	  <div class="contain">
		 <div class="header-container">
			<div class="header-title">
			  <h1>customers</h1>
			</div>
			<div class="user-add">
			  <button class="export">Export</button>
			  <button @click="createNewPrice" class="add">
				 <Icon name="lucide:plus" />
				 Add new
			  </button>
			  <button @click="toggleDarkMode" class="dark-mode-toggle">
				 Toggle Dark Mode
			  </button>
			</div>
		 </div>
		 <ExplainFinance class="ex"/>
		 <Dashboad class="dash"/>
		 <UsersBox/>
	  </div>
	</div>
 </template>
 
 <script setup>
 definePageMeta({
	layout: 'default'
 })
 
 import CreatePrice from "~/components/CreatePrice.vue";
 import UserBox from "~/components/Users/UsersBox.vue"
 import ExplainFinance from "~/components/ExplainFinance.vue";
 import Dashboad from "~/components/Dashboad.vue";
 const allowWindow = ref(false);
 const isDarkMode = ref(false); // State for dark mode
 
 const createNewPrice = () => {
	allowWindow.value = !allowWindow.value;
 }
 
 const handleCloseCreatePrice = () => {
	allowWindow.value = false;
 }
 
 // Toggle dark mode
 const toggleDarkMode = () => {
	isDarkMode.value = !isDarkMode.value;
 }
 </script>
 
 <style scoped>
 .header-container {
	display: flex;
	justify-content: space-between; 
	align-items: center;
	width: 100%;
	padding: 20px 40px;
 }
 
 .contain {
	width: 100%;
 }
 
 .header-title h1 {
	font-size: 30px;
	text-transform: uppercase;
	font-weight: 700;
	color: #3A3F63;
 }
 
 .export {
	background-color: white;
	-webkit-box-shadow: 0px 0px 13px -7px rgba(50, 57, 89, 0.2);
	-moz-box-shadow: 0px 0px 13px -7px rgba(50, 57, 89, 0.2);
	box-shadow: 0px 0px 13px -7px rgba(50, 57, 89, 0.2);
	padding: 10px 30px;
	color: #858EBD;
	font-weight: bold;
	border-radius: 25px;
 }
 
 .io {
	z-index: 999;
 }
 
 .ex {
	padding: 10px 40px;
 }
 
 .dash {
	padding: 10px 40px;
 }
 
 .add {
	background-color: white;
	-webkit-box-shadow: 0px 0px 13px -7px rgba(50, 57, 89, 0.2);
	-moz-box-shadow: 0px 0px 13px -7px rgba(50, 57, 89, 0.2);
	box-shadow: 0px 0px 13px -7px rgba(50, 57, 89, 0.2);
	padding: 10px 30px;
	color: white;
	background-color: #858EBD;
	display: flex;
	align-items: center;
	font-weight: bold;
	border-radius: 25px;
	gap: 10px;
 }
 
 .user-add {
	display: flex;
	gap: 20px;
 }
 
 .dark-background {
	background-color: #121212;
 }
 
 .dark-mode-toggle {
	background-color: #858EBD;
	color: white;
	padding: 10px 20px;
	border-radius: 5px;
	cursor: pointer;
	font-weight: bold;
 }
 
 .dark-mode-toggle:hover {
	background-color: #4b5a7b;
 }
 </style>
 