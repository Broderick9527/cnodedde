import { reqArticleData, reqArticleList } from '@/api/request'
import Vue from 'vue'
const vm = Vue.prototype

const state = {
  articleListData: [], // 文章列表数据
  imgUrls: [], // 最后一位回复者头像信息
  a: 12
}
const mutations = {
  // 添加文章数据
  GetArticleList (state, data) {
    state.articleListData = data
  },
  // 将存储了最后一位回复者头像信息的数组，存储起来
  GetCommentInfo (state, data) {
    state.imgUrls = data
  }
}
const actions = {
  // 请求获取文章数据
  async getArticleList ({ commit, dispatch }, data) {
    const res = await reqArticleList(data)
    console.log('文章列表：', res)
    if (!res.success) return vm.$message({ message: '文章列表数据获取失败', type: 'warning' })
    commit('GetArticleList', res.data) // 提交commit，添加文章列表数据
    localStorage.setItem('noReplyArticles', JSON.stringify(res.data.filter(item => item.reply_count === 0)))
    dispatch('getCommentInfo', res.data) // 提交dispatch，处理最后一位回复者的头像信息
  },

  // 请求文章的评论信息
  async getCommentInfo ({ commit }, data) {
    const arr = []
    const compatData = data || []
    // 获取所有文章id
    const ids = compatData.map(item => {
      return item.id
    })
    // 发送请求,经过处理后获取文章评论列表的用户头像信息,存储到数组中
    for (let i = 0; i < ids.length; i++) {
      const res = await reqArticleData(ids[i])
      const commentArr = res.data.replies
      // 回复数为0，跳过这条，因为数组长度也为0了。没有对应的author属性，会报错
      if (commentArr.length === 0) {
        arr.push(undefined)
        continue
      }
      arr.push(commentArr[commentArr.length - 1].author.avatar_url)
    }
    commit('GetCommentInfo', arr)
  }
}
const getters = {
  noReplyArticles (state) {
    return state.articleListData.filter(item => item.reply_count === 0)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
