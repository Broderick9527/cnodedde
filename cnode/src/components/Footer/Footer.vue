<template>
  <!-- 底部 -->
  <div class="footer_wrapper">
    <div class="w">
      <div>
        <a href="https://cnodejs.org/rss" target="_blank">Rss</a> |
        <a href="https://github.com/cnodejs/nodeclub/" target="_blank">源码地址</a>
      </div>
      <p class="text">CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
      <p class="text">
        服务器搭建在
        <a href="https://www.digitalocean.com/?refcode=eba02656eeb3" target="_blank"><img src="../../assets/images/digitalocean.png" alt="digitalocean" /></a>
        ，存储赞助商为
        <a href="https://www.qiniu.com/?ref=cnode" target="_blank"><img src="../../assets/images/qiniu.png" alt="qiniu" /></a>
      </p>
      <p class="text">
        新手搭建 Node.js 服务器，推荐使用无需备案的
        <a href="https://www.digitalocean.com/" class="footer_link" target="_blank">DigitalOcean(https://www.digitalocean.com/)</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterPage'
}
</script>

<style lang='less' scoped>
// 底部
.footer_wrapper {
  position: absolute;
  bottom: 0;
  padding: 20px 0;
  width: 100%;
  height: 240px;
  background-color: #fff;
  .text {
    margin-top: 15px;
    color: rgb(185, 185, 185);
    img {
      cursor: pointer;
    }
    .footer_link {
      color: rgb(135, 206, 235);
    }
  }
}
</style>
