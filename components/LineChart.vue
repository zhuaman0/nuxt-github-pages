<script setup>
import { ref, watch, onMounted } from 'vue';
import { useFinanceStore } from '#build/imports';
const financeStore = useFinanceStore();
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from 'chart.js';
import { Line } from 'vue-chartjs';

const totalMoney = ref(0);
const minusMoney = ref(0);
const saleMoney = ref(0);
const withSale = ref(0);

// Chart data setup with initial values
const chartData = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Finance Overview',
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: '#4458FE',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Initialize with empty array
    },
  ],
});

// Fetching data on component mount
onMounted(async () => {
  await financeStore.fetchFinanceData();
  console.log("Fetched finance data:", financeStore.finances); // Log the fetched data to verify

  // Update the total money calculation
  totalMoney.value = financeStore.finances.reduce((sum, item) => {
    return sum + (item.money ? parseFloat(item.money) : 0);
  }, 0);

  // Update the minus money calculation
  minusMoney.value = financeStore.finances.reduce((sum, item) => {
    return sum + (item.money < 0 ? parseFloat(item.money) : 0);
  }, 0);

  // Update the sale money calculation
  saleMoney.value = financeStore.finances.reduce((sum, item) => {
    return sum + (item.sale ? parseFloat(item.sale) : 0);
  }, 0);

  // Update the total with sale calculation
  withSale.value = totalMoney.value - saleMoney.value;

  // Log the updated values
  console.log("Total Money:", totalMoney.value);
  console.log("Minus Money:", minusMoney.value);
  console.log("Sale Money:", saleMoney.value);
  console.log("With Sale:", withSale.value);
});

// Watch the reactive values and update chart data when they change
watch([totalMoney, minusMoney, saleMoney, withSale], () => {
  console.log("Updating chart data:", {
    totalMoney: totalMoney.value,
    minusMoney: minusMoney.value,
    saleMoney: saleMoney.value,
    withSale: withSale.value,
  });

  // Update the chart with new data
  chartData.value.datasets[0].data = [
    totalMoney.value,
    minusMoney.value,
    saleMoney.value,
    withSale.value,
  ];
});

// Registering the Chart.js components
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale);

// Chart options setup
const chartOptions = ref({
  responsive: true,
  plugins: {},
  scales: {
    x: {
      grid: {
        display: false, // Hide X-axis grid lines
      },
    },
    y: {
      grid: {
        display: true, // Show Y-axis grid lines
      },
    },
  },
});
</script>

<template>
  <div class="table-layout">
    <div class="table">
      <div class="header">
        <h1 class="customer">Customer Report</h1>
        <div class="months">
          <h1 class="co">3 Months</h1>
          <h1 class="co">6 Months</h1>
          <h1 class="mo">12 Months</h1>
        </div>
      </div>
      <!-- Render the Line chart -->
      <Line :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<style scoped>
/* Styles for the table layout */
.table {
  background-color: white;
  width: 100%;
  padding: 50px;
  border-radius: 15px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.months {
  display: flex;
  align-items: center;
}
.customer {
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
}
.co {
  border: 1px solid #F5F5FA;
  padding: 20px;
  margin: 0 10px;
  color: #3A3F63;
  border-radius: 4px;
}
.mo {
  color: #4458FE;
  font-weight: bold;
  border: 1px solid #4458FE;
  padding: 20px;
  margin: 0 10px;
  background-color: #F4F7FF;
  border-radius: 4px;
}
</style>
