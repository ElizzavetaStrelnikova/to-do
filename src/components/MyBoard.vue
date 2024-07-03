<template>
  <div class="container">
    <div class="kanban">
      <div class="kanban__column" v-for="board in boards" :key="board.id">
        <div class="kanban__header">
          <h3 class="kanban__header">{{ board.description }}</h3>
          <plus-button-board @click="showModal"/>
          <my-modal
              v-show="isModalVisible"
              @close="closeModal"
          >
            <template v-slot:title>
              <input
                  type="text"
                  placeholder="Введите заголовок задачи"
                  v-model="newTask.title"
              />
            </template>
            <template v-slot:description>
              <textarea
                  placeholder="Введите описание задачи"
                  v-model="newTask.description"
              ></textarea>
            </template>
            <template v-slot:complexity>
              <input
                  type="text"
                  placeholder="Введите сложность задачи"
                  v-model="newTask.complexity"
              />
            </template>
            <template v-slot:dueDate>
              <input type="date" name="date" placeholder="Выберите дату" v-model="newTask.dueDate"/>
            </template>
            <template v-slot:button-save>
              <button type="submit" @click="addTask">Отправить</button>
            </template>
          </my-modal>
        </div>
          <item-board
              v-bind:tasks="tasks"
              :column="column.id"
              @delete:task="handleDeleteTask"
          />
      </div>
    </div>
  </div>
</template>

<script>
import PlusButtonBoard from "@/components/UI/PlusButtonBoard.vue";
import ItemBoard from "@/components/ItemBoard.vue";
import MyModal from "@/components/MyModal.vue";
import { mapGetters, mapActions } from 'vuex';

export default {
  components: { MyModal, ItemBoard, PlusButtonBoard },
  data() {
    return {
      isModalVisible: false,
      newTask: {
        title: '',
        description: '',
        complexity: '',
        dueDate: ''
      }
    }
  },
  computed: {
    ...mapGetters('board', ['getBoards'])
  },
  created() {
    this.fetchBoards();
  },
  methods: {
    ...mapActions('board', ['fetchBoards', 'addBoard']),
    showModal() {
      this.isModalVisible = true;
      this.resetNewTask();
    },
    closeModal() {
      this.isModalVisible = false;
    },
    resetNewTask() {
      this.newTask = {
        title: '',
        description: '',
        complexity: '',
        dueDate: ''
      };
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}
.kanban {
  display: flex;
  padding: 40px;
  align-items: center;
  gap: 40px;
  margin: 10px 0;
  justify-content: center;
  flex-wrap: wrap;
}
.kanban__column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  flex: 1 0 0;
  padding: 14px;
  border-radius: 12px;
  background-color: #d5ccff;
}
.kanban__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #d5ccff;
  color: #2b1887;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-left: 10px;
}
.kanban-icon {
  background-color: #d5ccff;
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