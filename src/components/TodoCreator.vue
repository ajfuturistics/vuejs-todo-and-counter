<script setup>
import { reactive, defineEmits } from "vue";

const emit = defineEmits(["create-todo"]);

// for reactive data
// const todo = ref("");

// another method for reactive data
const todoState = reactive({
  todo: "",
  isInvalid: null,
  errMsg: "",
});

const createTodo = () => {
  //   emit("create-todo", todo.value);

  // resetting error
  todoState.isInvalid = null;

  if (todoState.todo === "") {
    todoState.isInvalid = true;
    todoState.errMsg = "todo value cannot be empty";
    return;
  }

  emit("create-todo", todoState.todo);
  todoState.todo = "";
};
</script>

<template>
  <div class="input-wrap" :class="{ 'input-err': todoState.isInvalid }">
    <input type="text" v-model="todoState.todo" />
    <button @click="createTodo()">Create</button>
  </div>

  <!-- <p v-if="todoState.isInvalid" class="err-msg">{{ todoState.errMsg }}</p> -->

  <!-- v-show is always on dom with display: none -->
  <p v-show="todoState.isInvalid" class="err-msg">{{ todoState.errMsg }}</p>
</template>

<style lang="scss" scoped>
.input-wrap {
  display: flex;
  transition: 250ms ease;
  border: 2px solid #41b080;

  &.input-err {
    border-color: red;
  }

  &:focus-within {
    box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1),
      0 -2px 4px -2px rgb(0 0 0 / 0.1);
  }

  input {
    width: 100%;
    padding: 8px 6px;
    border: none;

    &:focus {
      outline: none;
    }
  }

  button {
    padding: 8px 16px;
    border: none;
  }
}

.err-msg {
  margin-top: 6px;
  font-size: 12px;
  text-align: center;
  color: red;
}
</style>
