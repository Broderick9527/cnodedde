<template>
  <!-- 作者其他话题 -->
  <div class="aside_talk">
    <div class="talk_header">作者其他话题</div>
    <ul class="talk_list">
      <li class="talk_list_item" v-for='item,index in topics' :key='index'>
        <!-- <router-link :to=`/detail/${item.id}`>{{item.title}}</router-link> -->
        <router-link :to='{name:"detail",params:{id:item.id}}'>{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AuthorOtherTopicPage',
  props: ['username'],
  mounted () {
    // 好low,这里发起请求 始终快于Detail获取username,所以只能使用定时器延时发送请求时间，以便能获取到username这个参数
    setTimeout(() => {
      this.$store.dispatch('user/getUserInfo', this.username)
    }, 500)
  },
  computed: {
    ...mapState('user', ['userinfo']),
    topics () {
      const topics = this.userinfo.recent_topics || []
      const topicsFilter = topics.filter(item => item.id !== this.$route.params.id).splice(0, 5)
      return topicsFilter
    }
  },
  watch: {
  // 点击了作者其他话题,监听路由导航的变化,切换到其他的文章详情去
    $route () {
      this.$store.dispatch('detail/getArticleData', this.$route.params.id)
    }
  }
}
</script>

<style lang='less' scoped>
// 作者其他话题
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
