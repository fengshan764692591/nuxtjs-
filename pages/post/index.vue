<template>
  <div class="container">
    <div class="main">
      <el-row type="flex" justify="space-between">
        <!-- 左边部分 -->
        <el-col :span="6">
          <div class="nav">
            <div class="headline">
              <ul>
                <li v-for="(item,index) in flightsData" :key="index">
                  <span >{{item.type}} <i class="el-icon-arrow-right"></i></span>
                </li>
              </ul>
            </div>
            <div class="Hname">
              <h4>推荐城市</h4>
            </div>
            <div class="TPimg">
              <img src="http://157.122.54.189:9093/images/pic_sea.jpeg" alt />
            </div>
            <!-- nva的右边 -->
            <div class="container_right">
              <ul>
                <li>
                  <nuxt-link to="#">
                    <i>1</i>
                    <strong>北京</strong>
                    <span>世界著名古都和现代化国际城市</span>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#">
                    <i>2</i>
                    <strong>广州</strong>
                    <span>世界著名古都和现代化国际城市</span>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#">
                    <i>3</i>
                    <strong>上海</strong>
                    <span>世界著名古现代化国际城市</span>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#">
                    <i>4</i>
                    <strong>成都</strong>
                    <span>中国国际形象最佳城市之一</span>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#">
                    <i>5</i>
                    <strong>西安</strong>
                    <span>中国国际形象最佳城市之一</span>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
        <!-- 右边部分 -->

        <el-col :span="16">
          <PostList></PostList>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import PostList from "@/components/post/postList.vue";
export default {
  components: {
    PostList
  },
  data() {
    return {
      flightsData: [],
      token: ""
    };
  },
  // 获取文章的总数据
  mounted() {
    this.$axios({
      url: "/posts/cities"
    }).then(res => {
      console.log(res.data, "77777");
      this.flightsData = res.data.data;
      console.log(this.flightsData, 9999);
    });
  }
};
</script>
<style lang="less" scoped>
.container {
  padding: 30px 0;
  .main {
    width: 1000px;
    margin: 0 auto;
  }
  .nav {
    width: 260px;
    height: 700px;
  }
  .center {
    width: 700px;
  }
}
// 左边
.nav {
  .headline {
    width: 260px;
    border: 1px solid #ddd;
    border-right: none;
    border-bottom: none;
    box-shadow: 0 0 1px #f5f5f5;
    z-index: 2;

    ul li {

      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #ddd;
      border-right: 1px solid #ddd;
      font-size: 14px;


      span {
        margin-left: 10px;
        display: block;
      }
      i {
        margin-left: 163px;
      }
    }
  }
  .Hname {
    font-weight: normal;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .TPimg img {
    width: 260px;
    height: 173px;
  }
}
// 右边小弹框
.container_right {
  display: none;
  width: 350px;
  height: 200px;
  line-height: 35px;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
  padding: 0 20px;
  font-size: 14px;
  z-index: 2;
  position: fixed;
  left: 750px;
  top: 75px;
  background: #fff;
  display:none ul {
    z-index: 10;
  }

  ul li {
    i {
      font-size: 24px;
      color: orange;

      font-style: italic;
    }

    strong {
      color: orange;
      font-style: normal;
      font-size: 14px;
    }
    span {
      font-style: normal;
      font-size: 14px;
      color: #999;
    }
  }
}
</style>
