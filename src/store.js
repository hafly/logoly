import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
<<<<<<< HEAD
    prefix:'编辑',
    suffix:'我'
=======
    prefix:'edit',
    suffix:'me'
>>>>>>> 41419d145018c339024a584d38cee4c30a29b1f1
  },
  mutations: {
      updatePrefix(state,text){
        state.prefix = text
      },
      updateSuffix(state,text){
        state.suffix = text
      }
  },
  actions: {

  }
})
