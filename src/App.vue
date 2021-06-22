<template>
  <div id="app" class="Export">
    <p>{{ value }}</p>
    <p>Изначальное сообщение: "{{ message }}</p>
    <p>Сообщение задом наперед: "{{ reversedMessage }}"</p>
    <hr>


    <exam></exam>
  </div>
</template>

<script>
import exam from "./components/exam.vue";

export default {
  name: "app",
  components: {
    exam,
  },
  data() {
    return {
      value: 0,
      message: 'Привет',

    }
  },
  computed: {
    exponent() {
      return Math.exp(this.value)
    },
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    },
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  },
  mounted() {
    this.initInterval()
  },
  methods: {
    initInterval() {
      setInterval(() => this.value++, 1000);
    },
    btnClickHandler(value) {
      console.log(value)
    },
    btnTitleChangeHandler(value) {
      console.log(value)
    }
  },

};

</script>

<style lang="scss">
.Export {
  color: blueviolet;
  height: 440px;
  padding-top: 200px;
  text-align: center;
}
</style>
