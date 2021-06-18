<template>
  <div id="app">
    <p>{{ value }}</p>
    <p>{{ exponent }}</p>
  </div>
</template>
<script>

export default {
  name: "app",
  data() {
    return {
      value: 0,
    }
  },
  computed: {
    exponent() {
      return Math.exp(this.value)
    }
  },
  mounted() {
    this.initInterval()
  },
  methods: {
    initInterval() {
      setInterval(() => this.value++, 1000);
    }
  },
};
</script>

<style lang="scss">
</style>