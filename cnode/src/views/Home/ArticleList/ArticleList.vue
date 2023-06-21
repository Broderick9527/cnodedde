<template>
  <ul class="content_list">
    <!-- 列表项 -->
    <li class="content_list_item" v-for='(item,index) in articleData' :key='item.id' @click="goDetail(item.id)">
      <div class="item_left">
        <!-- 头像 -->
        <div class="avatar">
          <img :src="item.author.avatar_url" alt="" />
        </div>
        <!-- 数字 -->
        <div class="item_num"><span class="comment_num">{{item.reply_count}}</span>/<span class="view_num">{{item.visit_count}}</span></div>
        <!-- 图标 -->
        <div class="item_icon" v-if="okay.includes(tab) || item.top" :class="{topping:item.top || item.good}">{{item.tab}}</div>
        <!-- 标题 -->
        <div class="item_title">
          {{item.title}}
        </div>
      </div>
      <div class="item_right">
        <!-- 最后一次回复人员 -->
        <div class="last_commenter_avatar">
          <img :src="imgUrls[index]" alt="" />
        </div>
        <span class="last_time">{{item.last_reply_at}}</span>
      </div>
    </li>
  </ul>
</template>

<script>
import formatter from '@/utils/formatter.js'

import { mapState } from 'vuex'
export default {
  name: 'ArticleListPage',
  props: ['tab'],

  data () {
    return {
      okay: ['', 'good']
    }
  },
  methods: {
  // 跳转详情
    goDetail (id) {
      this.$router.push('/detail/' + id)
    }
  },

  computed: {
    ...mapState('home', ['articleListData', 'imgUrls']),
    lastImg () {
      return this.lastUserAvatar || ''
    },
    // 处理【距离今天有多久】的数据格式
    articleData () {
      return formatter(this.articleListData)
    }
  }
}
</script>

<style lang='less' scoped>
// 文章列表
.content_list {
  // 列表项
  .content_list_item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    height: 60px;
    background-color: #fff;
    border-bottom: 1px solid rgb(240, 240, 240);
    cursor: pointer;
    &:hover {
      background-color: rgb(245, 245, 245);
    }
    .item_left {
      display: flex;
      align-items: center;
      // 头像
      .avatar {
        width: 35px;
        height: 35px;
        overflow: hidden;
        border-radius: 4px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      // 数字
      .item_num {
        margin-left: 5px;
        margin-right: 10px;
        text-align: center;
        width: 80px;
        .comment_num {
          font-size: 18px;
          color: rgb(158, 120, 204);
        }
        .view_num {
          color: #989898;
        }
      }
      // 图标
      .item_icon {
        margin-left: 5px;
        padding: 1px 3px;
        background-color: rgb(229, 229, 229);
        font-size: 14px;
        color: rgb(153, 153, 172);
        border-radius: 5px;
        &.topping {
          background-color: rgb(128, 189, 1);
          color: #fff;
        }
      }
      // 标题
      .item_title {
        margin-left: 5px;
        width: 500px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    // 最后一个发言人
    .item_right {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 90px;
      .last_commenter_avatar {
        width: 25px;
        height: 25px;
        border-radius: 4px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .last_time {
        margin-left: 5px;
        color: #989898;
        font-size: 14px;
      }
    }
  }
}
</style>
