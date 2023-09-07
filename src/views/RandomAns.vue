<script setup>
import { ref } from "vue";

const que = ref("");
const ans = ref("");
const err = ref(false);
const image = ref("");

const getAns = async () => {
  err.value = false;
  if (!que.value.includes("?")) {
    err.value = true;
    return;
  }

  const res = await fetch("https://yesno.wtf/api");
  const data = await res.json();
  ans.value = data.answer;
  image.value = data.image;
};
</script>

<template>
  <main>
    <div class="input-wrap" :class="{ 'input-err': err }">
      <input
        type="text"
        v-model="que"
        placeholder="Ask me any yes/no question"
      />
      <button @click="getAns()">Get Answer</button>
    </div>
    <p v-show="err" class="err-msg">Invalid Question</p>

    <div class="ans-container" v-if="ans">
      <h2>Answer: {{ ans.toLocaleUpperCase() }}</h2>
      <img loading="lazy" :src="image" alt="ans" v-if="image" />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;
}
h2 {
  margin-bottom: 16px;
  text-align: center;
}

.clear-btn-container {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
button {
  padding: 8px 16px;
  border: none;
}

.input-wrap {
  display: flex;
  transition: 250ms ease;
  border: 2px solid #41b080;
}
.input-wrap.input-err {
  border-color: red;
}

.input-wrap:focus-within {
  box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1);
}

input {
  width: 100%;
  padding: 8px 6px;
  border: none;
}

input:focus {
  outline: none;
}

button {
  padding: 8px 16px;
  border: none;
}

.err-msg {
  margin-top: 6px;
  font-size: 12px;
  text-align: center;
  color: red;
}

.ans-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fee2e2;
  margin: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}
.ans-container > h2 {
  font-size: 50px;
  background-image: linear-gradient(60deg, #e21143, #ffb03a);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 1rem;
}
</style>
