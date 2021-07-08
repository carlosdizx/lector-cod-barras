import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos:[{}]
  },
  mutations: {
    addProducto(state, payload){
      state.productos.push(payload);
    }
  },
  actions: {
    agregarProducto({commit},data){
      commit('addProducto',data)
    }
  },
  modules: {
  }
})
