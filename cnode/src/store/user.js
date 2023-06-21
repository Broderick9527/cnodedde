import { reqUserInfo } from '@/api/request'
import Vue from 'vue'
const vm = Vue.prototype
const state = {
  userinfo: {}
}
const mutations = {
  GetUserInfo (state, data) {
    state.userinfo = data
  }
}
const actions = {
  async getUserInfo ({ commit }, username) {
    const res = await reqUserInfo(username)
    console.log(res)
    if (!res.success) return vm.$message({ message: '用户信息获取失败', type: 'warning' })
    commit('GetUserInfo', res.data)
  }
}
const getters = {

}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
