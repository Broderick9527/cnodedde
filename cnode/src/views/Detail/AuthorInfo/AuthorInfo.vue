<template>
  <!-- 作者名片 -->
  <div class="aside_author">
    <div class="author_header">作者</div>
    <div class="author_info">
      <div class="avatar_wrapper">
        <div class="avatar">
          <img :src="userinfo.avatar_url" alt="" />
        </div>
        <span class="author_name">{{userinfo.loginname}}</span>
      </div>
      <div class="author_score">积分:{{userinfo.score}}</div>
      <div class="signature">"这个人很懒，什么也没有留下"</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AuthorInfoPage',
  props: ['username'],
  mounted () {
    // 好low,这里发起请求 始终快于Detail获取username,所以只能使用定时器延时发送请求时间，以便能获取到username这个参数
    setTimeout(() => {
      console.log('mounted')
      this.$store.dispatch('user/getUserInfo', this.username)
    }, 500)
  },
  computed: {
    ...mapState('user', ['userinfo'])
  }
}
</script>

<style lang='less' scoped>
// 作者信息
.aside_author {
  background-color: #fff;
  .author_header {
    padding: 10px;
    height: 40px;
    background-color: rgb(246, 246, 246);
    font-size: 14px;
    color: rgb(68, 68, 68);
  }
  .author_info {
    padding: 10px;
    width: 100%;
    height: 100%;
    .avatar_wrapper {
      display: flex;
      align-items: center;
      .avatar {
        width: 50px;
        height: 50px;
        overflow: hidden;
        border-radius: 3px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .author_name {
        margin-left: 10px;
        color: rgb(129, 128, 128);
        font-size: 18px;
      }
    }
    .author_score {
      margin-top: 10px;
      color: rgb(51, 51, 51);
    }
    .signature {
      margin-top: 10px;
      color: rgb(51, 51, 51);
    }
  }
}
</style>
