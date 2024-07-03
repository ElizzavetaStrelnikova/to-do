<template>
    <div class="container header__container">
      <h1 class="header__title">Kanban Board</h1>
      <plus-button @click="showModal"/>
      <my-modal
          v-show="isModalVisible"
          @close="closeModal"
      >
        <template v-slot:description>
          <input
              type="text"
              placeholder="Введите заголовок колонки"
              v-model="newColumn.description"
          />
        </template>
        <template v-slot:button-save>
          <button type="submit" @click="addNewColumn">Отправить</button>
        </template>
      </my-modal>
      <div class="header__user-icon">{{ currentUserName }}</div>
    </div>
</template>

<script>
import PlusButton from "@/components/UI/PlusButton.vue";
import MyModal from "@/components/MyModal.vue";
import axios from "axios";

export default {
  components: {MyModal, PlusButton},
  props: ['columns', 'currentUserName', 'userId'],
  data() {
    return {
      isModalVisible: false,
      newColumn: {
        description: ''
      }
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
      this.newColumn = {
        description: ''
      }
    },
    closeModal() {
      this.isModalVisible = false;
    },
    addNewColumn(userId) {
      const newColumn = {
        description: this.newColumn.description,
      };
      const token = localStorage.getItem('token');
      axios.put(`https://todo-list.edu-playground.ru/api/v1/user/${userId}/boards`, newColumn, {
        headers: {
          'X-Base-Auth': `Bearer ${token}`
        }
      })
          .then((response) => {
            console.log('Колонка успешно добавлена на сервер:', response.data);
          })
          .catch((error) => {
            console.error('Произошла ошибка при добавлении колонки на сервер:', error);
          });

      this.isModalVisible = false;
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 0 15px;
  margin: 0 auto;
}
.header__container {
  background-color: #1c0e5e;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  min-width: 1280px;
  padding: 10px;
  margin-top: 10px;
}
.header__title {
  font-weight: 300;
  background-color: #1c0e5e;
}
.header__user-icon {
  width: 40px;
  height: 40px;
  background-color: #d9d9d9;
  border-radius: 50%;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}
input[type="text"],
input[type="date"],
textarea {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

textarea {
  resize: vertical;
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
</style>