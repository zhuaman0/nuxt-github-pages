<template>
	<div>
		<div class="header-container">
			<div class="header-title">
				<h1>knowledge</h1>
			</div>
		</div>
		<KnowledgeInfo class="know"/>
	</div>
</template>

<script setup>
import KnowledgeInfo from '~/components/KnowledgeInfo.vue';
</script>

<style scoped>
.header-container {
	display: flex;
	justify-content: space-between; 
	align-items: center;
	width: 100%;
	padding: 20px 40px;
}
.know {
	padding: 20px 50px;
}
.contain {
	width: 100%;
}
.header-title h1 {
	font-size: 30px;
	text-transform: uppercase;
	font-weight: 700;
	color: #3A3F63;
}
</style>