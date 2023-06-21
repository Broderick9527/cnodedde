import moment from 'moment/moment'
export default function format (arr) {
  return arr.map((item) => {
    // 时间
    const diffYear = moment(new Date()).diff(moment(item.last_reply_at), 'years')
    const diffMonth = moment(new Date()).diff(moment(item.last_reply_at), 'months')
    const diffDay = moment(new Date()).diff(moment(item.last_reply_at), 'days')
    const diffMimu = moment(new Date()).diff(moment(item.last_reply_at), 'minutes')
    if (diffMimu < 60) {
      item.last_reply_at = diffMimu + '分钟前'
    } else if (diffMimu < 60 * 24) {
      item.last_reply_at = parseInt(diffMimu / 60) + '小时前'
    } else if (diffMimu > 60 * 24 && diffMonth === 0) {
      item.last_reply_at = diffDay + '天前'
    } else if (diffMonth !== 0 && diffYear === 0) {
      item.last_reply_at = diffMonth + '月前'
    } else {
      item.last_reply_at = diffYear + '年前'
    }

    // 图标
    if (item.top) {
      item.tab = '置顶'
    } else if (item.good) {
      item.tab = '精华'
    } else if (item.tab === 'share') {
      item.tab = '分享'
    } else if (item.tab === 'ask') {
      item.tab = '问答'
    } else if (item.tab === 'job') {
      item.tab = '招聘'
    }
    return item
  })
}
