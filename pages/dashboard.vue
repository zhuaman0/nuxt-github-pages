<script setup>
import LineChart from '~/components/LineChart.vue';
import Dashboad from '~/components/Dashboad.vue';
import PieChart from '~/components/PieChart.vue';
</script>

<template>
  <div class="dashboard">
	<!-- <div class="header-container">
			<div class="header-title">
				<h1>knowledge</h1>
			</div>
	</div> -->
	<Dashboad/>
    <div class="chart">
      <LineChart />
		<PieChart/>
    </div>
  </div>
</template>
<style scoped>
.dashboard {
  padding: 20px;
  text-align: center;
}

.chart {
  margin-top: 30px;
}
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
