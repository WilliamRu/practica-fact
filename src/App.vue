<template>
  <div id="bot">
    <button class="buttonOpen" id="buttonOpen" v-show="!visible" v-on:click="visible=!visible"></button>
    <transition name="fade">
      <div class="chat-bot" v-show="visible" id="chat-bot">
        <header class="header-content">
          <button type="button" class="btn-modal" @click="showModal">
            Open Modal!
          </button>
          <modal v-if="isModalVisible" :url-msg="urlMessage" @close="closeModal" @no-fetch-url="noFetchUrlHandler"/>
          <span class="close-bot"></span>
          <img class="logo" src="../one.png" alt="Логотип">
          <span class="name-bots">Frog-Bot</span>
          <p class="bio">NO HORNY.</p>
          <p class="bio">only memes! & math</p>
          <button v-on:click="visible=!visible" class="buttonClose" id="buttonClose">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1"
                 x="0px" y="0px" viewBox="0 0 212.982 212.982" style="enable-background:new 0 0 212.982 212.982;"
                 xml:space="preserve">
            <g id="Close">
              <path style="fill-rule:evenodd;clip-rule:evenodd;"
                    d="M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312   c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312   l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937   c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z"/>
            </g>
            </svg>
          </button>
        </header>
        <main class="main-content">
          <div class="main-content__message-area" id="main-content">
            <div
                class="main-content__message-area-item"
                v-for="(item, index) in messages" :key="index"
                :class="[
                {'message-bot': item.type === 'bot' || item.type === 'bot-btn'},
                {'message-human': item.type === 'human'},
                {'message-bot message-img-bot': item.type === 'bot-image'}
            ]"
            >
              <img :src="item.message" alt="" v-if="item.type === 'bot-image'" width="380px" height="380px">
              <div class="main-content__message-area-message" v-else-if="item.type === 'bot-btn'">
                <div>Какой вид запроса будет отправлен?(GET/POST)</div>
                <div>
                  <button @click="addMessages('GET', 'human')">GET</button>
                  <button @click="addMessages('POST', 'human')">POST</button>
                </div>
              </div>
              <div class="main-content__message-area-message" v-html="item.message" v-else/>
            </div>
          </div>
          <button class="function_button help" @click="addMessages('', 'help')">/help</button>
          <button class="function_button meme" @click="addMessages(getRandomImage(), 'bot-image')">/meme</button>
        </main>
        <footer class="footer-content">
          <div class="Enter-Window">
            <textarea
                :disabled="disabledTextArea"
                class="input-style" autofocus maxlength="200" placeholder="Введите сообщение"
                v-model="userMessage" v-on:keyup.13=" addMessages(userMessage.trim(), 'human')"></textarea>
            <button class="input-button" type="button" @click="addMessages(userMessage, 'human')"></button>
          </div>
        </footer>
      </div>
    </transition>
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";
import {chatController} from "./components/ChatController.js";
import {mathActions} from "./components/MathActions.js";
import {memesArray} from "@/components/memesArray";

const hiRegExp = new RegExp(/привет/gi);
const apiRegExp = new RegExp(/\/API/gi);
const exitRegExp = new RegExp(/\/exit/gi);
const blockBot = 'Привет! Я фрог-бот:) Напиши мне команду';
const botUndefinedCommands = 'Я не знаю такой команды';
const commandsBot = 'Лягушонок может: складывать (+), умножать (*), делить (/), вычитать (-). Так же он умеет отправлять мемы. Слова математических действий следует писать в соответствии с правилами русского языка. ';
let messageHello = true;
const botApiReactionsUrl = 'Введите Api ( url ) адрес нужного сайта';
const botApiReactionsPayload = 'Введите нагрузку для POST запрхоса в формате json';
export default {
  name: "app",
  components: {
    Modal
  },
  data() {
    return {
      isModalVisible: false,
      visible: false,
      userMessage: '',
      messages: [],
      botMessage: [],
      urlMessage: '',
      dialog: false,
      apiDataCache: {
        url: '',
        requestType: '',
        payload: {},
      },
      disabledTextArea: false
    };
  },
  methods: {
    addMessages(message, type) {
      if (!!message || message === 0) {
        this.messages.push({message, type});
        this.clearMessageArea();
      }
      if (type === 'human' && !!this.dialog && message === 'exit') {
        this.dialog = false
      }
      if (this.dialog && this.dialog === 'method-step' && type === "human") {
        this.apiDataCache.requestType = message;
        if (message === "GET") {
          this.apiReaction()
        }
        if (message === "POST") {
          this.dialog = 'payload-step'
          this.addMessages(botApiReactionsPayload, 'bot');
        }
      }
      if (this.dialog && this.dialog === 'url-step' && type === "human") {
        const valid = /^(ftp|http|https):\/\/[^ "]+$/.test(message);
        if (valid) {
          this.apiDataCache.url = message
          this.dialog = 'method-step'
          this.disabledTextArea = true
          this.addMessages('1', 'bot-btn');
        } else {
          this.addMessages('Строка не является адресом(url)', 'bot');
        }
      }
      if (type === 'help') {
        this.addMessages(commandsBot, 'bot');
      }
      if (hiRegExp.test(message) && type === 'human' && messageHello === true) {
        messageHello = false;
        this.addMessages(blockBot, 'bot');
      }
      if (type === 'human' && apiRegExp.test(message)) {
        this.dialog = 'url-step'
        this.addMessages(botApiReactionsUrl, 'bot');
      }
      if (type === 'human') {
        let splitMessage = message.replace(/\n/ig, '').replace(/\s+/g, ' ').split(' ');
        this.mathCalculate(splitMessage);
        // console.log(splitMessage)
      }

      if (type !== 'bot-image') {
        this.clearMessageArea();
      }
    },

    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    clearMessageArea() {
      this.userMessage = null;
    },
    getRandomImage() {
      return memesArray[Math.floor(Math.random() * memesArray.length)];
    },
    async apiReaction() {
      let payload = {}
      if (this.apiDataCache.requestType === "POST") {
        payload = {
          method: this.apiDataCache.requestType,
          data: JSON.stringify(
              ...this.apiDataCache.payload
          )
        }
      }
      try {
        const res = await fetch(this.apiDataCache.url, payload)
        if (res.ok) {
          const result = await res.json()
          console.log(result);
        } else {
          throw new Error('request error')
        }
      } catch (e) {
        console.error(e)
      }
    },
    mathCalculate(splitMessage) {
      let result = null;
      const currActionObj = this.getObjByTargetMathWord(splitMessage, chatController);
      if (!!currActionObj) {
        const methodParams = splitMessage.filter(currActionObj.conditionFunc);
        result = mathActions[currActionObj.actionMethod](methodParams);
      }
      this.addMessages(result, "bot");
      return result
    },
    getObjByTargetMathWord(wordArr, targetArr) {
      const length = targetArr.length;
      let i = 0;
      for (i; i < length; i++) {
        const crossArr = targetArr[i].arrayMatchWords.filter(i => wordArr.includes(i));
        if (crossArr.length) {
          return targetArr[i];
        }
      }
      return null;
    },
    noFetchUrlHandler(value) {
    }

  }
};
</script>

<style lang="scss">
html {
  font-family: system-ui, serif;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.buttonOpen {
  background: url("../one.png");
  background-size: cover;
  margin: 8px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: black solid 1px;
  position: absolute;
  bottom: 0;
  right: 0;
}

.buttonOpen:hover {
  cursor: pointer;
}

.buttonClose {
  background: #42b8a1;
  margin: 8px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: black solid 1px;
  position: absolute;
  top: 0;
  right: 0;
}

.buttonClose:hover {
  cursor: pointer;
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
  position: relative;
}

.logo {
  margin: 8px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: aliceblue solid 2px;
  float: left;
}

.btn-modal {
  color: white;
  background: rgba(128, 0, 255, 0.71);
  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 10px;
  margin-left: 240px;
  font-size: 12pt;
  position: absolute;
  top: 50px;
}

.btn-modal:hover {
  cursor: pointer;
}

.bio {
  color: #ffffff;
  font-size: 14px;
  margin-top: -0.1px;
  margin-left: 45px;
}

.main-content {
  background: no-repeat url("../back.png");
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
      right: 0;
    }

    .message-human {
      color: rgba(245, 245, 245, 1);
      background: radial-gradient(circle, rgba(0, 194, 10, .7), rgba(0, 181, 9, .7));
      margin-left: 175px;
      border-radius: 30px;
      padding: 0.5rem 0.75rem;
      -webkit-box-shadow: 0 5px 48px 2px rgba(34, 60, 80, 0.2) inset;
      -moz-box-shadow: 0 5px 48px 2px rgba(34, 60, 80, 0.2) inset;
      box-shadow: 0 5px 48px 2px rgba(34, 60, 80, 0.2) inset;
    }

    .message-bot {
      color: rgba(245, 245, 245, 1);
      background: radial-gradient(circle, rgba(148, 147, 143, .7), rgba(122, 122, 118, .7));
      border-radius: 30px;
      margin-top: 3px;
      margin-left: 15px;
      padding: 0.5rem 0.75rem;
      -webkit-box-shadow: 0 5px 48px 2px rgba(34, 60, 80, 0.4) inset;
      -moz-box-shadow: 0 5px 48px 2px rgba(34, 60, 80, 0.4) inset;
      box-shadow: 0 5px 48px 2px rgba(34, 60, 80, 0.4) inset;
    }

    .message-img-bot {
      color: rgba(245, 245, 245, 1);
      background: radial-gradient(circle, rgba(148, 147, 143, .7), rgba(122, 122, 118, .7));
      border-radius: 30px;
      margin-top: 3px;
      margin-left: 10px;;
      /*padding: 0.5rem 0.75rem;*/
      padding-top: 25px;
      -webkit-box-shadow: 0 5px 48px 2px rgba(34, 60, 80, 0.4) inset;
      -moz-box-shadow: 0 5px 48px 2px rgba(34, 60, 80, 0.4) inset;
      box-shadow: 0 5px 48px 2px rgba(34, 60, 80, 0.4) inset;
      width: 400px;
      height: 400px;
      horiz-align: center;
    }
  }
}

.main-content__message-area-message {
  height: auto;
  width: 90%;
  word-break: break-word;
}

.main-content__message-area-message {
  height: auto;
  width: 90%;
  word-break: break-word;
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
  width: 300px;
  height: 35px;
  border-radius: 15px;
  outline: none;
  padding-left: 15px;
  padding-top: 20px;
  padding-right: 10px;
  margin-top: 30px;
  margin-bottom: 15px;
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

.input-button:hover {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 0;
  margin-top: 33px;
  outline: none;
  margin-left: 15px;
  background: url("../frog.png") no-repeat center;
  background-size: cover;
  box-shadow: 0px -1px 20px -10px #000000 inset;
}

.input-button:active {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 0;
  margin-top: 33px;
  outline: none;
  margin-left: 15px;
  background: url("../frog.png") no-repeat center;
  background-size: cover;
  box-shadow: 0px -1px 20px -1px #000000 inset;
}

.function_button {
  width: 70px;
  background: #ffffff;
  color: #000000;
  margin-top: 5px;
  margin-left: 30px;
  font-weight: bold;
  border-radius: 30px;
  border: aliceblue solid 2px;
}

.input-button {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 0;
  margin-top: 33px;
  outline: none;
  margin-left: 15px;
  background: url("../frog.png") no-repeat center;
  background-size: cover;
  cursor: pointer;
}

.function_button:hover {
  cursor: pointer;
  width: 70px;
  background: #ffffff;
  color: #000000;
  margin-left: 30px;
  margin-bottom: 5px;
  font-weight: bold;
  border-radius: 30px;
  border: aliceblue solid 2px;
  box-shadow: 0px -1px 20px -10px #000000 inset;
}

.function_button:active {
  width: 70px;
  background: #ffffff;
  color: #000000;
  margin-left: 30px;
  margin-bottom: 5px;
  font-weight: bold;
  border-radius: 30px;
  border: aliceblue solid 2px;
  box-shadow: 0px -1px 20px -5px #000000 inset;
}

::-webkit-scrollbar-button {
  background-repeat: no-repeat;
  width: 6px;
  height: 0
}

::-webkit-scrollbar-track {
  background-color: #7c82ca;
  box-shadow: 0 0 3px #7c82ca inset;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  background-color: #5ec66d;
  box-shadow: 0 1px 1px #7c82ca inset;
  background-image: url('https://yraaa.ru/_pu/24/59610063.png');
  background-position: center;
  background-repeat: no-repeat;
}

::-webkit-resizer {
  background-repeat: no-repeat;
  width: 7px;
  height: 0
}

::-webkit-scrollbar {
  width: 11px;
}
</style>