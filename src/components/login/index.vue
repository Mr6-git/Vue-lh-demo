<template>
  <div class="login">
    <div class="login_content">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="login_main"
      >
        <el-form-item label="活动名称" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input type="password" v-model="ruleForm.pwd" autocomplete="off"></el-input>
        </el-form-item>
        <div class="login_btn" @click="submit(ruleForm)">登录</div>
      </el-form>
    </div>
  </div>
</template>

<script>
// import { login } from "@/net/user";
export default {
  data() {
    var pwdRules = (rules, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        pwd: ""
      },
      rules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        pwd: [{ required: true, validator: pwdRules, trigger: "blur" }]
      }
    };
  },
  methods: {
    submit(formName) {
      console.log(formName);
      this.$refs[formName].validate(valid => {
        if (valid) {
          // thid.logIn();
        } else {
          return false;
        }
      });
    },
    logIn() {
      let data = {
        username: "小刘",
        pwd: "36356250COM"
      };
      console.log(data)
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