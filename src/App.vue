<template>
  <div id="bot" class="chat-bot">
    <header class="header-content">
      <span class="close-bot"></span>
      <img class="logo" src="../one.png">
      <span class="name-bots">Frog-Bot</span>
      <p class="bio">NO HORNY.</p>
      <p class="bio">only memes! & math</p>
    </header>
    <main class="main-content">
      <div class="main-content__message-area">
        <div class="main-content__message-area-item"></div>


      </div>
    </main>
    <footer class="footer-content">
      <img src="../frog.png" class="frog">
    </footer>
  </div>
</template>
<script>
export default {
  name: "bot",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {
    this.initInterval();
  },
};
</script>

<style lang="scss">
.chat-bot {
  /*background-color: #7c82ca;*/
  margin: 0 auto;
  background-color: #fff;
  height: 700px;
  width: 450px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .3),
  -23px 0 20px -23px rgba(0, 0, 0, .8),
  23px 0 20px -23px rgba(0, 0, 0, .8),
  0 0 40px rgba(0, 0, 0, .1) inset;
}

.header-content {
  background-color: #7c82ca;
  height: 100px;
}

.logo {
  margin: 10px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: aliceblue solid 2px;
  float: left;
}

.main-content {
  //background-color: floralwhite;
  background: no-repeat url(../back.png);
  background-size: 450px 500px;
  height: 500px;

  &__message-area {
    overflow-y: auto;
    width: 100%;
    max-height: 100%;
    height: 100%;

    &-item {
      width: 100%;
      height: 30px;
      background: rgba(0, 0, 0, .1);
      margin-bottom: 20px;
    }
  }
}

.footer-content {
  background-color: #7c82ca;
  height: 100px;
}

.name-bots {
  color: #ffffff;
  font-size: 25px;
  font-weight: bold;
  margin-left: 25px;

}

.bio {
  color: #ffffff;
  font-size: 15px;
  margin-left: 45px;
}

.close-bot {
  //display: flex;
}
</style>