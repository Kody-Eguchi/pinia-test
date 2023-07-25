<template>
  <div class="home">
    <Counter />
    <div class="buttons">
      <button @click="storeCounter.decrement">-</button>
      <button @click="storeCounter.increment">+</button>
    </div>
    <hr>
    <div>
      This count is: {{ storeCounter.oddOrEven }}
    </div>
    <hr>
    <div>
      <h3>Edit Count:</h3>
      <input v-model="storeCounter.count" type="number">
    </div>
  </div>
</template>

<script setup>

import Counter from '@/components/Counter.vue'

import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()



</script>

<style>
.count {
  font-size: 60px;
  margin: 20px;
}
.buttons button {
  font-size: 40px;
  margin: 10px;
  width: 50px;
}
</style>