<template>
  <div class="auth-modal">
    <h3>Ваше имя</h3>
    <input class="input-modal input-name" type="text" placeholder="Джимми">
    <h3>Почта</h3>
    <input class="input-modal input-email" type="text" placeholder="example@example.com">
    <h3>Пароль</h3>
    <input class="input-modal input-password" type="password" placeholder="******">
    <h3>Подтвердите пароль</h3>
    <input class="input-modal input-password" type="password" placeholder="******">
    <button-submit/>
  </div>
</template>

<script>

import ButtonSubmit from "@/components/UI/ButtonSubmit.vue";

export default {
  components: {ButtonSubmit}

}
</script>

<style lang="scss" scoped>
.auth-modal {
  background-color: #d5ccff;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
}
.auth-modal h3 {
  font-size: 15px;
  color: #1c0e5e;
}
.input-modal {
  padding: 15px;
  min-width: 300px;
  margin: 10px;
  border-radius: 10px;
}
.input-name {
  background: url('../../public/images/user-solid.svg') no-repeat 10px center;
  padding-left: 50px;
}
.input-email {
  background: url('../../public/images/envelope-solid.svg') no-repeat 10px center;
  padding-left: 50px;
}
.input-password {
  background: url('../../public/images/key-solid.svg') no-repeat 10px center;
  padding-left: 50px;
}
</style>