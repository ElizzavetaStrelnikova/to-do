<template>
  <transition name="modal">
    <div class="modal">
      <a href="#" class="close-modal" @click="close">✖</a>
      <div class="modal__container">
        <div class="form">
          <slot name="title"/>
          <slot name="description"/>
          <slot name="dueDate"/>
          <slot name="complexity"/>
          <slot name="button-save"/>
          <button type="button" class="cancel-button" @click="close">Отмена</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'my-modal',
  methods: {
    close() {
      this.$emit('close');
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  background-color: rgb(255 255 255 / 33%);
  backdrop-filter: blur(15px);
}

.modal__container {
  display: flex;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  min-width: 420px;
  max-width: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.form {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
}

button[type="submit"] {
  padding: 10px 20px;
  background-color: #2d41a7;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: darkblue;
}

.close-modal {
  position: absolute;
  top: 10px;
  right: 10px;
  text-decoration: none;
  color: black;
  font-size: 24px;
}

.cancel-button {
  padding: 10px 20px;
  background-color: rgb(255, 0, 64);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.cancel-button:hover {
  background-color: darkred;
}
.modal-enter-active, .modal-leave-active {
  transition: opacity 1s
}

.modal-enter, .modal-leave-to {
  opacity: 0
}
</style>