import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
    state: {
        weatherData: [],
    },
    getters: {
       weatherData: state => state.weatherData
    },
    mutations: {
        SET_Weather(state, payload) {
            state.weatherData = payload
        }
    },
    actions: {
        async loadWeather(context) {
            try {
                const cors = 'https://cors-anywhere.herokuapp.com/';
                const apiKEY = '2431ebb6b837a49aae4584e508a0f3f6&units=metric';
                const url = cors + 'https://api.openweathermap.org/data/2.5/forecast?q=Berlin&appid=' + apiKEY;

                let weatherData = (await axios.get(url)).data;
                context.commit("SET_Weather", weatherData)
            } catch (error) {
                context.commit('showError', error);
            }
        }
    }
})
