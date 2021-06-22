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
      <div class="Enter-Window" contenteditable="">
        <textarea class="input-style" maxlength="1500" placeholder="Введите сообщение"></textarea>
        <button class="input-button" type="button" @click="submit"></button>
        <!--<img src="../frog.png" class="frog">-->
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
    };
  },
  methods:{
    submit() {

    }
  },

  computed:{

    },
  mounted() {
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
};
</script>

<style lang="scss">


.chat-bot{
  /*background-color: #7c82ca;*/
  margin:0 auto;
  height: 490px;
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

.logo {
  margin: 10px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: aliceblue solid 2px;
  float: left;
}
.main-content{
  background: no-repeat url(../back.png);
  background-size: 450px 500px;
  //background-color: floralwhite;
  height: 300px;
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
.footer-content{
  background-color: #7c82ca;
  height: auto;
  padding-bottom: 20px;
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

.input-style{
  text-decoration: none;
  resize: none;
  border-radius: 15px;
  width: 300px;
  height: 25px;
  margin-top: 28px;
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
.input-button {
  width: 40px;
  height: 40px;
  border-radius: 30px;
  border: 0;
  margin-top: 30px;
  outline: none;
  margin-left: 15px;
  background: url("./assets/отправить.png") no-repeat center;
  background-size: 30px;
}
.input-button:hover{
  cursor: pointer;
}
  .bio {
    color: #ffffff;
    font-size: 15px;
    margin-left: 45px;
  }

</style>