<template>
  <div class="warp">
    <div class="breadcrumb">
      <el-breadcrumb separator="/" style="font-size: 16px;line-height:40px">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {},
  components: {}
};
</script>

<style lang="sass" scoped>
@import '../index.scss';
</style>