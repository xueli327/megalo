import Vuex from 'vuex'
import { user } from './user'
import { systemInfo } from './getSystemInfo'

export default new Vuex.Store({
  modules: {
    user,
    systemInfo
  }
})