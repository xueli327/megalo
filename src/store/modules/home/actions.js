import * as types from './actionTypes'
export default{
  [types.GET_SYSTMINFO]({ commit,state }, value) {
     return new Promise((resolve, reject) => {
         if (state.systemInfos.model) {
             resolve(state.systemInfos)
         } else {
         wx.getSystemInfo({
             success(res) {
                 state.systemInfos = res
                 commit('GET_SYSTMINFO', res)
                 resolve(res)
             },
             fail(err) {
                 reject(err)
             }
         })
         }
     })
  }
}
