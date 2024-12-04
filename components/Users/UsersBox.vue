<template>
	<div class="users-layout">
		<div class="users-header">
			<div class="filter-section">
			<div class="search">
				<Icon class="search-icon" name="lucide:search"/>
				<input v-model="searchItem" placeholder="Search your customer…" type="search">
				<button @click="searchItems">Search</button>
			</div>
			<div class="dropdown-container">
				<select v-model="selectedBank" name="" id="options">
					<option value="">Kaspi Bank</option>
					<option value="">Smart Bank</option>
					<option value="">Halyk Bank</option>
					<option value="">Dostyq Bank</option>
					<option value="">Maksat Bank</option>
				</select>
			</div>
			
		</div>
		<div class="new-add">
			<Icon class="sort-icon" name="lucide:store" />
			<span>New added</span>
		</div>
		</div>
		<div class="titles-users">
			<div class="title">
				<input type="checkbox" name="" id="">
				<h1>Title</h1>
			</div>
			<div class="prices">
				<h1>Price</h1>
				<h1>Sale</h1>
				<h1>From</h1>
			</div>
			<h1>Phone number</h1>
			<h1>Created</h1>
		</div>
		<div class="shows-titles">
			<Users/>
		</div>
	</div>
</template>

<script setup>
import Users from './Users.vue';
import { useFinanceStore } from '#build/imports';
const financeStore = useFinanceStore();
const searchItem = ref('')
const selectedBank = ref('');
const searchItems = () => {
  const query = searchItem.value.toLowerCase();
  financeStore.finances = financeStore.finances.filter((item) => 
    item.title.toLowerCase().includes(query)
  );
};

onMounted(() => {
  financeStore.fetchFinanceData();
});
</script>

<style scoped>
.users-layout {
	background-color: white;
	width: 100%;
	height: 75vh;
	max-width: 1450px;
	margin: 30px auto;
	border-radius: 10px;
	
}
.users-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 40px 40px;
}
.filter-section {
	display: flex;
	align-items: center;
}
.search input {
	background-color: white;
	-webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
padding: 10px 40px;
border-radius: 10px;
}
.search {
	position: relative;
}
.search-icon {
	position: absolute;
	top: 10px;
	left: 10px;
	font-size: 23px;
	color: #858EBD;
}
.search input::placeholder {
	color: #858EBD;
}
select {
	background-color: white;
	-webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
padding: 10px 50px;
border-radius: 10px;
color: #858EBD;
margin-left: 20px;
outline: none;
}
select:focus {
	outline: none;
}
option {
	background-color: white;
	color: #858EBD;
	border-radius: 0;
	border: none;
	outline: none;
}
.new-add span {
	color: #858EBD;
	font-size: 17px;
	padding-left: 10px;
}
.sort-icon {
	font-size: 20px;
}
.shows-titles {
	padding: 30px 50px;
}
.titles-users {
	display: flex;
	padding: 20px 50px;
	justify-content: space-between;
	font-weight: bold;
	border-bottom: 1px solid #5A607F;
	color: #5A607F;
}
.title {
	display: flex;
	gap: 10px;
	align-items: center;
}
.prices {
	display: flex;
	align-items: center;
	gap: 100px;
}
.search button {
	background-color: #6A74A5;
	color: white;
	padding: 10px 30px;
	border-radius: 15px;
	margin-left: 10px;
}
</style>