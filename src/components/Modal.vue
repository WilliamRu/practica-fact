<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            <button type="button" class="btn-close" @click="close" aria-label="Close modal">
              x
            </button>
          </slot>
        </header>
        <section class="modal-body" id="modalDescription">
          {{result}}
          <slot name="body">
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    urlMsg: {
      type: String,
      required: false,
      default: () => '',
    }
  },
  data() {
    return{
      result: ""
    }
  },
  methods:{
    close() {
      this.$emit('close');
    },
  },
  mounted() {
    const myFetch = async (url) => {
      try {
        let res = await fetch(url);
        this.result = await res.json();
      }
      catch (e) {
        throw new Error("Ошибка!");
      }
    }
    if (!!this.urlMsg) {
      myFetch(this.urlMsg);
    } else {
      this.$emit('no-fetch-url', 'Адрес запроса не был передан')
    }
  },
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  width: 400px;
  height: 500px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}
.modal-header {
  display: flex;
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  justify-content: space-between;
}
.modal-body {
  position: relative;
  padding: 20px 10px;
  color: black;
}
.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  background: transparent;
}
</style>