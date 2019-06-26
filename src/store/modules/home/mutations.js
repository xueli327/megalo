import * as types from './actionTypes'
export default {
    [types.GET_SYSTMINFO](state, value) {
          state.systemInfos = value
    }
}
