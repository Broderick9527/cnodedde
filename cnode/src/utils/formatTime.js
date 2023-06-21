import moment from 'moment'
export default function format (arr) {
  return arr.map((item) => {
    // 时间
    const diffYear = moment(new Date()).diff(moment(item.create_at), 'years')
    const diffMonth = moment(new Date()).diff(moment(item.create_at), 'months')
    const diffDay = moment(new Date()).diff(moment(item.create_at), 'days')
    const diffMimu = moment(new Date()).diff(moment(item.create_at), 'minutes')
    if (diffMimu < 60) {
      item.create_at = diffMimu + '分钟前'
    } else if (diffMimu < 60 * 24) {
      item.create_at = parseInt(diffMimu / 60) + '小时前'
    } else if (diffMimu > 60 * 24 && diffMonth === 0) {
      item.create_at = diffDay + '天前'
    } else if (diffMonth !== 0 && diffYear === 0) {
      item.create_at = diffMonth + '月前'
    } else {
      item.create_at = diffYear + '年前'
    }
    return item
  })
}
