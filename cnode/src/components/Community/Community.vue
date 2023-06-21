<template>
  <!-- 友情社区 -->
  <div class="aside_community">
    <div class="community_header">友情社区</div>
    <ul class="community_list">
      <li class="community_list_item">
        <a href="https://golangtc.com/" target="_blank">
          <img src="../../assets/images/golangtc-logo.png" alt="">
        </a>
      </li>
      <li class="community_list_item">
        <a href="https://learnku.com/laravel" target="_blank">
          <img src="../../assets/images/phphub-logo.png" alt="">
        </a>
      </li>
      <li class="community_list_item">
        <a href="https://ruby-china.org/" target="_blank">
          <img src="../../assets/images/ruby-china.png" alt="">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CommunityPage'
}
</script>

<style lang='less' scoped>
// 友情社区
.aside_community {
  margin-top: 10px;
  background-color: #fff;
  .community_header {
    padding: 10px;
    height: 40px;
    background-color: rgb(246, 246, 246);
    font-size: 14px;
    color: rgb(68, 68, 68);
  }
  .community_list {
    padding: 10px 0;
    width: 100%;
    height: 100%;
    .community_list_item {
      padding: 5px 10px;
      width: 340px;
      height: 70px;
      color: rgb(119, 128, 166);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      img {
        width: 200px;
        height: 60px;
      }
    }
  }
}
</style>
