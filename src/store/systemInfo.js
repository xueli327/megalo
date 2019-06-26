export const GET_SYSTEMINFO_SUCCESS = 'GET_SYSTEMINFO_SUCCESS'
const state = {
    systemInfo: ''
}
const mutations = {
    [GET_SYSTEMINFO_SUCCESS](state, systemInfo) {
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
export const systemInfo = {
    state,
    getters,
    actions,
    mutations
}