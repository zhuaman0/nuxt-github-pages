<template>
	<div>
		<h1 v-if="titleFalse">{{ title }}</h1>
		<input v-model="inputValue" type="text">
		<button @click="showValue">Show/else</button>
	</div>
</template>

<script setup>
const title = ref('asdf')
const inputValue = ref('')
const titleFalse = ref(false)
const showValue = () => {
	titleFalse.value = true;
}
</script>

<style scoped>

</style>