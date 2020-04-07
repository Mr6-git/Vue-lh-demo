<template>
  <el-container class="warp_content">
    <el-header class="header">
      <TopBar></TopBar>
    </el-header>
    <el-container class="warp_main">
      <SideBar class="sidebar-container"></SideBar>
      <el-main class="main">
        <transition name="fade-transform" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import TopBar from "./topbar";
import SideBar from "./sidebar";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    TopBar,
    SideBar
  }
};
</script>

<style lang="sass" scoped>
@import './index.scss';
</style>