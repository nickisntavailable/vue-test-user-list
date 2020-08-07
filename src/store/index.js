import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    }
  },
  actions: {
    GET_TODO: async (state) => {
      let response = await axios.get('https://reqres.in/api/users?page=1')
      state.commit('setUsers', response.data.data);
    },
  },
  modules: {},
  getters: {
    users: s => s.users,
  }
});
