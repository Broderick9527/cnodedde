<template>
  <!-- 文章详情 -->
  <div class="article_wrapper">
    <div class="w">

      <!-- 左侧区域 -->
      <div class="article">
        <!-- 文章 -->
        <div class="article_info_wrapper">
          <!-- 左侧区域文章 -->
          <Article/>
        </div>
        <!-- 文章评论 -->
        <article-comment />
      </div>

      <!-- 右侧区域 -->
      <div class="aside">
        <!-- 作者名片 -->
        <author-info :username="username"/>
        <!-- 作者其他话题 -->
        <author-other-topic :username="username"/>
        <!-- 无人回复的话题 -->
        <no-reply-topic />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NoReplyTopic from '@/components/NoReplyTopic/NoReplyTopic.vue'
import ArticleComment from './ArticleComment/ArticleComment.vue'
import Article from './Article/Article.vue'
import AuthorInfo from './AuthorInfo/AuthorInfo.vue'
import AuthorOtherTopic from './AuthorOtherTopic/AuthorOtherTopic.vue'
export default {
  components: { Article, ArticleComment, AuthorInfo, NoReplyTopic, AuthorOtherTopic },
  name: 'DetailPage',
  data () {
    return {
      username: ''
    }
  },
  created () {
    this.getData()
  },
  computed: {
    ...mapState('detail', ['articleData'])
  },
  // 获取到文章数据,提取出用户名传递给子组件
  watch: {
    articleData () {
      console.log('获取到文章数据')
      this.username = this.articleData.author.loginname
    }
  },
  methods: {
    getData () {
      this.$store.dispatch('detail/getArticleData', this.$route.params.id)
    }
  }
}
</script>

<style lang='less' scoped>
// 文章
.article_wrapper {
  margin: 10px 0;
  .w {
    display: flex;
    // 左侧区域
    .article {
      flex: 8;
      height: 100%;
      // 文章
      .article_info_wrapper {
        background-color: #fff;
      }

    }

    // 右侧区域
    .aside {
      flex: 2;
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      height: 100%;
    }
  }
}
</style>
