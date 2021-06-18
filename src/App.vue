<template>
  <div id="app" class="Export">
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
.Export {
  color: blueviolet;
  background-color: black;
  height: 440px;
  padding-top: 200px;
  text-align: center;
}
</style>
