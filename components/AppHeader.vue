<template>
	<div class="layout-header">
		<div class="header">
			<img src="/public/Logo.png" alt="">
		</div>
		<div class="header-side">
			<div class="header-items">
				<div class="search">
					<Icon class="search-icon" name="lucide:search"/>
					<input placeholder="Search" type="search">
				</div>
				<div class="notification">
					<!-- Display the count based on conditions -->
					<h1 v-if="countBaby > 0" class="length">{{ countBaby }}</h1>
					<Icon class="bell" name="mdi:bell"/>
				</div>
				<div @click="navigateTo('/register')" class="profile-icon">
					<img :src="avatarUrl" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useFinanceStore } from '#build/imports';
import { ref, computed, onMounted } from 'vue';

const totalLength = ref(0);
const countBaby = ref(0); // This will hold the calculated count
const financeStore = useFinanceStore();

onMounted(async () => {
  await financeStore.fetchFinanceData();
  totalLength.value = financeStore.finances.reduce((sum, item) => {
    return sum + (item.money ? parseFloat(item.money) : 0);
  }, 0);
});

const valueMoney = computed(() => totalLength.value > 5200000);
const valueMore = computed(() => totalLength.value > 166520000);

watch([valueMoney, valueMore], ([newValueMoney, newValueMore]) => {
  if (newValueMoney && newValueMore) {
    countBaby.value = 2; 
  } else if (newValueMoney || newValueMore) {
    countBaby.value = 1; 
  } else {
    countBaby.value = 0;
  }
});
const avatarUrl = ref('');
onMounted(() => {
  const storedAvatar = localStorage.getItem('avatar');
  if (storedAvatar) {
    avatarUrl.value = storedAvatar;
  } else {
    console.log("You have not any image");
  }
});
</script>


<style scoped>
.layout-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.search input {
	background-color: #F5F5FA;
	padding: 7px 0;
	padding-left: 40px;
	border-radius: 30px;
	color: black;
}
.search {
	position: relative;
}
.search-icon {
	position: absolute;
	top: 8px;
	left: 10px;
	color: #858EBD;
	font-size: 20px;
}
.search input::placeholder {
	color: #858EBD;
	font-weight: 500;
}
.search input:focus {
	outline: none;
}
.header-items {
	display: flex;
	align-items: center;
	gap: 30px;
}
.bell {
	color: #858EBD;
	font-size: 30px;
}
.length {
	color: white;
	background-color: red;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	font-weight: bold;
	position: absolute;
	top: -3px;
	left: 15px;
	font-size: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 999;
}
.notification {
	position: relative;
}
.profile-icon {
	width: 40px;
	height: 40px;
	color: white;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
}
.profile-icon img {
	border-radius: 50%;
	width: 50px;
	height: 40px;
}
</style>