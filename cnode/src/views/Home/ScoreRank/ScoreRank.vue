<template>
  <!-- 积分榜 -->
  <div class="aside_integral">
    <div class="integral_header"><span class="score">积分榜</span><span class="top">TOP 100 >></span></div>
    <ul class="integral_list">
      <li class="integral_list_item">
        <a href="javascript:;"><span class="score">42220</span><span class="username">蜡笔小新</span></a>
      </li>
      <li class="integral_list_item">
        <a href="javascript:;"> <span class="score">23300</span><span class="username">阿呆</span> </a>
      </li>
      <li class="integral_list_item">
        <a href="javascript:;"> <span class="score">23300</span><span class="username">妮妮</span> </a>
      </li>
      <li class="integral_list_item">
        <a href="javascript:;"> <span class="score">23300</span><span class="username">正南</span> </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ScoreRankPage'
}
</script>

<style lang='less' scoped>
// 积分榜
.aside_integral {
  background-color: #fff;
  .integral_header {
    padding: 10px;
    height: 40px;
    background-color: rgb(246, 246, 246);
    font-size: 14px;
    color: rgb(68, 68, 68);
    .top {
      margin-left: 20px;
    }
  }
  .integral_list {
    padding: 10px 0;
    width: 100%;
    height: 100%;
    .integral_list_item {
      padding: 5px 10px;
      width: 340px;
      height: 30px;
      color: rgb(119, 128, 166);
      .username {
        margin-left: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
