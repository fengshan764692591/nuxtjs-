<template>
  <div class="filters">
    <el-row type="flex" class="filters-top" justify="space-between" align="middle">
      <el-col :span="8">
        单程：
        {{data.info.departCity}} - {{data.info.destCity}}
        /
        {{data.info.departDate}}
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="airport" placeholder="起飞机场" @change="handleAirport">
          <el-option
            :label="item"
            :value="item"
<<<<<<< HEAD
            v-for="(item,index) in data.options.airport"
=======
            v-for="(item,index) in data.info.airport"
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
            :key="index"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="flightTimes" placeholder="起飞时间" @change="handleFlightTimes">
          <el-option
<<<<<<< HEAD
            :label="`${item.from}:00 - ${item.to}:00`"
            :value="`${item.from},${item.to}`"
            v-for="(item,index) in data.options.flightTimes"
=======
            label="`${item.from}:00 - ${item.to}:00`"
            value="item"
            v-for="(item,index) in data.flightTimes"
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
            :key="index"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="company" placeholder="航空公司" @change="handleCompany">
          <el-option
            :label="item"
            :value="item"
            v-for="(item,index) in data.options.company"
            :key="index"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="airSize" placeholder="机型" @change="handleAirSize">
          <el-option
            :label="item.name"
            :value="item.size"
            v-for="(item,index) in sizeOptions"
            :key="index"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>
    <div class="filter-cancel">
      筛选：
      <el-button type="primary" round plain size="mini" @click="handleFiltersCancel">撤销</el-button>
    </div>
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  props: {
    // 接收filghtsData
    data: {
      type: Object,
      default: {}
    }
  },
=======
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
  data() {
    return {
      airport: "", // 机场
      flightTimes: "", // 出发时间
      company: "", // 航空公司
      airSize: "", // 机型大小
      sizeOptions: [
        { name: "大", size: "L" },
        { name: "中", size: "M" },
        { name: "小", size: "S" }
<<<<<<< HEAD
      ]
    };
  },
  methods: {
    // 选择机场时候触发
    handleAirport(value) {
      const arr = this.data.flights.filter(v => {
        return v.org_airport_name === value;
      });
      // 得到一个过滤后的数组，传递给父组件
      this.$emit("changeFlihts", arr);
=======
      ],
        setDataList: []
    };
  },
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  methods: {
    // 选择机场时候触发
    handleAirport(value) {
      const arr = this.data.flights.filter(v =>{
        v.org_airport_name === value
      })
      this.$emit("setDataList",arr)
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
    },

    // 选择出发时间时候触发
    handleFlightTimes(value) {
<<<<<<< HEAD
      // console.log(value)
      // 先拿到 “12”，“6”
      const [from, to] = value.split(",");
      // 定义一个时间进行比较，6-12 from,to
      // from < = start <　to
      const arr = this.data.flights.filter(v => {
        const [start] = v.dep_time.split(":"); //解构出来 12
        // 判断时候需要转换为数字
        return +from <= +start && +start < +to;
      });
      // 得到一个过滤后的数组，传递给父组件
      this.$emit("changeFlihts", arr);
=======
      // console.log(this.data.flights)
      const arr = this.data.flights.filter(v =>{
        return value.from <= +v.dep_time.split(":")[0] && value.to >= +v.dep_time.split(":")[0]
      })
      this.$emit("setDataList",arr)
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
    },

    // 选择航空公司时候触发
    handleCompany(value) {
<<<<<<< HEAD
      // console.log(value)
      // 遍历数组，拿到我们选择的航空公司
      const arr = this.data.flights.filter(v => {
        return v.airline_name === value;
      });
      // 得到一个过滤后的数组，传递给父组件
      this.$emit("changeFlihts", arr);
=======
      // console.log(value);
      // 过滤后得到一个数组，传递回去给父组件
      // this.$emit("changeFlights", arr);
      const arr = this.data.flights.filter(v =>{
        v.airline_name = value
      })
      this.$emit("setDataList",arr)
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
    },

    // 选择机型时候触发
    handleAirSize(value) {
<<<<<<< HEAD
      const arr = this.data.flights.filter(v => {
        return v.plane_size === value;
			});
			   // 得到一个过滤后的数组，传递给父组件
      this.$emit("changeFlihts", arr);
=======
      const arr = this.data.flights.filter(v =>{
        v.plane_size === value
      })
      this.$emit("setDataList",arr)
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
    },

    // 撤销条件时候触发
    handleFiltersCancel() {
<<<<<<< HEAD
			this.airport = "",
			this.flightTimes = "",
			this.company = "",
			this.airSize = ""
		 this.$emit("changeFlihts", this.data.flights);
		}
=======
      this.airport = "",
      this.flightTimes = "",
      this.company = "",
      this.airSize = "",
      this.$emit("setDataList",this.data.flights)
    }
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
  }
};
</script>

<style scoped lang="less">
.filters {
  margin-bottom: 20px;
}

.filters-top {
  > div {
    /deep/ .el-select {
      margin-left: 10px;
    }
  }
}

.filter-cancel {
  margin-top: 10px;
}
</style>