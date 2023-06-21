<template>
  <!-- 无人回复的话题 -->
  <div class="aside_talk">
    <div class="talk_header">无人回复的话题</div>
    <ul class="talk_list">
      <li class="talk_list_item" v-for='item in noReplyArticles' :key='item.id'>
        <router-link :to='{name:"detail",params:{id:item.id}}'>{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'NoReplyTopicPage',
  data () {
    return {
      noReplyArticles: []
    }
  },
  created () {
    this.getNoReply()
  },
  computed: {
    // 获取文章列表数据
    ...mapState('home', ['articleListData'])
  },
  methods: {
    // 获取无人回复的文章信息数组
    getNoReply () {
      this.noReplyArticles = JSON.parse(localStorage.getItem('noReplyArticles'))
    }
  },
  watch: {
    // 监听文章列表数据变化,发生改变,则重新获取无人回复的文章信息数组
    articleListData () {
      this.getNoReply()
    }
  }
}
</script>

<style lang='less' scoped>
// 无人回复的话题
.aside_talk {
  margin-top: 10px;
  background-color: #fff;
  .talk_header {
    padding: 10px;
    height: 40px;
    background-color: rgb(246, 246, 246);
    font-size: 14px;
    color: rgb(68, 68, 68);
  }
  .talk_list {
    padding: 10px 0;
    width: 100%;
    height: 100%;
    .talk_list_item {
      padding: 5px 10px;
      width: 340px;
      height: 30px;
      color: rgb(119, 128, 166);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
