<script setup>
import { ref, watch, computed } from "vue";
import { uid } from "uid";
import { Icon } from "@iconify/vue";
import TodoCreator from "../components/TodoCreator.vue";
import TodoItem from "../components/TodoItem.vue";

const todoList = ref([]);

watch(
  todoList,
  () => {
    setTodoListLocalStorage();
  },
  { deep: true }
);

const todoCompleted = computed(() => {
  return todoList.value.every((todo) => todo.isCompleted);
});

const fetchTodoList = () => {
  const savedTodoList = JSON.parse(localStorage.getItem("todoList"));
  if (savedTodoList) {
    todoList.value = savedTodoList;
  }
};

fetchTodoList();

const setTodoListLocalStorage = () => {
  localStorage.setItem("todoList", JSON.stringify(todoList.value));
};

const createTodo = (todo) => {
  todoList.value.push({
    id: uid(),
    todo,
    isCompleted: null,
    isEditing: null,
  });
};

const toggleComplete = (todoIndex) => {
  todoList.value[todoIndex].isCompleted =
    !todoList.value[todoIndex].isCompleted;
};

const toggleEdit = (todoIndex) => {
  todoList.value[todoIndex].isEditing = !todoList.value[todoIndex].isEditing;
};

const updateTodo = (updatedVal, todoIndex) => {
  todoList.value[todoIndex].todo = updatedVal;
};
const deleteTodo = (todoId) => {
  todoList.value = todoList.value.filter((item) => item.id !== todoId);
};

const clearAll = () => {
  todoList.value = [];
};
</script>

<template>
  <main>
    <h2>Create Todo</h2>
    <TodoCreator @create-todo="createTodo" />

    <div v-if="todoList.length > 0" class="clear-btn-container">
      <button @click="clearAll()">Clear All</button>
    </div>

    <ul v-if="todoList.length > 0" class="todo-list">
      <TodoItem
        v-for="(item, index) in todoList"
        :key="item.id"
        :todo="item"
        :idx="index"
        @toggle-complete="toggleComplete"
        @edit-todo="toggleEdit"
        @update-todo="updateTodo"
        @delete-todo="deleteTodo"
      />
    </ul>

    <p v-else class="todos-msg">
      <Icon icon="noto-v1:sad-but-relieved-face" />
      <span>You have no todo's to complete! Add one!</span>
    </p>

    <p v-if="todoCompleted && todoList.length > 0" class="todos-msg">
      <Icon icon="noto-v1:party-popper" />
      <span>You have completed all your todos!</span>
    </p>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  h2 {
    margin-bottom: 16px;
    text-align: center;
  }

  .clear-btn-container {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
      padding: 8px 16px;
      border: none;
    }
  }

  .todo-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-top: 24px;
    gap: 20px;
  }

  .todos-msg {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 24px;
  }
}
</style>
