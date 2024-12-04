<template>
	<div :class="{ 'dark-mode': isDarkMode, 'light-mode': !isDarkMode }" class="details-page">
	  <div class="mode-toggle">
		 <button class="c" @click="toggleMode">{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</button>
	  </div>
 
	  <div class="finance-details">
		 <h1>Finance Details</h1>
		 <p><strong>Title:</strong> {{ route.query.title }}</p>
		 <p><strong>Money:</strong> {{ route.query.money }}$</p>
		 <p><strong>Sale:</strong> {{ route.query.sale }}$</p>
		 <p><strong>Phone:</strong> {{ route.query.phone }}</p>
		 <p><strong>Where:</strong> {{ route.query.where }}</p>
	  </div>
 
	  <div class="information-section">
		 <h2>Additional Information</h2>
		 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui vel nisl facilisis facilisis.</p>
	  </div>
 
	  <div class="comment-section">
		 <h2>Leave a Comment</h2>
		 <textarea 
			v-model="newComment" 
			placeholder="Write your comment here..." 
			rows="5"
			cols="90">
		 </textarea>
		 <button @click="submitComment">Submit</button>
 
		 <div class="comments-list" v-if="comments.length > 0">
			<h3>Comments:</h3>
			<ul>
			  <li v-for="(comment, index) in comments" :key="index">
				 <strong>ID:</strong>{{ comment.comment }}
			  </li>
			</ul>
		 </div>
	  </div>
	</div>
 </template>
 
 
 <script setup>
 import { ref, onMounted } from 'vue';
 import { useRoute } from 'vue-router';
 import { useFinanceStore } from '#build/imports';
 
 const route = useRoute();
 const financeStore = useFinanceStore();
 const comments = ref([]);
 const newComment = ref('');
 
 // Track the current theme (light/dark)
 const isDarkMode = ref(false);
 
 // Fetch comments when component mounts
 onMounted(() => {
	fetchComments();
 });
 
 const fetchComments = async () => {
	await financeStore.fetchFinanceData();
	comments.value = financeStore.finances;
 };
 
 const submitComment = async () => {
	if (newComment.value.trim() === '') {
	  alert('Please write a comment before submitting.');
	  return;
	}
	const commentData = { comment: newComment.value.trim() };
	const savedComment = await financeStore.sendFinanceData(commentData);
	if (savedComment) {
	  comments.value.push(savedComment);
	  newComment.value = '';
	}
 };
 
 // Toggle between light and dark mode
 const toggleMode = () => {
	isDarkMode.value = !isDarkMode.value;
 };
 </script>
 
 
 <style scoped>
 .details-page {
	padding: 20px;
	font-family: Arial, sans-serif;
	transition: background-color 0.3s, color 0.3s;
 }
 
 .light-mode {
	background-color: #fff;
	color: #333;
 }
 
 .dark-mode {
	background-color: #121212;
	color: darkblue;
 }
 
 .dark-mode > c {
	background-color: khaki;
 }
 .mode-toggle button {
	background-color: #4CAF50;
	color: white;
	border: none;
	border-radius: 4px;
	padding: 10px 15px;
	cursor: pointer;
	font-size: 14px;
 }
 
 .mode-toggle button:hover {
	background-color: #45a049;
 }
 
 .finance-details {
	background-color: white;
	padding: 15px;
	border-radius: 8px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	margin-bottom: 20px;
 }
 
 .finance-details h1 {
	margin-bottom: 10px;
 }
 
 .finance-details p {
	margin: 8px 0;
	font-size: 16px;
 }
 
 .information-section {
	background-color: #fff;
	padding: 15px;
	border-radius: 8px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	margin-bottom: 20px;
 }
 
 .information-section h2 {
	margin-bottom: 10px;
 }
 
 .information-section p {
	font-size: 15px;
 }
 
 .comment-section {
	background-color: #fff;
	padding: 15px;
	border-radius: 8px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 }
 
 .comment-section h2 {
	margin-bottom: 10px;
 }
 
 .comment-section textarea {
	border: 1px solid #ddd;
	border-radius: 4px;
	padding: 10px;
	font-size: 14px;
	margin-bottom: 10px;
	resize: none;
 }
 
 .comment-section button {
	background-color: #4CAF50;
	color: white;
	border: none;
	border-radius: 4px;
	padding: 10px 15px;
	cursor: pointer;
	font-size: 14px;
 }
 
 .comment-section button:hover {
	background-color: #45a049;
 }
 
 .comments-list {
	margin-top: 20px;
 }
 
 .comments-list h3 {
	margin-bottom: 10px;
 }
 
 .comments-list ul {
	list-style: none;
	padding: 0;
 }
 
 .comments-list li {
	background-color: #f9f9f9;
	padding: 10px;
	border-radius: 4px;
	margin-bottom: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 }
 </style>
 