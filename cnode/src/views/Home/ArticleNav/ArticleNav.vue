<template>
  <!-- 左侧区域导航栏 -->
  <div class="content_nav">
    <ul class="content_nav_list">
      <li class="content_nav_list_item" :class="{active:tab===''}" @click='changeSort("")'>全部</li>
      <li class="content_nav_list_item" :class="{active:tab==='good'}" @click='changeSort("good")'>精华</li>
      <li class="content_nav_list_item" :class="{active:tab==='share'}" @click='changeSort("share")'>分享</li>
      <li class="content_nav_list_item" :class="{active:tab==='ask'}" @click='changeSort("ask")'>问答</li>
      <li class="content_nav_list_item" :class="{active:tab==='job'}" @click='changeSort("job")'>招聘</li>
      <li class="content_nav_list_item" :class="{active:tab==='dev'}" @click='changeSort("dev")'>客户端测试</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ArticleNavPage',
  props: ['tab'],
  methods: {
    changeSort (type) {
      this.$emit('changeSort', type)
    }
  }
}
</script>

<style lang='less' scoped>
// 左侧区域导航栏
.content_nav {
  width: 100%;
  height: 50px;
  background-color: rgb(246, 246, 246);
  .content_nav_list {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    .content_nav_list_item {
      margin-left: 25px;
      padding: 4px 4px;
      border-radius: 5px;
      color: rgb(128, 189, 1);
      cursor: pointer;
      &.active {
        background-color: rgb(128, 189, 1);
        color: #fff;
      }
      &:hover {
        background-color: rgb(128, 189, 1);
        color: #fff;
      }
    }
  }
}
</style>
