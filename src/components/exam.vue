<template>
  <div id="exam">
    <button @click="count++">Привет - </button>
  </div>
</template>
<script>
export default{
  name: "exam",
  data(){
    return{
      count: 0,
    }
}
}
</script>