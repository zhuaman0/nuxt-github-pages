<template>
	<div class="aside-layout">
		<div class="aside-routes">
			<div class="routes" v-for="(items, index) in sidebarItems" :key="index" @click="$router.push(`${items.link}`)" :class="{active: currentRoute === items.link}">
			<Icon class="text-xl" :name="items.icon" />
			<h1>{{ items.label }}</h1>
		</div>
		</div>
	</div>
</template>

<script setup>
import { sidebarItems } from '~/utils/sidebar';
import { useRoute } from 'vue-router';
const route = useRoute();
const currentRoute = route.path;
</script>

<style scoped>
.routes {
	display: flex;
	align-items: center;
	color: #B3C0E7;
	gap: 20px;
	cursor: pointer;
	font-weight: bold;
	padding: 15px 20px;
}
.aside-layout {
	display: flex;
	justify-content: start;
}
.routes:hover {
	background-color: rgba(255, 255, 255, 0.1);
	width: 100%;
	border-radius: 10px;
}
.active {
	background-color: #4F8AFF;
	color: white;
	border-radius: 10px;
}
.aside-layout {
	display: flex;
	justify-content: start;
	margin: 10px 0;
}
.aside-routes {
	width: 100%;
}
</style>