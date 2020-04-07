<template>
  <layoutMainBody>
    控制台———setting
    <div class="box"></div>
    <div class="box"></div>
  </layoutMainBody>
</template>

<script>
import layoutMainBody from "@/components/layout/main/index";
export default {
  data() {
    return {};
  },
  methods: {
    login() {
    },
    reg() {}
  },
  components: {
    layoutMainBody
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 200px;
  height:100px;
  margin: 20px;
  background: cornflowerblue;
}
</style>