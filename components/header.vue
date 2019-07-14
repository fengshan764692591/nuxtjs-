<template>
  <div class="header">
    <el-row type="flex" class="main" justify="space-between">
      <div class="logo">
        <nuxt-link to="/">
          <img src="http://157.122.54.189:9093/images/logo.jpg" alt />
        </nuxt-link>
      </div>
      <el-row type="flex" class="navs">
        <nuxt-link to="/post">首页</nuxt-link>
        <nuxt-link to="/hotel">旅游攻略</nuxt-link>
        <nuxt-link to="/air">酒店</nuxt-link>
      </el-row>
      <!-- 右侧 -->
      <el-row class="login">
        <div v-if="!$store.state.user.userInfo.token">
          <nuxt-link to="/user/login">登录/注册</nuxt-link>
        </div>
        <div v-else>
          <el-dropdown>
            <span class="el-dropdown-link">
              <img :src="$axios.defaults.baseURL + $store.state.user.userInfo.user.defaultAvatar" alt="">
            {{$store.state.user.userInfo.user.nickname}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item @click.native="handleLogout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-row>
    </el-row>
  </div>
</template>
<script>
import { constants } from 'crypto';
export default {
  data(){
    return{
 
    }
  },
  mounted(){
    // store 中的数据每个模块都是单独的数据，读取时候需要使用模块名区分
    console.log(this.$store.state.user)
  },
  methods:{
    handleLogout(){
      // console.log(123)
    this.$store.commit("user/clearUserInfo")
    this.$message.success("退出成功")
    }
  }
}
</script>
<style lang="less" scoped>
.header {
  height: 60px;
  box-shadow: 0 3px 3px #ccc;
}
.main {
  width: 1000px;
  margin: 0 auto;
  line-height: 60px;
}
.logo {
  img {
    width: 165px;
    height: 42px;
    margin-top: 9px;
  }
}
.navs {
  flex: 1;
  a {
    display: block;
    height: 60px;
    padding: 0 20px;
    box-sizing: border-box;
    &:hover {
      color: #409eff;
      border-bottom: 5px solid #409eff;
    }
  }
  .nuxt-link-exact-active {
    background: #409eff;
    color: #fff;
    &:hover {
      color: #fff;
    }
  }
}
.el-dropdown-link img{
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid pink;
  position: relative;
  z-index: 20;
  vertical-align: middle;
  &:hover{
    border:2px solid #409eff;
  }
}
</style>
