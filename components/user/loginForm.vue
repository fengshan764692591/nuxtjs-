<template>
  <!-- model 指定表单数据据对象 -->
  <!-- ref 获取dom元素，用于表单的验证 -->
  <!-- rules表单验证规则 -->
  <el-form :model="form" ref="form" :rules="rules" class="form">
    <el-form-item class="form-item"  prop="username">
      <el-input placeholder="用户名/手机" v-model="form.username"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="password">
      <el-input placeholder="密码" type="password" v-model="form.password"></el-input>
    </el-form-item>

    <p class="form-text" >
      <nuxt-link to="#">忘记密码</nuxt-link>
    </p>

    <el-button class="submit" type="primary" @click="handleLoginSubmit">登录</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      // 表单数据
      form: {
        username: "",
        password: ""
      },
      // 表单规则
      rules: {
				 username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
				
				 ],
				 password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
					
				 ]
			}
    };
  },
  methods: {
    // 提交登录
    handleLoginSubmit() {
			// console.log(this.form);
			// 验证非空
			this.$refs.form.validate(valid =>{
				// 验证通过
				if(valid){
				
          // 调用actions的登录方法
        this.$store.dispatch("user/login",this.form)
        this.$router.back()
				}
			})
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