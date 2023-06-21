<template>
  <div>
    <!-- 左侧区域文章标题头部信息 -->
    <div class="article_header">
      <h1 class="article_title">{{articleData.title}}</h1>
      <div class="article_describe">• 发布于 {{time}} • 作者 {{author.loginname}} • {{articleData.visit_count}} 次浏览 • 来自 {{tab}}</div>
    </div>
    <!-- 左侧区域文章内容 -->
    <div class="article_content" >
      <div class="markdown-body" v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>

<script>
import 'github-markdown-css' // 引入markdown样式
import { marked } from 'marked'
import moment from 'moment'
import { mapState } from 'vuex'
export default {
  name: 'ArticleTitlePage',
  data () {
    return {
      blog: ''
    }
  },
  computed: {
    ...mapState('detail', ['articleData']),
    // 标签
    tab () {
      let res = ''
      if (this.articleData.tab === 'share') {
        res = '分享'
      } else if (this.articleData.tab === 'good') {
        res = '精品'
      } else if (this.articleData.tab === 'job') {
        res = '招聘'
      } else if (this.articleData.tab === 'ask') {
        res = '问答'
      }
      return res
    },
    // 时间
    time () {
      // 时间
      let res = ''
      const diffYear = moment(new Date()).diff(moment(this.articleData.create_at), 'years')
      const diffMonth = moment(new Date()).diff(moment(this.articleData.create_at), 'months')
      const diffDay = moment(new Date()).diff(moment(this.articleData.create_at), 'days')
      const diffMimu = moment(new Date()).diff(moment(this.articleData.create_at), 'minutes')
      if (diffMimu < 60) {
        res = diffMimu + '分钟前'
      } else if (diffMimu < 60 * 24) {
        res = parseInt(diffMimu / 60) + '小时前'
      } else if (diffMimu > 60 * 24 && diffMonth === 0) {
        res = diffDay + '天前'
      } else if (diffMonth !== 0 && diffYear === 0) {
        res = diffMonth + '月前'
      } else {
        res = diffYear + '年前'
      }
      return res
    },
    // markDown转换文档
    compiledMarkdown () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.blog = marked(this.articleData.content || '')
      return marked.parse(this.blog)
    },
    author () {
      return this.articleData.author || {}
    }
  }
}
</script>

<style lang='less' scoped>
// 左侧区域文章标题
.article_header {
  padding: 20px 0 20px 15px;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid rgb(240, 240, 240);
  .article_title {
    font-size: 24px;
  }
  .article_describe {
    margin-top: 15px;
    color: #989898;
    font-size: 12px;
  }
}
// 左侧区域文章内容
.article_content {
  width: 800px;
  height: 100%;
  overflow: hidden;
  padding: 15px 0 30px 30px;
  .markdown-text{
    width:100%;
    height: 100%;
    img{
      width: 100%;
    }
  }
}
</style>
