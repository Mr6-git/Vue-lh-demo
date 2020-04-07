<template>
  <div class="topBar">
    <div class="logo">
      <img src="@/assets/logo.png" />
    </div>
    <img class="toggle" :src="icon" alt title @click="toggleIcon" />
    <div class="top_right">
      <div class="search"></div>
      <div class="admin">
        <el-dropdown>
          <span class="el-dropdown-link">
            <img class="portrait" src="@/assets/portrait.jpeg" />
          </span>
          <el-dropdown-menu style="padding: 10px">
            <ul>
              <li class="admin_list">
                <i class="el-icon-user" style="font-size: 20px"></i>
                <span>我的信息</span>
              </li>
              <li class="admin_list">
                <i class="el-icon-bell" style="font-size: 20px"></i>
                <span>我的消息</span>
              </li>
              <li class="admin_list">
                <i class="el-icon-setting" style="font-size: 20px"></i>
                <span>设置</span>
              </li>
            </ul>
          </el-dropdown-menu>
        </el-dropdown>
        <span class="username">超级暴龙兽</span>
      </div>
      <div class="message"></div>
    </div>
  </div>
</template>

<script>
import spreadIcon from "@/assets/zhankai.png";
import pickup from "@/assets/shouqi.png";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      iconFlag: false,
      icon: pickup
    };
  },
  methods: {
    toggleIcon() {
      this.iconFlag = !this.iconFlag;
      this.iconFlag ? (this.icon = spreadIcon) : (this.icon = pickup);
      this.$store.dispatch("changeMoveFlag", this.iconFlag);
    }
  },
  components: {}
};
</script>

<style lang="sass" scoped>
@import '../index.scss';
</style>