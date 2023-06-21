<template>
  <li class="comment_item">
    <div class="avatar">
      <img :src="item.author.avatar_url" alt="">
    </div>
    <div class="comment_info">
      <div class="userinfo">
        <span class="name">{{item.author.loginname}}</span>
        <span class="floor">{{index+1}}楼•</span><span class="time">{{item.create_at}}</span>
      </div>
      <div class="talk">
        <div class="markdown-body" v-html="compiledMarkdown"></div>
      </div>
    </div>
  </li>
</template>

<script>
import { marked } from 'marked'
import 'github-markdown-css' // 引入markdown样式
export default {
  name: 'ArticleCommentItemPage',
  props: ['item', 'index'],
  computed: {
    compiledMarkdown () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.blog = marked(this.item.content)
      return marked.parse(this.blog)
    }
  }
}
</script>

<style lang='less' scoped>
.comment_item {
  display: flex;
  padding: 10px 0 30px 10px;
  height: 80px;
  border-bottom: 1px solid rgb(240, 240, 240);
  .avatar {
    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 3px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .comment_info {
    margin-left: 10px;
    .userinfo {
      .name {
        color: #989898;
      }
      .floor {
        margin-left: 5px;
        color: rgb(18, 148, 211);
      }
      .time {
        color: rgb(18, 148, 211);
      }
    }
    .talk {
      width: 700px;
      // margin-top: 10px;
      margin-left: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
