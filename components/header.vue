<template>
  <div class="container">
    <el-row type="flex" class="main" justify="space-between">
      <div class="logo">
        <nuxt-link to="/"></nuxt-link>
        <img src="http://157.122.54.189:9093//images/logo.jpg" alt />
      </div>
      <!-- 菜单 -->
      <el-row type="flex" class="navs">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/post">旅游攻略</nuxt-link>
        <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="/air">国内机票</nuxt-link>
      </el-row>
      <el-row type="flex">
        <div v-if="!$store.state.user.userInfo.token">
          <nuxt-link to="/user/login">登录/注册</nuxt-link>
        </div>
        <div v-else>
          <el-dropdown>
            <span class="el-dropdown-link">
             <img :src="$axios.defaults.baseURL +　$store.state.user.userInfo.user.defaultAvatar" alt="">
             {{this.$store.state.user.userInfo.user.nickname}}
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
export default {
  data(){
    return{}
  },
    mounted(){
    // console.log(this.$store.state.user.userInfo.user.nickname)
    
  },
  methods:{
    handleLogout(){
      // 清空store的数据
      this.$store.commit('user/clearUserInfo')
      this.$message.success('退出成功')
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  height: 60px;
  box-shadow: 0 3px 3px #ccc;
  position: relative;
  z-index: 999;
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
    margin-bottom: 9px;
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
      border-bottom: 5px #409eff solid;
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
  border-radius: 50px;
  vertical-align: middle;
  border: 2px solid #fff;
  &:hover{
   border: 2px solid  #409eff;
  }
}
</style>
