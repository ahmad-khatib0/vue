import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      // payload can be anything , obj,string,num,....
      state.counter = state.counter + payload.value;
    },
  },
  // the idea behind mutations , is when we wanna change the state directly in many places , eg if
  // we decide to edit this changing , we wanna go to all places and edit them , to be consistent
  // in all places , so in big projects this pattern would be a nightmare

  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizeCounter(state, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) return 0;
      if (finalCounter > 100) return 100;
      return finalCounter;
    },
  },
});
const app = createApp(App);

app.use(store);
app.mount('#app');
