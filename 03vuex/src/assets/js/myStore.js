import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    msg: 'word',
    num: 1
  },
  getters: {
    todo(state) {
      return state.msg.split('').reverse().join('');
    }
  },
  mutations: {
    increment (state, payload) {
      state.num += payload.count;
    }
  }
});

export default store;
