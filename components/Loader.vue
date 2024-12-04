<template>
	<div class="skeleton-loader">
	  <div class="skeleton-header"></div>
	  <div class="skeleton-body">
		 <div class="skeleton-line"></div>
		 <div class="skeleton-line"></div>
		 <div class="skeleton-line"></div>
		 <div class="skeleton-line"></div>
		 <div class="skeleton-line"></div>
		 <div class="skeleton-line"></div>
	  </div>
	  <div class="skeleton-footer"></div>
	</div>
 </template>
 
 <script>
 export default {
	name: "Loader",
 };
 </script>
 
 <style scoped>
 .skeleton-loader {
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 20px;
	background-color: #f4f4f4;
	border-radius: 8px;
 }
 
 .skeleton-header,
 .skeleton-footer {
	height: 20px;
	background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
	background-size: 200% 100%;
	border-radius: 4px;
	animation: loading 1.5s infinite;
 }
 
 .skeleton-body .skeleton-line {
	height: 35px;
	margin-bottom: 8px;
	background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
	background-size: 200% 100%;
	border-radius: 4px;
	animation: loading 1.5s infinite;
 }
 
 .skeleton-body .skeleton-line:last-child {
	width: 80%;
 }
 
 @keyframes loading {
	0% {
	  background-position: 200% 0;
	}
	100% {
	  background-position: -200% 0;
	}
 }
 </style>
 