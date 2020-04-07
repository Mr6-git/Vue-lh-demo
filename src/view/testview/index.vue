<template>
  <layoutMainBody>
    测试页面
  </layoutMainBody>
</template>

<script>
import layoutMainBody from '@/components/layout/main/index'
export default {
  data() {
    return {

    }
  },
  mounted() {
    console.log(process.env.LH_DEV_PAI)
  },
  methods: {
    login() {
      // this.$router.push("/");
    },
    reg() {}
  },
  components: {
    layoutMainBody
  }
};
</script>

<style lang="scss" scoped>
</style>