<template>
<<<<<<< HEAD
  <div class="flight-item" >
    <div @click="isShow = !isShow">
=======
  <div class="flight-item">
    <div @click=" isShow = !isShow">
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
      <!-- 显示的机票信息 -->
      <el-row type="flex" align="middle" class="flight-info">
        <el-col :span="6">
          <span>{{data.airline_name}}</span>
          {{data.flight_no}}
        </el-col>
        <el-col :span="12">
          <el-row type="flex" justify="space-between" class="flight-info-center">
            <el-col :span="8" class="flight-airport">
              <strong>{{data.dep_time}}</strong>
              <span>{{data.org_airport_name}}{{data.org_airport_quay}}</span>
            </el-col>
            <el-col :span="8" class="flight-time">
              <span>{{rankTime}}</span>
            </el-col>
            <el-col :span="8" class="flight-airport">
              <strong>{{data.arr_time}}</strong>
              <span>{{data.dst_airport_name}}{{data.dst_airport_quay}}</span>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="6" class="flight-info-right">
          ￥
          <span class="sell-price">{{data.seat_infos[0].org_settle_price_child}}</span>起
        </el-col>
      </el-row>
    </div>
<<<<<<< HEAD
    <div class="flight-recommend" v-show="isShow">
      <!-- 隐藏的座位信息列表 -->
      <el-row type="flex" justify="space-between" align="middle">
=======
    <div class="flight-recommend">
      <!-- 隐藏的座位信息列表 -->
      <el-row type="flex" justify="space-between" align="middle" v-show="isShow">
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
        <el-col :span="4">低价推荐</el-col>
        <el-col :span="20">
          <el-row
            type="flex"
            justify="space-between"
            align="middle"
            class="flight-sell"
            v-for="(item, index) in data.seat_infos"
            :key="index"
          >
            <el-col :span="16" class="flight-sell-left">
              <span>{{item.name}}</span>
              | {{item.supplierName}}
            </el-col>
            <el-col :span="5" class="price">￥{{item.org_settle_price}}</el-col>
            <el-col :span="3" class="choose-button">
<<<<<<< HEAD
              <el-button type="warning" size="mini" @click="handleToOrder(data.id,item.seat_xid)">选定</el-button>
=======
              <el-button type="warning" size="mini" @click="handleChoose(data.id,item.seat_xid)">选定</el-button>
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
              <p>剩余：{{item.discount}}</p>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
<<<<<<< HEAD
    // 数据
    data: {
      type: Object,
      // 默认是空数组
      default: {}
    }
	},
	data(){
		return {
			isShow :false
		}
	},
	computed: {
		// 计算事件差
		rankTime(){
			// 转化为分钟  +dep[1]转化为数字
			const dep = this.data.dep_time.split(':')
			const arr = this.data.arr_time.split(':')
			const depVal = dep[0]*60 + +dep[1]
			const arrVal = arr[0]*60 + +arr[1]
			// 到达时间
			let dis = arrVal - depVal
			// 如果是第二天凌晨段，要加上24
			if(dis < 0){
				dis = arrVal + 24 * 60 - depVal
			}
			// 得到事件差
			return `${Math.floor(dis / 60 )}时${(dis % 60 )}`
		}
	},
	methods:{
    // 跳转订单页
		handleToOrder(id,seat_xid){
			this.$router.push({
        path: "/air/order",
        query: {
          id,
          seat_xid
        }
      })
		}
	}
=======
    data: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      isShow: false
    };
  },
  computed: {
    // 计算事件差
    rankTime() {
      const arr = this.data.arr_time; //19:30
      const dep = this.data.dep_time; // 17:00
      // console.log(this.data.arr_time);
      let end = arr.split(":"); //["19","30"]
      let start = dep.split(":");
      if (end < start) {
        end[0] = +end[0] + 24;
      }
      // +end[1] 把字符穿转换为数字
      const dis = end[0] * 60 + +end[1] - (start[0] * 60 + +start[1]);
      const hours = Math.floor(dis / 60);
      const min = dis % 60;
      return `${hours}时${min}分钟`;
    }
  },
 methods: {
  handleChoose(id,seatId){
    this.$router.push({
      path: "/air/order",
      query: {
        id,
        seat_xid: seatId
      }
    })
  }
 }
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
};
</script>

<style scoped lang="less">
.flight-item {
  border: 1px #ddd solid;
  margin-bottom: 10px;

  .flight-info {
    padding: 15px;
    cursor: pointer;

    > div {
      &:first-child,
      &:last-child {
        text-align: center;
      }
    }
  }

  .flight-info-center {
    padding: 0 30px;
    text-align: center;

    .flight-airport {
      strong {
        display: block;
        font-size: 24px;
        font-weight: normal;
      }
      span {
        font-size: 12px;
        color: #999;
      }
    }

    .flight-time {
      span {
        display: inline-block;
        padding: 10px 0;
        border-bottom: 1px #eee solid;
        color: #999;
      }
    }
  }

  .flight-info-right {
    .sell-price {
      font-size: 24px;
      color: orange;
      margin: 0 2px;
    }
  }
}

.flight-recommend {
  background: #f6f6f6;
  border-top: 1px #eee solid;
  padding: 0 20px;

  .flight-sell {
    border-bottom: 1px #eee solid;
    padding: 10px 0;

    &:last-child {
      border-bottom: none;
    }

    .flight-sell-left {
      font-size: 12px;
      span {
        color: green;
      }
    }

    .price {
      font-size: 20px;
      color: orange;
    }

    .choose-button {
      text-align: center;
      color: #666;
      button {
        display: block;
        width: 100%;
        margin-bottom: 5px;
      }
    }
  }
}
</style>