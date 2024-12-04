<template>
	<table>
	  <tbody>
		 <tr
			v-for="(fin, index) in financeStore.finances"
			:key="index"
			@click="navigateToDetails(fin)"
		 >
			<td>{{ fin.title }}</td>
			<td>{{ fin.money }}$</td>
			<td>{{ fin.sale }}$</td>
			<td>{{ fin.phone }}</td>
			<td>{{ fin.from }}</td>
			<td>{{ fin.where }}</td>
		 </tr>
	  </tbody>
	</table>
 </template>
 
 <script setup>
 import { useRouter } from 'vue-router';
 import { useFinanceStore } from '@/stores/financeStore';
 
 const router = useRouter();
 const financeStore = useFinanceStore();
 
 const navigateToDetails = (fin) => {
	router.push({
	  path: `/finance/${fin.id}`,
	  query: {
		 title: fin.title,
		 money: fin.money,
		 sale: fin.sale,
		 phone: fin.phone,
		 where: fin.where,
	  },
	});
 };
 </script>
 
 
 <style scoped>
 .loader {
	padding: 20px 40px;
 }
 
 table {
	width: 100%;
	border-collapse: collapse;
 }
 
 th, td {
	padding: 10px;
	text-align: left;
	border: 1px solid #ddd;
 }
 
 th {
	background-color: #f4f4f4;
	font-weight: bold;
 }
 
 td {
	font-size: 14px;
 }
 
 .type {
	background-color: white;
	color: #858EBD;
	box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
	padding: 7px 10px;
	font-size: 15px;
	display: flex;
	align-items: center;
	gap: 5px;
	font-weight: bold;
 }
 .empty {
	display: flex;
	justify-content: center;
 }
 </style>
 