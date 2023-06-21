<template>
  <!-- 客户端二维码 -->
  <div class="aside_client">
    <div class="client_header">客户端二维码</div>
    <div class="qrcode_wrapper">
      <div class="qrcode">
        <img src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU" alt="">
      </div>
      <a href="javascript:;" class="desc">客户端源码地址</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientQrCodePage'
}
</script>

<style lang='less' scoped>
// 客户端二维码
.aside_client {
  margin-top: 10px;
  background-color: #fff;
  .client_header {
    padding: 10px;
    height: 40px;
    background-color: rgb(246, 246, 246);
    font-size: 14px;
    color: rgb(68, 68, 68);
  }
  .qrcode_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    .qrcode {
      width: 240px;
      height: 240px;
      img {
        width: 240px;
        height: 240px;
      }
    }
    .desc {
      display: inline-block;
      text-align: center;
      &:hover {
        color: rgb(135, 206, 235);
      }
    }
  }
}
</style>
