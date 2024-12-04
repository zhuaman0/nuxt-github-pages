<template>
	<div class="layout">
	  <header>
		 <AppHeader />
	  </header>
	  <div class="main-content">
		 <aside>
			<AppAside />
		 </aside>
		 <main>
			<slot />
		 </main>
	  </div>
	</div>
 </template>
 
 <script setup>
 import AppHeader from '~/components/AppHeader.vue';
 import AppAside from '~/components/AppAside.vue';
 </script>
 
 <style scoped>
 .layout {
	display: flex;
	flex-direction: column;
	height: 100vh;
 }
 
 header {
	color: white;
	padding: 4px 40px;
	text-align: center;
	-webkit-box-shadow: 0px 5px 5px -5px rgba(50, 57, 89, 0.6);
	-moz-box-shadow: 0px 5px 5px -5px rgba(50, 57, 89, 0.6);
	box-shadow: 0px 5px 5px -5px rgba(50, 57, 89, 0.6);
 }
 
 .main-content {
	display: flex;
	flex: 1;
 }
 
 aside {
	background: #222653;
	width: 300px;
	padding: 10px;
	border-right: 1px solid #ddd;
 }
 
 main {
	flex: 1;
	padding: 10px;
	overflow: auto;
	background-color: #E6E9F4;
 }
 </style>
 