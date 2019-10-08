import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    list: [],
  },
  mutations: {
    SET_List (state, list) {
      state.list = list
    }
  },
  actions: {
    loadList ({ commit }) {
      axios
          .get('https://samples.openweathermap.org/data/2.5/forecast?q=München&appid=b6907d289e10d714a6e88b30761fae22')
          .then(r => r.data)
          .then(list => {
            commit('SET_list', list)
          })
    }
  }
})
