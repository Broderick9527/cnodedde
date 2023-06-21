import { reqArticleData } from '@/api/request'
import Vue from 'vue'
const vm = Vue.prototype
const state = {
  articleData: {}
}
const mutations = {
  // 添加文章详情数据
  GetArticleData (state, data) {
    state.articleData = data
  }
}
const actions = {
  // 请求获取文章详情数据
  async getArticleData ({ commit }, data) {
    const res = await reqArticleData(data)
    console.log('文章详情：', res)
    if (!res.success) return vm.$message({ message: '文章数据获取失败', type: 'warning' })
    // vm.$message({ message: '文章数据获取成功', type: 'success' })
    commit('GetArticleData', res.data)
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
