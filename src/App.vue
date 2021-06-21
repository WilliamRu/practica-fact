<template>
	<div id="bot" class="chat-bot">
    <header class="header-content">
      <span class="close-bot"></span>
      <div class="name-bots">Frog-Bot</div>
    </header>
    <main class="main-content">jj</main>
    <footer class="footer-content">
      <div class="Enter-Window" contenteditable="">
        <textarea class="input-style" placeholder="Введите сообщение"></textarea>
        <button class="input-button" type="button"></button>
      </div>
    </footer>
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
    document.querySelector('textarea').addEventListener('input', function (e) {
      e.target.style.height = '1px';
      e.target.style.height = e.target.scrollHeight + 2 + "px";
    })
  },
  methods:{

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
.main-content{
  background-color: floralwhite;
  height: 300px;
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
  width: 40px;
  height: 40px;
  border-radius: 30px;
  border: 0;
  margin-top: 30px;
  outline:none;
  margin-left: 15px;
  background: url("./assets/отправить.png") no-repeat center;
  background-size:30px;
}
</style>
