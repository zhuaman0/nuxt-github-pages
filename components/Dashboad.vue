<template>
	<div>
		<div class="dashboard-layout">
			<h1>dashboard</h1>
			<div class="dash-boxes">
				<div class="hover box1">
					<p>Total Money</p>
					<div class="numbers">
						<h1>{{ totalMoney }}</h1>
						<div class="percenta">
							<p>11%</p>
							<Icon name="lucide:arrow-up"/>
						</div>
					</div>
				</div>
				<div class="hover box2">
					<p>Sended Moneys</p>
					<div class="numbers">
						<h1>{{ minusMoney }}</h1>
						<div class="percenta">
							<p>17%</p>
							<Icon name="lucide:arrow-up"/>
						</div>
					</div>
				</div>
				<div class="hover box3">
					<p>Sales</p>
					<div class="numbers">
						<h1>{{ saleMoney }}</h1>
						<div class="percenta">
							<p>23%</p>
							<Icon name="lucide:arrow-up"/>
						</div>
					</div>
				</div>
				<div class="hover box4">
					<p>Total money with sale</p>
					<div class="numbers">
						<h1>{{ withSale }}</h1>
						<div class="percenta">
							<p>9%</p>
							<Icon name="lucide:arrow-up"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useFinanceStore } from '#build/imports';
import { parse } from 'vue/compiler-sfc';
const financeStore = useFinanceStore();
const totalMoney = ref(0);
const minusMoney = ref(0)
const saleMoney = ref(0)
const withSale = ref(0)
onMounted(async () => {
  await financeStore.fetchFinanceData();
  totalMoney.value = financeStore.finances.reduce((sum, item) => {
    return sum + (item.money ? parseFloat(item.money) : 0);
  }, 0);
  minusMoney.value = financeStore.finances.reduce((sum, item) => {
	return sum + (item.money < 0 ? parseFloat(item.money) : 0)
  }, 0)
  saleMoney.value = financeStore.finances.reduce((sum, item) => {
	return sum + (item.sale ? parseFloat(item.sale) : 0)
  }, 0)
  withSale.value = totalMoney.value - saleMoney.value
});
</script>

<style scoped>
.dashboard-layout h1 {
	font-size: 30px;
	text-transform: uppercase;
	font-weight: 700;
	color: #3A3F63;
}
.hover {
	background-color: white;
	border-radius: 15px;
	width: 350px;
	padding: 20px 30px;
	margin: 20px 0;
}
.dash-boxes {
	display: flex;
	justify-content: space-between;
}
.numbers {
	display: flex;
	justify-content: space-between;
	margin: 10px 0;
}
.percenta {
	display: flex;
	align-items: center;
	gap: 5px;
}
.percenta p {
	color: #00D0B5;
	font-size: 20px;
}
.box2 .percenta p {
	color: #FF2855;
	font-size: 20px;
}
.percenta p {
	color: #00D0B5;
	font-size: 20px;
}
.percenta p {
	color: #00D0B5;
	font-size: 20px;
}
.box2 h1 {
	color: #FF2855;
}
</style>