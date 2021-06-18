<template>

	<div id="app">
    <div>
      <p>Экспонента числа {{value}} = {{exp}}</p>
    </div>
    <span v-if="seen">Меня видно</span>
    <ol>
      <li v-for="todo in todos">
        {{todo.text}}
      </li>
    </ol>
    <div>
      <p>{{message}}</p>
      <button v-on:click="reverseMessage">Переверни меня</button>
    </div>
    <span v-once>Это сообщение никогда не изменится: {{ msg }}</span>
    <div>
      <button v-bind:disabled="isButtonDisabled">Кнопка</button>
    </div>
    <div id="example">
      {{ messages }} {{reverseMessages}}
    </div>
    <p>Сообщение задом наперёд: <span class="reverseMssgMethods">{{reverseMssgMethods()}}</span> от <span class="MssgMethods">{{Mssg}}</span></p>
    <div id="demo">{{ fullName }}</div>
    <div v-bind:class="{ active: isActive }">
      <p>hi</p>
    </div>
  </div>
</template>
<script>
export default {

	name: "App",
  data() {
	  return {
	    value: 0,
      seen: true,
      todos: [
        {text: 'Изучить js'},
        {text: 'Изучить vue'}
      ],
      message: 'Hello fsf',
      messages: 'volk',
      msg: 'ds',
      isButtonDisabled: 1,
      Mssg: 'message from methods',
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Иван Иванов',
      isActive: false
    };
  },
  created() {
	  alert(this.value)
  },
  computed: {
    exp() {
      return Math.exp(this.value);
    },
    reverseMessages() {
      return this.messages.split('').reverse().join('')
    },
    fullName: {
      get(){
        return this.firstName + ' ' + this.lastName
      },
      set(newValue){
        let names = newValue.split(' ')
        this.firstName=names[0]
        this.lastName = names[names.length-1]
      }
    }
  },
  methods: {
    initInterval() {
      setInterval(() => this.value++, 1000);
    },
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    },
    reverseMssgMethods() {
      return this.Mssg.split('').reverse().join('')
    }
  },
  mounted() {
	  this.initInterval();
  },
};
</script>

<style lang="scss">
.reverseMssgMethods{
  color: #ef1515;
}
.MssgMethods{
  color: #19af19;
}
</style>
