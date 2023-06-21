<template>
  <!-- 中间内容 -->
  <div class="content_wrapper">
    <div class="w">
      <!-- 左侧区域 -->
      <div class="main">
        <!-- 面包屑 -->
        <el-breadcrumb separator="/" class="client_header">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>新手入门</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 内容 -->
        <Content />
      </div>
      <!-- 右侧区域 -->
      <div class="aside">
        <!-- 友情社区 -->
        <community />
        <!-- 客户端二维码 -->
        <client-qr-code />
      </div>
    </div>
  </div>
</template>

<script>
import Community from '@/components/Community/Community.vue'
import ClientQrCode from '@/components/ClientQrCode/ClientQrCode.vue'
import Content from './Content/Content.vue'
export default {
  components: { Community, ClientQrCode, Content },
  name: 'NovicePage',
  data () {
    return {}
  }
}
</script>

<style lang='less' scoped>
/deep/ .is-link{
  color:rgb(171, 196, 38)!important;
}
.content_wrapper {
  margin: 10px 0;
  .w {
    display: flex;
    // 左侧区域
    .main {
      flex: 7;
      background-color: #fff;
      height: 100%;
      .client_header {
        padding: 10px;
        height: 40px;
        background-color: rgb(246, 246, 246);
        font-size: 14px;
        color: rgb(68, 68, 68);
      }
    }
    // 右侧区域
    .aside {
      flex: 3;
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      margin-top: -10px;
      height: 100%;
    }
  }
}
</style>
