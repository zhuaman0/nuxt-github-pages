<template>
	<div>
		<div class="boxes-container">
			<div class="boxes-header">
				<div class="boxes-first">
					<h1 @click="firstTab" :class="{ active: activeTab === 1}">All</h1>
				<div @click="secondTab" class="news">
					<h1 :class="{ active: activeTab === 2}" >News</h1>
					<p>4 New</p>
				</div>
				<div class="promotions">
					<h1  >Promotions</h1>
					<p>12 New</p>
				</div>
				</div>
				<div class="boxes-second">
					<div class="i">
						<Icon class="bolt" name="lucide:bolt" />
					</div>
					<div class="i">
						<Icon class="bolt" name="lucide:refresh-ccw" />
					</div>
				</div>
			</div>
			<BoxesItems v-if="activeTab === 1" class="ch"/>
			<NewItems v-if="activeTab ===2" class="ch"/>
		</div>
	</div>
</template>

<script setup>
import BoxesItems from './BoxesItems.vue';
import NewItems from './NewItems.vue';
const activeTab = ref(1)
const secondTab = () => {
	activeTab.value = 2
}
const firstTab = () => {
	activeTab.value = 1
}
</script>

<style scoped>
.boxes-container {
	background-color: white;
	width: 100%;
	height: 75vh;
	max-width: 1450px;
	margin: 30px auto;
	border-radius: 10px;
}
.ch {
	padding: 20px 50px;
}
.boxes-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 50px;
	border-bottom: 1px solid #979797;
}
.boxes-first {
	display: flex;
}
.news {
	display: flex;
	gap: 10px;
	padding: 0 100px;
}
.news P {
	background-color: #FF2855;
	color: white;
	font-size: 10px;
	display: flex;
	align-items: center;
	padding: 1px 10px;
	border-radius: 50px;
}
.promotions p {
	background-color: #FF2855;
	color: white;
	font-size: 10px;
	display: flex;
	align-items: center;
	padding: 2px 8px;
	border-radius: 50px;
}
.promotions  {
	display: flex;
	gap: 10px;
}
.boxes-first h1 {
	font-size: 18px;
}
.bolt {
	font-size: 20px;
	background-color: #858EBD;
}
.boxes-second {
	display: flex;
}
.i {
	background-color: #F4F7FF;
	margin: 0 10px;
	padding: 7px 7px;
	display: flex;
	align-items: center;
	border-radius: 10px;
}
.active {
	color: #1E5EFF;
	font-weight: bold;
	border-bottom: 3px solid #1E5EFF;
	width: 70px;
	text-align: center;
}
</style>