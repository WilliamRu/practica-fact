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
      <div class="Enter-Window">
        <textarea class="input-style" maxlength="1500" placeholder="Введите сообщение"></textarea>
        <button class="input-button" type="button"></button>
      </div>
    </footer>
	</div>
</template>
<script>
export default {
  name: "bot",
  data() {
    return {

    };
  },
  computed: {

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
  methods: {

  },
}

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
  font-size: 15px;
  margin-left: 45px;
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

.footer_logo{
  float: right;
  height: 70px;
  width: 70px;
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

.table-chat{
  background-color: red;
  width: 100%;
  height: 100%;
}
.Bot-Column{
  width: 50%;
  height: 20%;
}
.User-Column{
  width: 50%;

}
.new-message{
  height: 10px;
}


.Bot-Message{
  display: flex;
  justify-content: center;
  background: linear-gradient(45deg, #11ff00, #00c84d);
  font-weight: bold;
  vertical-align: center;
  color: #000000;
  width: 75%;
  height: 10%;
  max-height: 100%;
  margin: -60px 20px;
  padding: 8px;
  border-radius: 40px;
  box-shadow: 0 3px 3px #575555 inset;
}
.User-Message{
  display: flex;
  justify-content: center;
  background: linear-gradient(45deg, #00b2ff, #0047c7);
  box-shadow: 0 3px 3px #575555 inset;
  text-align: center;
  border-radius: 40px;
  font-weight: bold;
  vertical-align: center;
  width: 75%;
  height: 10%;
  max-height: 100%;
  margin: -20px 10px;
  padding: 8px;
}
</style>

