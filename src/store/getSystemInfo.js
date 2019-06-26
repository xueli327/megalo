// const Vue = require('vue')
// const Vuex = require('vuex')
import Vue from 'vue'
import Vuex from 'vuex'
const state = null

const mutations = {
    ['GET_SYSTEMINFO_SUCCESS'](state, systemInfo) {
        state.systemInfo = systemInfo;
    }
}

const actions = {
    getSystemInfo({
        commit,
        state
    }) {
        return new Promise((resolve, reject) => {
            console.log(state)
            if (state.systemInfo) {
                resolve(state.systemInfo)
            } else {
                wx.getSystemInfo({
                    success(res) {
                        commit('GET_SYSTEMINFO_SUCCESS', res)
                        resolve(res)
                    },
                    fail(err) {
                        reject(err)
                    }
                });
            }

        })
    }
}

const getters = {
    isIphoneX: state => {
        return state.systemInfo ? state.systemInfo.model.includes("iPhone X") : false
    }

}
// Vue.use(Vuex)

// export default new Vuex.Store({
//     state: {
//         systemInfo: null
//     },
//     mutations: {
//         ['GET_SYSTEMINFO_SUCCESS'](state, systemInfo) {
//             state.systemInfo = systemInfo; 
//         }
//     },
//     actions: {
//         getSystemInfo({commit, state}){
//             return new Promise((resolve, reject) => {
//                 console.log(state)
//                 if (state.systemInfo) {
//                     resolve(state.systemInfo)
//                 } else {
//                     wx.getSystemInfo({
//                         success(res) {
//                             commit('GET_SYSTEMINFO_SUCCESS', res)
//                             resolve(res)
//                         },
//                         fail(err){
//                             reject(err)
//                         }
//                     });
//                 }

//             })
//         },
//     },
//     getters: {
//         isIphoneX: state => {
//             return state.systemInfo ? state.systemInfo.model.includes("iPhone X") : false
//         }
//     }
// })

export const systemInfo = {
    state,
    getters,
    actions,
    mutations
  }