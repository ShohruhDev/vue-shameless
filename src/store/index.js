import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
    state: {
        shameless: [],
    },
    getters: {
        SHAMELESS(state) {
            return state.shameless
        }
    },
    mutations: {
        const SET_SHAMELESS_API = (state, shameless) => {
            state.shameless = shameless
        }
    },
    actions: {
        GET_SHAMELESS_API({ commit }) {
            axios.get('https://imdb-api.com/en/API/Title/k_gnzr913v/tt1586680/FullActor,Trailer,Ratings,Wikipedia')
                .then(response => {
                    commit('SET_SHAMELESS_API', response.data)
                })
        }
    },
    modules: {}
})