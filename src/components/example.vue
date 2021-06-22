<template>
  <div id="example">
    <div v-show="visible">
      <ul>
        <li>d</li>
        <li>d</li>
        <li>d</li>
      </ul>
    </div>
    <button v-on:click="visible=!visible">{{visible?'Скрыть':'/help'}}</button>
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
};
</script>

<style lang="scss">

</style>