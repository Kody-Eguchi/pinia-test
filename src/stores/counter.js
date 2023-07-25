import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "count",
  state: () => ({
    count: 0,
  }),
  actions: {
    decrement() {
      this.count--;
    },
    increment() {
      this.count++;
    },
  },
  getters: {
    oddOrEven: (state) => {
      if (state.count % 2 === 0) return "even";
      return "odd";
    },
  },
});
