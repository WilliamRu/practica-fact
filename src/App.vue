<template>
	<div id="app" class="Export">
<!--    Hi! It`s my first page. I don`t know what i will write here.-->
    Это полученная экспонента: {{exponent}}
<!--    <button @click="initInterval"></button>-->
	</div>
</template>
<script>
export default {
  name: "App",
  data(){
    return {
        value: 0,
    };
  },
  computed:{
    exponent(){
      return Math.exp(this.value);
    }
  },
  mounted() {
    this.initInterval()
  },
  methods:{
    initInterval(){
      setInterval(() => this.value++, 1000);
    }
  },
};

</script>

<style lang="scss">
.Export{
  color: blueviolet;
  background-color: black;
  height: 440px;
  padding-top: 200px;
  text-align: center;
}
</style>
