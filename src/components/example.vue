<template>
  <div id="example">
    <div v-if="visible" >
      <ul class="botMessage">
        <li>d</li>
        <li>d</li>
        <li>d</li>
        <li>d</li>
        <li>d</li>
        <li>d</li>
        <li>d</li>
      </ul>
      <ul class="botMessage">
        <li>d</li>
        <li>d</li>
        <li>d</li>
        <li>d</li>
        <li>d</li>
        <li>d</li>
        <li>d</li>
      </ul>
    </div>
    <button v-on:click="visible">fhcb</button>
  </div>
</template>
<script>

export default {
  name: "example",
  data(){
    return {
      visible: true
    };
  },
  methods: {

  }
};
</script>

<style lang="scss">
.botMessage{
  background: white;
  box-sizing: content-box;
}
</style>