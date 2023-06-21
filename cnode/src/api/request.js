import requests from './index'

// 请求文章列表数据
export const reqArticleList = (data) => requests({ method: 'get', url: '/topics', params: data })

// 请求文章详情数据
export const reqArticleData = (id) => requests({ method: 'get', url: `/topic/${id}` })

// 获取用户信息
export const reqUserInfo = (username) => requests({ method: 'get', url: '/user/' + username })
