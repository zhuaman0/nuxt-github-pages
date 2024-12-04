<template>
	<div class="charts-layout">
		<div class="br">
			<h2>Doughnut Chart</h2>
			<canvas id="doughnutChart"></canvas>
		</div>
 
	  <div class="dr">
		<h2>Pie Chart</h2>
		<canvas id="pieChart"></canvas>
	  </div>
	</div>
 </template>
 
 <script setup>
 import { onMounted } from 'vue';
 import { Chart, DoughnutController, PieController, ArcElement, Tooltip, Legend } from 'chart.js';
 
 // Register necessary Chart.js components
 Chart.register(DoughnutController, PieController, ArcElement, Tooltip, Legend);
 
 onMounted(() => {
	// Doughnut Chart
	const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
	new Chart(doughnutCtx, {
	  type: 'doughnut',
	  data: {
		 labels: ['Red', 'Blue', 'Yellow'],
		 datasets: [
			{
			  label: 'Doughnut Dataset',
			  data: [300, 50, 100],
			  backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
			  hoverOffset: 4,
			},
		 ],
	  },
	  options: {
		 responsive: true,
		 plugins: {
			legend: {
			  position: 'top',
			},
			tooltip: {
			  enabled: true,
			},
		 },
	  },
	});
 
	// Pie Chart
	const pieCtx = document.getElementById('pieChart').getContext('2d');
	new Chart(pieCtx, {
	  type: 'pie',
	  data: {
		 labels: ['Green', 'Purple', 'Orange'],
		 datasets: [
			{
			  label: 'Pie Dataset',
			  data: [150, 200, 100],
			  backgroundColor: ['#4BC0C0', '#9966FF', '#FF9F40'],
			  hoverOffset: 4,
			},
		 ],
	  },
	  options: {
		 responsive: true,
		 plugins: {
			legend: {
			  position: 'top',
			},
			tooltip: {
			  enabled: true,
			},
		 },
	  },
	});
 });
 </script>
 
 <style scoped>
 canvas {
	display: block;
	max-width: 600px;
	margin: 20px auto;
 }
 .charts-layout {
	display: flex;
	margin-top: 50px;
	justify-content: space-between;
 }
 .dr {
	background-color: white;
	border-radius: 15px;
	width: 700px;
 }
 h2 {
	font-size: 25px;
	color: #222653;
	font-weight: bold;
	padding: 20px 0;
 }
 .br {
	background-color: white;
	border-radius: 15px;
	width: 700px;
 }
 </style>
 