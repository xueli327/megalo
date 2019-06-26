import Vuex from 'vuex'
import { user } from './user'
import  { systemInfo }  from './systemInfo'

export default new Vuex.Store({
  modules: {
    user,
    systemInfo
  }
})