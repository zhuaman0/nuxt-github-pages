<template>
	<div>
		<div class="header-container">
			<div class="header-title">
				<h1>customers</h1>
			</div>
			<div class="user-add">
				<button class="export">Export</button>
			</div>
		</div>
		<BoxesContainer class="con"/>
	</div>
</template>

<script setup>
import BoxesContainer from '~/components/Boxes/BoxesContainer.vue';
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
.con {
	padding: 0px 40px;
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
</style>