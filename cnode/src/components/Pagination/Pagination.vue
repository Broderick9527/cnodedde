<template>
  <!-- 分页 -->
  <div class="page_wrapper">
    <select class="select first_btn" v-model='range'>
      <option value="20">20条/页</option>
      <option value="30">30条/页</option>
      <option value="40">40条/页</option>
    </select>
    <button :disabled='pageNo == 1' @click="changePage(pageNo+1)">上一页</button>
    <button v-if='startAndEndNum.min>1' @click="changePage(1)">1</button>
    <button v-if="startAndEndNum.min > 2">...</button>

    <span v-for='(i,index) in startAndEndNum.max' :key='index'>
      <button :class="{active:pageNo===i}" v-if='startAndEndNum.min <=i' @click="changePage(i)">{{i}}</button>
    </span>

    <button v-if="startAndEndNum.max < total - 1">...</button>
    <button v-if="startAndEndNum.max < total" @click="changePage(total)">{{total}}</button>
    <button :disabled='pageNo == total' @click="changePage(pageNo+1)">下一页</button>
    <input type="text" class="goto last_btn" @keyup.enter="gotoPage">
  </div>
</template>

<script>
export default {
  name: 'PaginationPage',
  props: ['pageSize', 'pageNo', 'continue'],
  data () {
    return {
      range: 20,
      total: 20
    }
  },
  methods: {
    changePage (value) {
      this.$emit('changePage', value)
      window.scrollTo(0, 0)
    },

    // 跳页
    gotoPage (e) {
      let num = e.target.value
      if (isNaN(num) || num < 1) {
        e.target.value = ''
        return this.$message({ message: '您输入的页码有误，请重新输入', type: 'warning' })
      }
      if (num > this.totalPage) num = this.totalPage
      this.$emit('changePage', parseInt(num))
      e.target.value = ''
      window.scrollTo(0, 0)
    }
  },
  computed: {
    // 计算连续分页的最大和最小值
    startAndEndNum () {
      let min = 0
      let max = 0
      // 连续分页数大于页码总数
      if (this.continue > this.total) {
        min = 1
        max = this.continue
      }
      // 连续分页数小于页码总数
      if (this.continue < this.total) {
        min = this.pageNo - parseInt(this.continue / 2)
        max = this.pageNo + parseInt(this.continue / 2)
      }
      if (min < 1) {
        min = 1
        max = this.continue
      }
      if (max > this.total) {
        min = this.total - this.continue + 1
        max = this.total
      }
      return {
        min,
        max
      }
    },
    size () {
      return this.startAndEndNum.max - this.startAndEndNum.min
    }
  },
  watch: {
    range () {
      window.scrollTo(0, 0)
      this.$emit('changeSize', this.range)
    }
  }
}
</script>

<style lang='less' scoped>
// 分页
.page_wrapper {
  display: flex;
  justify-content: center;
  margin: 30px 0 20px 0;
  .first_btn {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .last_btn {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .select {
    width: 80px;
    height: 30px;
    padding-left: 5px;
    border: 1px solid rgb(224, 224, 224);
    color: rgb(122, 133, 142);
    outline: none;
  }
  button {
    height: 30px;
    padding: 0 10px;
    font-size: 14px;
    cursor: pointer;
    border: 1px solid rgb(224, 224, 224);
    border-left: none;
    background-color: #fff;
    color: rgb(122, 133, 142);
    &:hover {
      background-color: rgb(245, 245, 245);
    }
    &.active {
      color: rgb(134, 189, 14);
    }
  }
  .goto {
    padding-left: 5px;
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    border-left: none;
    outline-color: rgb(134, 189, 14);
  }
}
</style>
