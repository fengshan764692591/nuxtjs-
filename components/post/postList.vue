<template>
  <div class="center">
    <div class="search">
      <el-row type="flex" align="middle" class="search-input">
        <input placeholder="请输入内容" />
        <i class="el-icon-search"></i>
      </el-row>
    </div>
    <div class="recommend">
      推荐：
      <span>广州</span>
      <span>上海</span>
      <span>北京</span>
    </div>
    <div class="introduce">
      <div class="fbian">
        <div class="headeList">
          <h4>推荐攻略</h4>
          <nuxt-link to="/post/create">
            <el-button class="btn" type="primary" icon="el-icon-edit">写游记</el-button>
          </nuxt-link>
        </div>
      </div>
      <div class="post-list">
        <div class="post-item">
          <h4>
            <nuxt-link to="#">塞班贵？一定是你的打开方式不对！6000块玩转塞班</nuxt-link>
          </h4>
          <!-- 文本 -->
          <p>
            <nuxt-link
              to="#"
            >大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，花费高有高的玩法，那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班。图：塞班岛。 by第5季旅游一、怎样用6000块玩转塞班？大多数出境游客人不做预算或最终花费远远超出预算，对预算的合理分配对控制我们旅行的花费就很重要了，如何只花6000块玩转塞班岛，对预算超支say no？下面从5个方面来为您一一解读：机票+酒店、岛上交通、玩乐项目、吃以及购买纪念品。1.怎样订机票+酒店性价比最高？机票和酒店的花销往往会占据我们旅行大半的花销，假设机票酒店为塞班行预算的一半，剩下的吃行玩购为预算的另一半，如果能在机票酒店这部分省下钱，也就意味着在塞班岛用来吃行玩购的钱就增加了怎样去塞班？可以转机也可以直飞，转机大多会从韩国转，提前蹲守能买到韩国飞塞班的特价机票，2000以下就能入手，加上国内飞韩国的机票来回塞班得5000+，还没算上在塞班的住宿费用，转机还有中途等待的时间，光花在路途上的时间就比直飞要多上一倍甚至更多，转乘奔波劳累，非联程票还要担心行李托运问题，所以建议大家有直飞还是尽量选择直飞。在酒店上，旅途中我们呆在酒店的时间远比在外游玩的时间少，酒店干净整洁基本就能满足我们休息的需求，塞班不是个享受酒店的地方而且还真不能跟国内星级酒店等位比较，所以不建议大家花过多的钱在塞班的酒店体验上。怎样在机票酒店上获得最高性价比的体验？ 直飞塞班的航班一般和酒店一起打包成机票+酒店套餐，价格要比单定机票、酒店要更加便捷实惠，往往3千多就能把机票和酒店一键搞定。</nuxt-link>
          </p>
          <!-- 图片 -->
          <div class="card-images el-row is-justify-space-between is-align-middle el-row--flex">
            <nuxt-link to="#">
              <img
                src="https://n3-q.mafengwo.net/s10/M00/E8/E4/wKgBZ1octoCABhgLAAafahORRLs91.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
                alt
              />
            </nuxt-link>
            <nuxt-link to="#">
              <img src="https://images.mafengwo.net/images/i/face/brands_v3/6@2x.png" alt />
            </nuxt-link>
            <nuxt-link to="#">
              <img
                src="https://p1-q.mafengwo.net/s10/M00/E9/33/wKgBZ1octwiAAKAoAAJ9ixcJc9M71.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
                alt
              />
            </nuxt-link>
          </div>
          <!-- 底部 -->
          <div data-v-2372b9a8 class="post-info el-row is-justify-space-between el-row--flex">
            <div data-v-2372b9a8 class="post-info-left el-row is-align-middle el-row--flex">
              <span data-v-2372b9a8>
                <i data-v-2372b9a8 class="el-icon-location-outline"></i>
                北京市
              </span>
              <div data-v-2372b9a8 class="post-user el-row is-align-middle el-row--flex">
                by
                <a data-v-2372b9a8 href="/user/personal" class>
                  <img data-v-2372b9a8 src="http://157.122.54.189:9095/assets/images/avatar.jpg" />
                </a>
                <a data-v-2372b9a8 href="/user/personal" class>地球发动机</a>
              </div>
              <span data-v-2372b9a8>
                <i data-v-2372b9a8 class="el-icon-view"></i> 3175
              </span>
            </div>
            <span data-v-2372b9a8 class="post-info-right">31 赞</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
// 内容，输入框
.search {
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  border: 3px solid orange;

  input {
    flex: 1;
    padding: 0 20px;
    line-height: 40px;
    outline: none;
    border: none;
    background: none;
  }

  i {
    font-size: 24px;
    color: orange;
    font-weight: 700;
    margin-right: 10px;
  }
}
// 推荐部分
.recommend {
  padding: 10px 0;
  font-size: 12px;
  color: #666;

  span {
    margin-right: 5px;
  }
}
// 写游记
.fbian {
  border-bottom: 1px solid #eee;

  .headeList {
    position: relative;
    height: 40px;
    line-height: 40px;

    h4 {
      width: 72px;
      font-weight: 400;
      font-size: 18px;
      color: orange;
      border-bottom: 2px solid orange;
    }

    .btn {
      position: absolute;
      top: 0px;
      right: 0px;
    }
  }
}
// 攻略列表
.post-item {
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  h4 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 15px;
    font-weight: 400;
    font-size: 18px;
  }

  p {
    margin-bottom: 15px;
    line-height: 1.5;
    font-size: 14px;
    height: 63px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
  }

  .card-images img {
    width: 220px;
    height: 150px;
    display: block;
    object-fit: cover;
  }
}

// 脚标
.el-row--flex.is-justify-space-between {
  justify-content: space-between;
}
.post-info-left[data-v-2372b9a8] {
  font-size: 12px;
  color: #999;
}
.post-info-right[data-v-2372b9a8] {
  color: orange;
}
.post-user img[data-v-2372b9a8] {
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 100px;
  margin: 5px;
}
.post-info-left > *[data-v-2372b9a8] {
  margin-right: 10px;
}
</style>

