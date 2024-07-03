<template>
  <div class="kanban-list">
    <div
        v-for="task in tasks"
        :key="task.id"
        class="task-item"
    >
      <div class="task-item__title">
        <h2 class="task-item__title">{{ task.name }}</h2>
        <img @click="showModal" src="../assets/svg/edit-icon.svg" alt="Редактировать задачу" class="task-item-edit task-item-edit-icon">
        <img @click="deleteTask(task)" src="../assets/svg/delete-3-svgrepo-com.svg" alt="Удалить задачу" class="delete-item-icon">
        <my-modal
            v-if="selectedTask"
            v-show="isModalVisible"
            @close="closeModal"
            :task="selectedTask"
        >
          <template v-slot:title>
            <input
                type="text"
                v-model="selectedTask.name"
            />
          </template>
          <template v-slot:description>
              <textarea v-model="selectedTask.description"
              ></textarea>
          </template>
          <template v-slot:complexity>
            <input
                type="text"
                v-model="selectedTask.complexity"
            />
          </template>
          <template v-slot:dueDate>
            <input
                type="date"
                name="date"
                v-model="selectedTask.dueDate"
            />
          </template>
          <template v-slot:button-save>
            <button  type="submit">Отправить</button>
          </template>
        </my-modal>
      </div>
      <p class="task-item__description">{{ task.description }}</p>
      <p class="task-item__client">{{ task.plannedCompletionAt }}</p>
      </div>
    </div>
</template>

<script>

import MyModal from "@/components/MyModal.vue";
import axios from "axios";

export default {
  components: {MyModal},
  props: ['columnId'],
  data() {
    return {
      isModalVisible: false,
      selectedTask: null,
      tasks: [],
    }
  },
  methods: {
    showModal(task) {
      this.selectedTask = task;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    deleteTask(task) {
      this.$emit('delete:task', task);
    },
    fetchTasksByColumn(columnId) {
      axios.get(`https://todo-list.edu-playground.ru/api/v1/boards/${columnId}/tasks`)
          .then((response) => {
            this.tasks = response.data;
          })
          .catch((error) => {
            console.error('Ошибка при загрузке задач по колонке:', error);
          });
    },
    },
}
</script>

<style lang="scss" scoped>
.kanban-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}
.task-item {
  background-color: #f4f2ff;
  border-radius: 10px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.task-item__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.task-item__complexity {
  display: flex;
  align-items: center;
  margin-right: 15px;
}

.complexity__dot {
  width: 24px;
  height: 12px;
  flex-shrink: 0;
  background-color: #d9d9d925;
  border-radius: 0px 10px 10px 24px;
  display: inline-block;
  margin-right: 5px;
}

.complexity__dot--medium {
  background-color: #fde047;
}

.complexity__dot--high {
  background-color: #e42c5f;
}

.complexity__dot--low {
  background-color: #2ce49d;
}

.complexity__dot--done {
  background-color: #2d41a7;
}

.task-item__title {
  flex-grow: 1;
  font-weight: 600;
  color: #333;
  display: flex;
}

.task-item__description {
  color: rgb(22, 20, 20);
  font-size: 12px;
  margin: 10px 0;
}

.task-item__client {
  font-size: 14px;
  color: #4f46e5;
  text-align: center;
}
.task-item-edit {
  cursor: pointer;
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
.delete-item-icon {
  cursor: pointer;
}
</style>