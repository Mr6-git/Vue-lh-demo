<template>
  <div class="login">
    <div class="login_content">
      <el-form :model="loginData" ref="loginData" class="demo-ruleForm">
        <el-form-item prop="username" :rules="rules.username">
          <el-input type="age" v-model="loginData.username" autocomplete="off" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="pwd" :rules="rules.pwd">
          <el-input type="password" v-model="loginData.pwd" autocomplete="off" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="login_btn" @click="submitForm('loginData')">登陆</div>
          <!-- <div class="reset" @click="resetForm('loginData')">重置</div> -->
        </el-form-item>
      </el-form>
      <p class="reg_now">
        忘记密码？
        <span style="color: #409eff" @click="regNow">立即注册</span>
      </p>
    </div>
  </div>
</template>

<script>
// import { login } from "@/net/user";
export default {
  data() {
    return {
      loginData: {
        username: "",
        pwd: ""
      },
      rules: {
        username: [{ required: true, message: "用户名不能为空！" }],
        pwd: [{ required: true, message: "密码不能为空！" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.logIn();
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
      console.log(data);
      localStorage.setItem("cookie", true);
      this.$router.push("/");
      this.$message({
        message: "登陆成功",
        type: "success"
      });
    },
    regNow() {
      this.$message({
        message: '暂未实现该功能'
      })
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>