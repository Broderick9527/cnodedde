import axios from 'axios'
// 进度条
// import nProgress from 'nprogress'

const requests = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 5000
})

requests.interceptors.request.use((config) => {
  // nProgress.start()
  return config
})

requests.interceptors.response.use((reason) => {
  // nProgress.done()
  return reason.data
}, (err) => {
  return Promise.reject(err)
})

export default requests
