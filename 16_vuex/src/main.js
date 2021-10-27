import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
  namespaced: true, //
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
      console.log(state); //because its locale state, will'll not see the isLoggedIn
      // payload can be anything , obj,string,num,....
      state.counter = state.counter + payload.value;
    },
  },

  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      context.commit('increase', payload);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
    // anExample(state, getters, rootState, rootGetters) {
    //   // here we can to reach out to main store by 3th and 4th args
    //   console.log(state, getters, rootState, rootGetters);
    //   return state.counter * 3;
    // },
    normalizeCounter(state, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) return 0;
      if (finalCounter > 100) return 100;
      return finalCounter;
    },
  },
};

const store = createStore({
  modules: {
    counter: counterModule,
  },
  // to merge the above obj into the store
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  // the idea behind mutations , is when we wanna change the state directly in many places , eg if
  // we decide to edit this changing , we wanna go to all places and edit them , to be consistent
  // in all places , so in big projects this pattern would be a nightmare
  // mutations doesn't allow async

  actions: {
    // so we use actions as middleware between components and  mutations , which allow async

    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});
const app = createApp(App);

app.use(store);
app.mount('#app');
