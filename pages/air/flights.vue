<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
<<<<<<< HEAD
        <FlightsFilters :data="cacheFlightsData" @changeFlihts="changeFlihts" />

        <!-- 航班头部布局 -->
        <FlightsListHead />

        <!-- 航班信息 -->
        <flightsItem v-for="(item, index) in dataList" :key="index" :data="item" />
=======
        <!-- 过滤条件 -->
        <!-- data 是不会被修改的列表数据 -->
        <!-- setDataList 用于修改过滤后的数组列表 -->
        <FlightsFilters :data="cacheFlightsData" @setDataList="setDataList" />

        <!-- 航班头部布局 -->
        <FlightsListHead></FlightsListHead>

        <!-- 航班信息 -->
        <FlightsItem v-for="(item,index) in dataList" :key="index" :data="item"></FlightsItem>
        <!-- 分页栏 -->
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
        <el-row type="flex" justify="center" style="margin-top:10px;">
          <!-- size-change：切换条数时候触发 -->
          <!-- current-change：选择页数时候触发 -->
          <!-- current-page: 当前页数 -->
          <!-- page-size：当前条数 -->
          <!-- total：总条数 -->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageIndex"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
<<<<<<< HEAD
            :total="total"
=======
            :total="cacheFlightsData.total"
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
          ></el-pagination>
        </el-row>
      </div>

      <!-- 侧边栏 -->
      <div class="aside">
<<<<<<< HEAD
        <!-- 侧边栏组件 -->
        <FlightsAside />
=======
         <FlightsAside/>
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
      </div>
    </el-row>
  </section>
</template>

<script>
import FlightsListHead from "@/components/air/flightsListHead.vue";
import FlightsItem from "@/components/air/flightsItem.vue";
import FlightsFilters from "@/components/air/flightsFilters.vue";
import FlightsAside from "@/components/air/flightsAside.vue";
export default {
  components: {
    FlightsListHead,
    FlightsItem,
    FlightsFilters,
    FlightsAside
  },
  data() {
    return {
<<<<<<< HEAD
      flightsData: {
        flights: [], //默认值
        info: {},
        options: {}
      }, // 航班总数据
      // 缓存的一份数据，一旦赋值后就不会被修改
      cacheFlightsData: {
        flights: [], //默认值
        info: {},
        options: {}
      },
      // dataList: [], // 只负责页面渲染的数组
      pageIndex: 1, //当前页
      pageSize: 5, //当前页的条数
      total: 0 //总的页数
    };
  },
  methods: {
    // 当前条数
    handleSizeChange(value) {
      this.pageSize = value;
      //  this.setDataList()
    },
    // 当前页数
    handleCurrentChange(value) {
      // 赋值
      this.pageIndex = value;
      // 切换下一页
      // this.setDataList()
    },
    //   setDataList(){
    //      this.dataList = this.flightsData.flights.slice(
    //   (this.pageIndex-1) * this.pageSize,
    //   this.pageIndex * this.pageSize
    // )
    //   },
    // 传替给子组件用于修改数据列表的事件
    changeFlihts(arr) {
      this.flightsData.flights = arr;
    },
    // 监听机票的列表
    getData() {
      // 获取机票列表
      this.$axios({
        url: "/airs",
        params: this.$route.query
      }).then(res => {
        // console.log(res)
        // 总数据 （flights,info,options,total）
        this.flightsData = res.data;
        // 下面的展开后会得到一个新的对象，不会被修改
        this.cacheFlightsData = { ...res.data };
        // 数据的总条数
        this.total = res.data.total;
        // 第一的数据
        // this.dataList = this.flightsData.flights.slice(0,this.pageSize)
        // this.setDataList()
      });
    }
  },

  mounted() {
    // 获取机票列表
    this.getData();
  },
  computed: {
    dataList() {
      return this.flightsData.flights.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageIndex * this.pageSize
      );
    }
  },
  watch: {
    // 监听路由的变化
    $route() {
      // console.log(this.$route.query)
      // 获取机票列表
      this.getData();
    }
  },
// 导航守卫，当url变化的时候触发
  // beforeRouteUpdate(to,from,next){
  //   console.log(to)
  //    next()
  //   this.getData();
   
  // }
=======
      cacheFlightsData: {   //缓存数据只会修改一次
        flights: [],
        info: {},
        options: {}
      }, //航班总数据
      dataList: [], //航班列表数据，用于循环filghtsItem组件，单独出来主要是应为分页
      pageIndex: 1, //显示当前页
      pageSize: 5, // 显示条数
    setDataList: []
    };
  },
  methods: {
    //   获取航班总数据
    getData() {
      this.$axios({
        url: "/airs",
        params: this.$route.query //来自url的5个参数
      }).then(res => {
        //  console.log(res)
        this.flightsData = res.data;
        // this.dataList = this.flightsData.flights;
        // 缓存一份数据，这个列表不会被修改，而flightsData会被修改
        this.cacheFlightsData = {...res.data}
        this.setDatalist();
      });
    },
    // 设置dataLisr数据
    setDatalist(arr) {
      // 如果有新数据从第一页开始显示
      if(arr){
        this.pageIndex = 1
        this.flightsData.flights = arr
        this.flightsData.total = arr.lenth
      }
      const start = (this.pageIndex - 1) * this.pageSize;
      const end = start + this.pageSize;
      this.dataList = this.flightsData.flights.slice(start, end);
    },
    // 切换条数的时候触发
    handleSizeChange(value) {
      this.pageSize = value;
      this.pageIndex = 1;
      this.setDatalist();
    },
    // 切换页数时触发
    handleCurrentChange(value) {
      this.pageIndex = value;
      this.setDatalist();
    }
  },
  mounted() {
    this.getData();
  }
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
};
</script>

<style scoped lang="less">
.contianer {
  width: 1000px;
  margin: 20px auto;
}

.flights-content {
  width: 745px;
  font-size: 14px;
}

.aside {
  width: 240px;
}
</style>