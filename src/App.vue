<template>

	<div id="bot" class="chat-bot">

    <header class="header-content">
      <span class="close-bot"></span>
      <img class="logo" src="../one.png" alt="Логотип">
      <span class="name-bots">Frog-Bot</span>
      <p class="bio">NO HORNY.</p>
      <p class="bio">only memes! & math</p>
    </header>

    <main class="main-content">
      <div class="main-content__message-area" id="main-content">

        <div
            class="main-content__message-area-item"
            v-for="(item, index) in messages" :key="index"
            :class="[{'message-bot': item.type === 'bot'},{'message-human': item.type === 'human'}]">
          <div class="main-content__message-area-message" v-text="item.message"/>

        </div>
      </div>
      <button class="function_button help" @click="addMessages(commandsBot, 'bot') ">/help</button>
      <button class="function_button meme">/meme</button>
    </main>

    <footer class="footer-content">
      <div class="Enter-Window">
        <textarea class="input-style" maxlength="1500" placeholder="Введите сообщение" v-model="userMessage"></textarea>
        <button class="input-button" type="button" @click="addMessages(userMessage, 'human')"></button>
      </div>
    </footer>

	</div>

</template>

<script>

import example from "./components/example.vue"

export default {
  name: "bot",

  components: {
    example
  },

  data(){

    return {
      userMessage: '',
      messages: [],
      botMessage: [],
      commandsBot:'Лягушонок может: складывать (+), умножать (*), делить (/), вычитать (-). ',
      blockBot: 'Привет! Я фрог-бот:) Напиши мне команду'
    };
  },
  methods:{
    addMessages(message, type) {
      if (!!message) {
        this.messages.push({message, type});
        this.clearMessageArea();
      }
      if(message === 'Привет'){
        this.addMessages(this.blockBot, 'bot');
      }
    },
    
    clearMessageArea() {
      this.userMessage = ''
    }
  },

  computed: {},

  mounted() {
    document.querySelector('textarea').addEventListener('input', function (e) {
      if (e.target.style.height <= 100 || e.target.value.length <= 100) {
        e.target.style.height = '1px';
        e.target.style.height = e.target.scrollHeight + 30 + "px";
      }

      if (e.target.value.length == 0) {
        e.target.style.height = '25px';
      }
    });
  },
}

</script>

<style lang="scss">
html {
  font-family: system-ui;
}

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
  color: white;
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

.bio {
  color: #ffffff;
  font-size: 14px;
  margin-top: -0.1px;
  margin-left: 45px;
}

.main-content {
  background: no-repeat url(../back.png);
  background-size: 450px 500px;
  height: 500px;

  &__message-area {
    display: flex;
    flex: 1 0;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    max-height: 100%;
    height: 100%;

    &-item {
      display: flex;
      justify-content: center;
      height: auto;
      font-weight: bold;
      width: 50%;
      padding: 0.5rem 0.75rem;
      flex-shrink: 0;
      margin-bottom: 8px;
      vertical-align: center;
      text-align: center;
      right:0;

      }
      .message-human{
        color: rgba(245, 245, 245, 1);
        background: radial-gradient(circle, rgba(0, 194, 10, .7), rgba(0, 181, 9, .7));
        margin-left: 175px;
        border-radius: 30px;
        padding: 0.5rem 0.75rem;
        -webkit-box-shadow: 0 5px 48px 2px rgba(34, 60, 80, 0.2) inset;
        -moz-box-shadow: 0 5px 48px 2px rgba(34, 60, 80, 0.2) inset;
        box-shadow: 0 5px 48px 2px rgba(34, 60, 80, 0.2) inset;
      }
      .message-bot{
        color: rgba(245, 245, 245, 1);
        background: radial-gradient(circle, rgba(148, 147, 143, .7), rgba(122, 122, 118, .7));
        border-radius: 30px;
        margin-left: 15px;
        padding: 0.5rem 0.75rem;
        -webkit-box-shadow: 0 5px 48px 2px rgba(34, 60, 80, 0.4) inset;
        -moz-box-shadow: 0 5px 48px 2px rgba(34, 60, 80, 0.4) inset;
        box-shadow: 0 5px 48px 2px rgba(34, 60, 80, 0.4) inset;
      }
    }
  }

.main-content__message-area-message {
  height: auto;
  width: 90%;
  word-wrap: break-word;
}

.footer-content {
  background-color: #7c82ca;
  height: auto;
  padding-bottom: 20px;
}

.name-bots {
  color: #ffffff;
  font-size: 25px;
  font-weight: bold;
  padding-left: 95px;
}

.close-bot {
  display: flex;
}

.input-style {
  text-decoration: none;
  resize: none;
  border-radius: 15px;
  width: 300px;
  height: 25px;
  margin-top: 28px;
  outline: none;
  padding-left: 15px;
  padding-top: 10px;
  padding-right: 10px;
  overflow: auto;
}

.input-style::-webkit-input-placeholder {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.input-style::-moz-placeholder {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.input-style:-moz-placeholder {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.input-style:-ms-input-placeholder {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.input-style:focus::-webkit-input-placeholder {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.input-style:focus::-moz-placeholder {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.input-style:focus:-moz-placeholder {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.input-style:focus:-ms-input-placeholder {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.Enter-Window {
  display: flex;
  justify-content: center;
}

.input-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 15px;
  margin-right: 10px;
}

.input-style{
  text-decoration: none;
  resize: none;
  border-radius: 15px;
  width: 300px;
  height: 25px;
  margin-top: 38px;
  margin-bottom: 15px;
  outline: none;
  padding-left: 15px;
  padding-top: 10px;
  padding-right: 10px;
  overflow: auto;
}

.input-style::-webkit-input-placeholder {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.input-style::-moz-placeholder {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.input-style:-moz-placeholder {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.input-style:-ms-input-placeholder {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.input-style:focus::-webkit-input-placeholder {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.input-style:focus::-moz-placeholder {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.input-style:focus:-moz-placeholder {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.input-style:focus:-ms-input-placeholder {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.Enter-Window {
  display: flex;
  justify-content: center;
}
.function_button {
  width: 70px;
  background: #7c82ca;
  color: white;
  margin-left: 30px;
  margin-bottom: 5px;
  border-radius: 30px;
  border: aliceblue solid 2px;
}
.function_button:hover{
  cursor: pointer;
}
.input-button{
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 0;
  margin-top: 30px;
  outline: none;
  margin-left: 15px;
  background: url("../frog.png") no-repeat center;
  background-size: cover;
  cursor: pointer;
}
  .input-button:hover {
    border: 1px solid #5e5c5c;
  }
</style>