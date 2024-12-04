<template>
			<div class="info-container">
			<div class="first-info">
				<div class="first-header">
					<h1 class="active">All Wealth</h1>
					<h1>Financial</h1>
					<h1>Business</h1>
					<h1>Insurance</h1>
				</div>
				<div class="items">
					<div class="items ui">
						<img src="/assets/img/Rectangle.png" alt="">
					<div class="items-info">
						<h1>Why a Financial Crisis Is Actually the Best Time to Start a Company</h1>
						<p>started my digital marketing company in 2009 against the backdrop of a global financial crisis. Most people thought a young university graduate.</p>
						<span>Nov 10, 2020</span>
					</div>
					</div>
				</div>
				<div class="items">
					<div class="items ui">
						<img src="/assets/img/Rectangle (1).png" alt="">
					<div class="items-info">
						<h1>Why a Financial Crisis Is Actually the Best Time to Start a Company</h1>
						<p>started my digital marketing company in 2009 against the backdrop of a global financial crisis. Most people thought a young university graduate.</p>
						<span>Nov 10, 2020</span>
					</div>
					</div>
				</div>
				<div class="items">
					<div class="items ui">
						<img src="/assets/img/Rectangle (2).png" alt="">
					<div class="items-info">
						<h1>Why a Financial Crisis Is Actually the Best Time to Start a Company</h1>
						<p>started my digital marketing company in 2009 against the backdrop of a global financial crisis. Most people thought a young university graduate.</p>
						<span>Nov 10, 2020</span>
					</div>
					</div>
				</div>
			</div>
			<div class="second-info">
				<h1>Most Popular</h1>
				<div class="baby">
					<img src="/assets/img/Rectangle (3).png" alt="">
					<div class="bio">
						<h1>Emotional Freedom vs. Financial Freedom</h1>
						<span>Nov 10, 2020</span>
					</div>
				</div>
				<div class="baby">
					<img src="/assets/img/Rectangle (5).png" alt="">
					<div class="bio">
						<h1>Emotional Freedom vs. Financial Freedom</h1>
						<span>Nov 10, 2020</span>
					</div>
				</div>
				<div class="baby">
					<img src="/assets/img/Rectangle (4).png" alt="">
					<div class="bio">
						<h1>Emotional Freedom vs. Financial Freedom</h1>
						<span>Nov 10, 2020</span>
					</div>
				</div>
				<div class="baby">
					<img src="/assets/img/Rectangle (5).png" alt="">
					<div class="bio">
						<h1>Emotional Freedom vs. Financial Freedom</h1>
						<span>Nov 10, 2020</span>
					</div>
				</div>
			</div>
		</div>
</template>

<style scoped>
.items {
	margin: 20px 0;
}
.info-container {
	display: flex;
	justify-content: space-between;
}
.first-info {
	background-color: white;
	width: 900px;
	height: 75vh;
	border-radius: 15px;
	padding: 20px 30px;
}
.second-info {
	background-color: white;
	width: 450px;
	height: 75vh;
	border-radius: 15px;
	padding: 10px 20px;
}
.first-header {
	display: flex;
	gap: 25px;
}

.first-header h1 {
	font-size: 15px;
	font-weight: 500;
}
.active {
	color: #1E5EFF;
	border-bottom: 3px solid #1E5EFF;
}
.ui {
	display: flex;
}
.items {
	margin: 40px 0;
}
.items-info h1 {
	color: #222653;
	font-size: 25px;
	font-weight: bold;
}
.items-info p {
	color: #6A74A5;
	padding: 8px 0;
	font-size: 15px;
}
.items-info span {
	color: #6A74A5;
	font-size: 15px;
}
.items-info {
	padding-left: 20px;
}
.second-info h1 {
	font-size: 20px;
	text-transform: uppercase;
	font-weight: 700;
	color: #3A3F63;
}
.baby {
	margin: 30px 0;
	display: flex;
}
.bio h1 {
	font-size: 15px;
}
.bio {
	padding: 0 20px;
}
.bio span {
	color: #6A74A5;
	padding-bottom: 90px;
}
</style>