<template>
  <div class="auth-modal">
    <h3>Ваше имя</h3>
    <input v-model="name" class="input-modal input-name" type="text" placeholder="Джимми">
    <h3>Почта</h3>
    <input v-model="email" class="input-modal input-email" type="text" placeholder="example@example.com">
    <h3>Пароль</h3>
    <input v-model="password" class="input-modal input-password" type="password" placeholder="******">
    <h3>Подтвердите пароль</h3>
    <input v-model="confirm_password" class="input-modal input-password" type="password" placeholder="******">
    <div class="buttons">
      <button-authorize @click="register"/>
      <button-submit @click="login"/>
    </div>
    <div v-if="successMessage" class="success-message">{{successMessage }}</div>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </div>
</template>

<script>
import ButtonSubmit from "@/components/UI/ButtonSubmit.vue";
import ButtonAuthorize from "@/components/UI/ButtonAuthorize.vue";
import axios from 'axios';
import { mapMutations, mapGetters } from 'vuex';

export default {
  components: { ButtonAuthorize, ButtonSubmit },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirm_password: '',
      successMessage: false,
      errorMessage: ''
    };
  },
  computed: {
    ...mapGetters('user', ['getUser'])
  },
  methods: {
    ...mapMutations('user', ['setUser']),
    async register() {
      try {
        const response = await axios.put('https://todo-list.edu-playground.ru/api/v1/auth/signup', {
          "formData": {
            name: this.name,
            email: this.email,
            password: this.password,
            confirm_password: this.password,
          }
        });

        if (response.status === 200 || response.status === 201) {
          this.setUser({
            name: this.name,
            email: this.email,
            password: this.password
          });

          this.$router.push('/submit');
          this.successMessage = 'Регистрация прошла успешно!';
        } else {
          this.errorMessage = 'Регистрация не удалась. Попробуйте еще раз.';
        }
      } catch (error) {
        console.error('Ошибка при регистрации:', error);
        this.errorMessage = `Произошла ошибка: ${error.message}. Попробуйте еще раз.`;
      }
    },
    async login() {
      try {
        const response = await axios.post('https://todo-list.edu-playground.ru/api/v1/auth/signin', {
          "formData": {
            email: this.email,
            password: this.password
          }
        });

        if(response.status === 200) {
          this.setUser({
            name: response.data.name,
            email: this.email,
            token: response.data.token,
            userId: response.data.userId
          });
        }
        this.$router.push('/boards');

      } catch (error) {
        this.successMessage = false;
        this.errorMessage = error.response ? error.response.data.message : 'Ошибка входа!';
      }
    }
  },
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
.buttons {
  display: flex;
  flex-direction: row;
}
.success-message {
  padding: 10px;
  color: #1c0e5e;
  font-size: 20px;
}
.error-message {
  padding: 10px;
  color: #e42c5f;
  font-size: 20px;
}
</style>