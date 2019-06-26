export const SET_APP_ID = 'SET_APP_ID'
export const SET_USER_INFO = 'SET_USER_INFO'

const state = {
	appid: '',
	userinfo: null
}

const mutations = {
	[SET_APP_ID](state, appid)  {
		state.appid = appid
	},
	[SET_USER_INFO](state, userinfo)  {
		state.userinfo = userinfo
	}
}

const actions = {
}

const getters = {
	appid: state => state.appid,
	userinfo: state => state.userinfo
}

export const user = {
  state,
  getters,
  actions,
  mutations
}