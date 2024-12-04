<template>
	<div>
		<div v-if="valueMoney" class="item-con">
			<p>Your money is more than 5200000. Consider doing some financial planning, like investing or controlling your expenses.</p>
		</div>
		<div v-if="valueMore" class="item-con">
			<p>Your money is more than 166520000. Consider doing some financial planning, like investing or controlling your expenses.</p>
		</div>
		<div v-else class="item-empty">
			<div class="empty-">
				<img src="/assets/img/00.png" alt="">
			</div>
			<h1>There is no messages</h1>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useFinanceStore } from '#build/imports';

const financeStore = useFinanceStore();
const totalMoney = ref(0);

onMounted(async () => {
  await financeStore.fetchFinanceData();
  totalMoney.value = financeStore.finances.reduce((sum, item) => {
    return sum + (item.money ? parseFloat(item.money) : 0);
  }, 0);
});
const valueMoney = computed(() => totalMoney.value > 5200000);
const valueMore = computed(() => totalMoney.value > 166520000);
</script>

<style scoped>
.item-con {
	background-color: #858EBD;
	-webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
	-moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
	box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
	padding: 20px 20px;
	border-radius: 10px;
	color: white;
	font-size: 20px;
	margin: 20px 0;
}
.item-empty {
	display: flex;
	flex-direction: column;
	color: #858EBD;
	text-align: center;
	align-items: center;
	margin: 20px 0;
	font-size: 20px;
}
</style>
