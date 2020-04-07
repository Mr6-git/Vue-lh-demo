import Vue from 'vue'
import Vuex from 'vuex'
import layout_stroe from './module/layout/layout_store'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {

  },
  mutations: {
    
  },
  actions: {

  },
  modules: { 
    layout_stroe
  }
})