<template>
		<div class="again-window">
			<Icon @click="op" class="po" name="lucide:x"/>
			<div class="window-con">
				<h1>Your account has been created!</h1>
				<p>Are you ready to manage your own wealth?</p>
				<div class="inputs">
					<input v-model="title" placeholder="Title" type="text">
					<input v-model="money" placeholder="Money" type="number">
					<input v-model="phone" placeholder="Phone" type="number">
					<input v-model="where" placeholder="From Where" type="text">
					<input v-model="sale" placeholder="Sale" type="number">
					<input v-model="from" placeholder="From" type="text">
				</div>
				<button @click="handleDataFetch">Create</button>
			</div>
		</div>
</template>

<script setup>
const emit = defineEmits();
import { useFinanceStore } from '#build/imports';
const useFinance = useFinanceStore();
function op() {
	emit('broClicked', 'Hi bRo')
}
const title = ref('')
const money = ref('')
const phone = ref('')
const where = ref('')
const sale = ref('')
const from = ref('')
const handleDataFetch = async () => {
	const data = {
		title: title.value,
		money: money.value,
		phone: phone.value,
		where: where.value,
		sale: sale.value,
		from: from.value
	}
	const finance = await useFinance.sendFinanceData(data)
	if(finance) {
		alert('Created new finance power')
	}else {
		alert('You have and problem')
	}
}
</script>



<style scoped>
.again-window {
	position: absolute;
	display: flex;
	justify-content: center;
	background-color: #3A3F63;
	padding: 30px 40px;
	text-align: center;
	width: 400px;
	height: 100vh;
	-webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
top: 0;
right: 0;
 }
 .po {
	position: absolute;
	top: 10px;
	left: 10px;
	color: white;
	font-size: 20px;
 }
 .window-con h1{
	color: white;
	font-weight: bold;
	font-size: 25px;
 }
 .window-con p {
	color: white;
	font-size: 20px;
 }
 .window-con button {
	background-color: white;
	color: #3A3F63;
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
 .inputs {
	display: flex;
	flex-direction: column;
	margin: 10px 0;
 }
 .inputs input {
	margin: 5px 0;
	padding: 10px 20px;
	border-radius: 10px;
 }
 </style>