<template>
  <div class="login">
    <div class="login_content">
      <el-button type="primary" @click="login()">提交</el-button>
      <el-button @click="resetForm('numberValidateForm')">重置</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formModel: {
        account: ""
      },
      formRules: {
        account: [{ required: true, message: "请输入有效账号" }]
      }
    };
  },
  methods: {
    login() {
      this.$message({
        message: "登录成功",
        type: "success",
        duration: 2000
      });
      localStorage.setItem("cookie", true);
      this.$router.push("/");
    },
    reg() {}
  },
  components: {}
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>