<template>
  <el-menu
    :default-active="defaultActive"
    class="el-menu-vertical-demo"
    background-color="#304156"
    text-color="#fff"
    active-text-color="#1989fa"
    :unique-opened="true"
    :collapse-transition="true"
    :collapse="getToggleIcon"
  >
    <el-submenu
      v-for="(item, index) in sideBarData"
      v-if="item.meta"
      :key="index"
      :index="item.path"
    >
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{item.name}}</span>
      </template>
      <el-menu-item
        v-for="child_item in item.children"
        v-if="item.meta"
        :key="child_item.path"
        :index="child_item.path"
        @click="toPath(child_item.path)"
      >{{child_item.meta.name}}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
    toPath(url) {
      this.$router.push(url);
    }
  },
  computed: {
    ...mapGetters([
      'getToggleIcon'
    ]),
    sideBarData() {
      return this.$router.options.routes;
    },
    defaultActive() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    }
  },
  components: {}
};
</script>

<style lang="sass" scoped>
@import '../index.scss';
</style>