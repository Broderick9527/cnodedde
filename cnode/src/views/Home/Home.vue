<template>
  <!-- 中间内容 -->
  <div class="content_wrapper">
    <div class="w">
      <!-- 左侧区域 -->
      <div class="content">
        <!-- 导航 -->
        <article-nav @changeSort="changeSort" :tab="tab"/>
        <!-- 文章列表 -->
        <article-list :tab="tab"/>
        <!-- 分页器 -->
        <pagination :pageSize='limit' :pageNo='page' :continue="5" @changePage="changePage" @changeSize='changeSize' />
      </div>
      <!-- 右侧区域 -->
      <div class="aside">
        <!-- 积分排行 -->
        <score-rank />
        <!-- 未回复文章 -->
        <no-reply-topic />
        <!-- 友情社区 -->
        <community />
        <!-- 客户端二维码 -->
        <client-qr-code />
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination/Pagination.vue'
import ArticleList from '@/views/Home/ArticleList/ArticleList.vue'
import ArticleNav from '@/views/Home/ArticleNav/ArticleNav.vue'
import NoReplyTopic from '@/components/NoReplyTopic/NoReplyTopic.vue'
import ScoreRank from '@/views/Home/ScoreRank/ScoreRank.vue'
import Community from '@/components/Community/Community.vue'
import ClientQrCode from '@/components/ClientQrCode/ClientQrCode.vue'
export default {
  components: { ArticleList, Pagination, ArticleNav, NoReplyTopic, ScoreRank, Community, ClientQrCode },
  name: 'HomePage',
  data () {
    return {
      page: 1,
      tab: '',
      limit: 20,
      mdrender: true
    }
  },
  created () {
    this.getData()
  },
  mounted () {
    this.$store.dispatch('home/getCommentInfo')
  },
  methods: {
    // 发送请求，获取数据
    getData () {
      const params = {
        page: this.page,
        tab: this.tab,
        limit: this.limit,
        mdrender: this.mdrender
      }
      this.$store.dispatch('home/getArticleList', params)
    },
    // 改变页数
    changePage (value) {
      this.page = value
      this.getData()
    },
    // 改变每页显示条数
    changeSize (value) {
      this.limit = value
      this.getData()
    },
    // 改变文章列表排序分类
    changeSort (type) {
      this.tab = type
      this.page = 1
      this.getData()
    }
  }
}
</script>

<style lang='less' scoped>
.content_wrapper {
  margin: 10px 0;
  .w {
    display: flex;
    // 左侧区域
    .content {
      flex: 8;
      background-color: #fff;
      height: 100%;
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
