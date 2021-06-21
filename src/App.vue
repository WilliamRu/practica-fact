<template>
	<div id="bot" class="chat-bot">
    <header class="header-content">
      <span class="close-bot"></span>
      <div class="name-bots">Frog-Bot</div>
    </header>
    <main class="main-content">jj</main>
    <footer class="footer-content">jj</footer>
	</div>
</template>
<script>
export default {
  name: "bot",
  data(){
    return {

    };
  },
  computed:{

    },
  mounted() {

  },
  methods:{

  },
};

</script>

<style lang="scss">
.chat-bot{
  /*background-color: #7c82ca;*/
  margin:0 auto;
  background-color: black;
  height: 500px;
  width: 450px;
  box-shadow:
      0 1px 4px rgba(0, 0, 0, .3),
      -23px 0 20px -23px rgba(0, 0, 0, .8),
      23px 0 20px -23px rgba(0, 0, 0, .8),
      0 0 40px rgba(0, 0, 0, .1) inset;

}
.header-content{
  background-color: #7c82ca;
  height: 100px;
}
.main-content{
  background-color: floralwhite;
  height: 300px;
}
.footer-content{
  background-color: #7c82ca;
  height: 100px;
}
.name-bots{
  color: #ffffff;
  font-size: 25px;
  font-weight: bold;
  padding-left: 95px;
  padding-top: 35px;
}
.close-bot{
  display: flex;
}
</style>
