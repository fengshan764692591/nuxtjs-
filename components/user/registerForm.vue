<template>
  <el-form :model="form" ref="form" :rules="rules" class="form">
    <el-form-item class="form-item" prop="username">
      <el-input placeholder="用户名手机" v-model="form.username"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="captcha">
      <el-input placeholder="验证码" v-model="form.captcha">
        <template slot="append">
          <el-button @click="handleSendCaptcha">发送验证码</el-button>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="nickname">
      <el-input placeholder="你的名字" v-model="form.nickname"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="password">
      <el-input placeholder="密码" type="password" v-model="form.password"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="checkPassword">
      <el-input placeholder="确认密码" type="password" v-model="form.checkPassword"></el-input>
    </el-form-item>

    <el-button class="submit" type="primary" @click="handleRegSubmit">注册</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    // rule 当前的规则
    // value 输入框的值
    // callback 回调函数，必须调用
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      // 表单数据
      form: {
        username: "",
        captcha: "",
        nickname: "",
        password: "",
        checkPassword: ""
      },
      // 表单规则
      rules: {
        username: {
          required: true,
          message: "请输入手机号码",
          trigger: "blur"
        },
        captcha: { required: true, message: "请输入验证码", trigger: "blur" },
        nickname: { required: true, message: "请输用户名", trigger: "blur" },
        password: { required: true, message: "请输入密码", trigger: "blur" },
        // validator 自定义的验证函数
        checkPassword: { validator: validatePass2, trigger: "blur" }
      }
    };
  },
  methods: {
    // 发送验证码
    handleSendCaptcha() {
      // 判断是否有手机号码
      // 先存一个变量
      const phoneNumber = this.form.username;
      if (!phoneNumber.trim()) {
        this.$message.warning("请输入用户手机号码");
        return;
      }
      //  发送手机验证码
      this.$axios({
        url: "/captchas",
        method: "POST",
        data: {
          tel: phoneNumber
        }
      }).then(res => {
        // console.log(res)
        const { code } = res.data
        this.$message({
          message: `验证成功,验证码是:${code}`,
          type: "success"
        });
      });
    },

    // 注册
    handleRegSubmit() {
      // console.log(this.form);
      this.$refs.form.validate(valid => {
        if (valid) {
          // props 是除了checkPassword剩余的属性
          const { checkPassword, ...props } = this.form;
          // 注册接口
          this.$axios({
            url: "/accounts/register",
            method: "POST",
            data: props
          }).then(res => {
            // console.log(res)
            //  把数据储存
            this.$store.commit("user/setUserInfo", res.data);
            // 跳转上一页
            this.$router.back();
          });
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.form {
  padding: 25px;
}

.form-item {
  margin-bottom: 20px;
}

.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}

.submit {
  width: 100%;
  margin-top: 10px;
}
</style>