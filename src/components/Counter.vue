<script>
export default {
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count !== 0) {
        this.count--;
      }
    },
    reset() {
      this.count = 0;
    },
  },
};
</script>

<template>
  <section>
    <h1>Hello World</h1>

    <p v-if="count === 0">Counter is zero</p>
    <p v-else>Counter: {{ count }}</p>

    <div>
      <button id="increment" @click="increment()">increment</button>
      <button id="decrement" @click="decrement()">decrement</button>
      <button id="reset" @click="reset()">reset</button>
    </div>
  </section>
</template>

<style scoped>
section {
  max-width: 50rem;
}
div {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

button {
  border: none;
  background: blueviolet;
  color: #fff;
  padding: 0.3rem;
}
</style>
