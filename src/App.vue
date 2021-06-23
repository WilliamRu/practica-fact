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
        <div class="main-content__message-area-item message-bot">
          <div class="main-content__message-area-message">Привет!</div>
          <img :src="" alt="">
        </div>
        <div class="main-content__message-area-item message-bot" v-for="(message, index) in botMessage">
          <div class="main-content__message-area-message">{{ commandsBot }}</div>
        </div>

        <div class="main-content__message-area-item message-human" v-for="(message, index) in messages">
          <!--          {{summa(1,2)}}-->
          <!--          {{minus(1,2)}}-->
          <!--          {{multiple(1,2)}}-->
          <!--          {{division(4,2)}}-->
          <div class="main-content__message-area-message">{{ message }}</div>

        </div>
      </div>
    </main>

    <footer class="footer-content">
      <div class="Enter-Window">



        <textarea class="input-style" maxlength="1500" placeholder="Введите сообщение" v-model="userMessage"></textarea>
        <button class="input-button" type="button" @click="addMessages"></button>

      </div>
      <button @click="addCommandsBot">/help</button>
      <button @click="outputMemes">/memes</button>
    </footer>
	</div>
</template>

<script>


export default {

  name: "bot",

  components: {

  },
  data(){


    return {
      userMessage: '',
      messages: [],
      botMessage: [],
      commandsBot:'Лягушонок может: складывать (+), умножать (*), делить (/), вычитать (-). ',
      imgMemes: [
        'отправить.jpg',
        'отправить1.jpg',
      ]
    };
  },


  methods:{
    summa(a,b) {
      return a+b;
    },
    minus(a,b){
      return a-b;
    },
    multiple(a,b){
      return a*b;
    },
    division(a,b) {
      return a / b;
    },
    // hello() {
    //   if (this.messages.length == 0) {return alert('Массив dataFull пустой');}
    //   else {return alert('В массиве dataFull что-то есть');}
    // }
    addCommandsBot() {
      this.botMessage.push(this.commandsBot);
    },
    getRandomImg() {
      const randomValue = 'отправить.jpg'
      return `./assets/${randomValue}`
    },
    addMessages() {
      this.messages.push(this.userMessage);
      if(this.userMessage=='Прив') {
        alert('Приветттттттт')
      }
    }
  },





  mounted(){
    document.querySelector('textarea').addEventListener('input', function (e) {
      if(e.target.style.height<=100 || e.target.value.length<=100) {
        e.target.style.height = '1px';
        e.target.style.height = e.target.scrollHeight + 30 + "px";
      }
      if(e.target.value.length===0){
        e.target.style.height = '25px';
      }
    })
  },
}


</script>

<style lang="scss">




html{
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
  font-family: 'system-ui';
  color: white;
}

.header-content{
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
  background-: no-repeat url(../back.png);
  background-size: 450px 500px;
  height: 500px;
  &__message-area {
    display: flex;
    flex: 1 0;
    flex-direction: column;
    overflow-y: auto;
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
        margin-left: 195px;
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
        margin-left: 5px;
        padding: 0.5rem 0.75rem;
        -webkit-box-shadow: 0 5px 48px 2px rgba(34, 60, 80, 0.4) inset;
        -moz-box-shadow: 0 5px 48px 2px rgba(34, 60, 80, 0.4) inset;
        box-shadow: 0 5px 48px 2px rgba(34, 60, 80, 0.4) inset;
      }
    }
  }
.main-content__message-area-message{
  height: auto;
  width: 90%;
  word-break: break-all;
}

.main-content__message-area-message{
  height: auto;
  width: 90%;
  word-break: break-all;
}
.footer-content {
  background-color: #7c82ca;
  height: auto;
  padding-bottom: 20px;
}

.name-bots{
  color: #ffffff;
  font-size: 25px;
  font-weight: bold;
  padding-left: 95px;
}

.close-bot{
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
  margin-right: 10px;}
  
.input-style{
  text-decoration: none;
  resize: none;
  border-radius: 15px;
  width: 300px;
  height: 25px;
  margin-top: 28px;
  margin-bottom: 15px;
  outline:none;
  padding-left: 15px;
  padding-top: 10px;
  padding-right: 10px;
  overflow: auto;
}
.input-style::-webkit-input-placeholder       {opacity: 1; transition: opacity 0.3s ease;}
.input-style::-moz-placeholder                {opacity: 1; transition: opacity 0.3s ease;}
.input-style:-moz-placeholder                 {opacity: 1; transition: opacity 0.3s ease;}
.input-style:-ms-input-placeholder            {opacity: 1; transition: opacity 0.3s ease;}
.input-style:focus::-webkit-input-placeholder {opacity: 0; transition: opacity 0.3s ease;}
.input-style:focus::-moz-placeholder          {opacity: 0; transition: opacity 0.3s ease;}
.input-style:focus:-moz-placeholder           {opacity: 0; transition: opacity 0.3s ease;}
.input-style:focus:-ms-input-placeholder      {opacity: 0; transition: opacity 0.3s ease;}
.Enter-Window{
  display: flex;
  justify-content: center;
}
.input-button{
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 0;
  margin-top: 20px;
  outline:none;
  margin-left: 15px;
  background: url("../frog.png") no-repeat center;
  background-size: cover;
}

.input-button:hover{
  cursor: pointer;
}


</style>

