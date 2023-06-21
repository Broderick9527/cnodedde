<template>
  <!-- 头部导航 -->
  <div class="header_wrapper">
    <div class="w">
      <div class="header_left">
        <h1 class="logo">
          <router-link to='/home'>
            <img src="../../assets/images/logo.svg" alt="" />
          </router-link>
        </h1>
        <input type="text" class="search" />
      </div>
      <div class="header_nav">
        <ul class="nav_list">
          <li class="nav_item">
            <router-link to="/" class="item_link">首页</router-link>
          </li>
          <li class="nav_item">
            <router-link to="/novice" class="item_link">新手入门</router-link>
          </li>
          <li class="nav_item">
            <a href="javascript:;" class="item_link">API</a>
          </li>
          <li class="nav_item">
            <a href="javascript:;" class="item_link">关于</a>
          </li>
          <li class="nav_item">
            <a href="javascript:;" class="item_link">注册</a>
          </li>
          <li class="nav_item">
            <a href="javascript:;" class="item_link">登录</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterPage'
}
</script>

<style lang='less' scoped>
// 头部
.header_wrapper {
  width: 100%;
  height: 60px;
  background-color: rgb(68, 68, 68);
  .w {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    .header_left {
      display: flex;
      align-items: center;
      .logo {
        width: 150px;
        height: 50px;
        a {
          line-height: 50px;
        }
      }
      .search {
        margin-left: 20px;
        margin-top: 2px;
        padding: 3px 5px 3px 25px;
        width: 290px;
        height: 35px;
        border-radius: 20px;
        background: url(../../assets/images/search_icon.png) 6px 8px no-repeat #888;
        color: #666;
        transition: all 0.5s;
        border: none;
        outline: none;
        &:hover,
        &:focus {
          background-color: #fff;
        }
      }
    }
    .header_nav {
      .nav_list {
        display: flex;
        .nav_item {
          margin-left: 40px;
          .item_link {
            color: rgb(204, 204, 204);
            &:hover {
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
