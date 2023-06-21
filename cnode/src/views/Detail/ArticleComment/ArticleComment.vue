<template>
  <!-- 文章评论 -->
  <div class="article_comment">
    <div class="article_comment_header">
      {{articleData.reply_count}} 回复
    </div>
    <div class="comment_wrapper">
      <ul class="comment_list">
        <article-comment-item v-for="(item,index) in comments" :key="item.id" :item='item' :index='index' />
      </ul>
    </div>
  </div>
</template>

<script>
import formatTime from '@/utils/formatTime'
import { mapState } from 'vuex'
import ArticleCommentItem from '../ArticleCommentItem/ArticleCommentItem.vue'
export default {
  components: { ArticleCommentItem },
  name: 'ArticleCommentPage',
  computed: {
    ...mapState('detail', ['articleData']),
    // 评论数据--数组
    comments () {
      return formatTime(this.articleData.replies || [])
    }
  }
}
</script>

<style lang='less' >
// 文章评论
.article_comment {
  margin-top: 10px;
  background-color: #fff;
  .article_comment_header {
    padding: 10px;
    height: 40px;
    background-color: rgb(246, 246, 246);
  }
  .comment_wrapper {
    .comment_list {

    }
  }
}
</style>
