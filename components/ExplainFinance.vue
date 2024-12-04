<template>
	<div>
		<div class="boxess">
			<div class="boxes box1">
				<div class="boxes-header">
					<h1>U cap</h1>
					<Icon name="lucide:badge-check"/>
				</div>
				<div class="boxes-money">
					<h1>3.2B</h1>
					<p>Finished Paid</p>
				</div>
				<div class="boxes-return">
					<h1>Return</h1>
					<p>15.5%</p>
				</div>
			</div>
			<div class="boxes box2">
				<div class="boxes-header">
					<h1>Yesop</h1>
					<Icon name="lucide:badge-check"/>
				</div>
				<div class="boxes-money">
					<h1>2.8B</h1>
					<p>Internet Paid</p>
				</div>
				<div class="boxes-return">
					<h1>Return</h1>
					<p>15.5%</p>
				</div>
			</div>
			<div class="boxes box3">
				<div class="boxes-header">
					<h1>Smart Account</h1>
					<Icon name="lucide:badge-check"/>
				</div>
				<div class="boxes-money">
					<h1>5.6B</h1>
					<p>All the Paid</p>
				</div>
				<div class="boxes-return">
					<h1>Return</h1>
					<p>15.5%</p>
				</div>
			</div>
			<div class="boxes box4">
				<div class="boxes-header">
					<h1>Ret Os u</h1>
					<Icon name="lucide:badge-check"/>
				</div>
				<div class="boxes-money">
					<h1>1.3B</h1>
					<p>Shop Paid</p>
				</div>
				<div class="boxes-return">
					<h1>Return</h1>
					<p>15.5%</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

</script>

<style scoped>
.header-explain {
	display: flex;
	justify-content: space-between;
	font-size: 22px;
	font-weight: bold;
}
.boxes {
	border: 1px solid black;
	background-color: white;
	border-radius: 20px;
	padding: 10px 30px;
	width: 300px;
	margin: 20px 0;
}
.boxess {
	display: flex;
	justify-content: space-between;
}
.boxes-header {
	display: flex;
	justify-content: space-between;
	font-size: 17px;
	font-weight: bold;
}
.boxes-header h1 {
	color: black;
}
.box2 {
	background-color: #6A74A5;
	color: white;
}
.box2 h1 {
	color: white;
}
.box2 {
	border: none;
}
.boxes-money {
	display: flex;
	justify-content: space-between;
	padding: 15px 0;
	align-items: center;
}
.boxes-money h1 {
	font-size: 40px;
	font-weight: bold;
}
.boxes-return {
	display: flex;
	justify-content: space-between;
	padding-top: 15px;
	font-size: 10px;
}
</style>