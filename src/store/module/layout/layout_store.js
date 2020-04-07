import { TAGGLE_MOVE } from './layout_type'

export default {
  // namespaced: true,
  state: {
    moveFlag: false
  },
  getters: {
    getToggleIcon(state) {
      return state.moveFlag
    }
  },
  mutations: {
    [TAGGLE_MOVE](state, data) {
      state.moveFlag = data
    }
  },
  actions: {
    changeMoveFlag({ commit }, data) {
      commit('TAGGLE_MOVE', data)
    }
  }
}