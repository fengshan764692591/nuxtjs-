<template>
  <div class="container">
    <!-- 轮播图 -->
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="(item,index) in banners" :key="index">
        <div
          class="banner-image"
          :style="`
                background:url(${$axios.defaults.baseURL}${item.url}) center center no-repeat;
                background-size:contain contain;
                `"
        ></div>
      </el-carousel-item>
    </el-carousel>
    <!-- 搜索栏 -->
    <div class="banner-content">
      <div class="search-bar">
        <!-- tap栏 -->
        <el-row type="flex" >
          <span
            class="tapLan-tl"
            v-for="(item,index) in tabs"
            :key="index"
            @click="handleClick(index)"
            :class="{active: current === index}"
          >
            <i>{{item.tilte}}</i>
          </span>
        </el-row>
        <!-- 输入框 -->
        <el-row type="flex" class="search-input">
          <input :placeholder="tabs[current].placeholder" />
          <i class="el-icon-search"></i>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import { constants } from "crypto";
export default {
  data() {
    return {
<<<<<<< HEAD
    
      banners: [], // 轮播图数据
      options: [
        // 搜索框tab选项
        {
          name: "攻略",
          placeholder: "搜索城市",
          pageUrl: "/post?city="
        },
        {
          name: "酒店",
          placeholder: "请输入城市搜索酒店",
          pageUrl: "/hotel?city="
        },
        {
          name: "机票",
          placeholder: "请输入出发地",
          pageUrl: "/air"
        }
=======
      banners: [], // 轮播图
      // 搜索栏
      tabs: [
        { tilte: "攻略", placeholder: "搜索城市" },
        { tilte: "酒店", placeholder: "请输入酒店" },
        { tilte: "攻略", placeholder: "" }
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
      ],
      // 显示当前索引
      current: 0
    };
  },
  mounted() {
    this.$axios({
      url: "/scenics/banners"
    }).then(res => {
      // console.log(res.data)
      const { data } = res.data;
      this.banners = data;
    });
  },
  methods: {
<<<<<<< HEAD
    handleOption(index) {
      this.currentOption = index;
     if(index === 2){
       this.$router.push("/air")
     }
    },
    handleSearch() {}
=======
    // 切花tab栏触发
    handleClick(index) {
      // console.log(index);
      if (index === 2) {
        this.$router.push("/air");
      }
      this.current = index;
    }
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
  }
};
</script>
<style lang="less" scoped>
.container {
  min-width: 1000px;
  margin: 0 auto;
  position: relative;

  /deep/ .el-carousel__container {
    height: 700px;
  }

  .banner-image {
    width: 100%;
    height: 100%;
  }
}
// 搜索框
.banner-content {
  z-index: 9;
  width: 1000px;
  position: absolute;
  left: 50%;
  top: 45%;
  margin-left: -300px;
}
input {
  display: block;
  width: 550px;
  height: 40px;

  background: #fff;
  border-radius: 4px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
.el-icon-search {
  position: absolute;
  top: 13px;
  left: 521px;
  font-size: 18px;
  font-weight: 600;
}
.tapLan-tl {
  width: 92px;
  height: 40px;
  background-color: rgba(34, 32, 32, 0.3);
  border-radius: 8px 8px 8px 8px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 40px;
  color: #fff;
}

.active {

  background:rgb(56, 58, 175);
  i {
    color: #409eff;
  }

}
</style>
