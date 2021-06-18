<template>
	<div id="app" class="app">
		<p>{{ value }}</p>
	</div>
</template>
<script>
export default {
	name: "app",
	data() {
		return {
			value: 0,
		};
	},
	computed: {
		exponent() {
			return Math.exp(this.value);
		},
	},
	mounted() {
		this.initInterval();
	},
	methods: {
		initInterval() {
			setInterval(() => this.value++, 1000);
		},
	},
};
</script>

<style lang="scss">
.app {
	margin-bottom: 10px;
	color: #00ffdf;
}
</style>
