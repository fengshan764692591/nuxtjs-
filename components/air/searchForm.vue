<template>
  <div class="search-form">
    <!-- 头部tab切换 -->
    <el-row type="flex" class="search-tab">
      <span
        v-for="(item, index) in tabs"
        :key="index"
        @click="handleSearchTab(item, index)"
        :class="{active: index === currentTab}"
      >
        <i :class="item.icon"></i>
        {{item.name}}
      </span>
    </el-row>

    <el-form class="search-form-content" ref="form" label-width="80px">
      <el-form-item label="出发城市">
        <!-- fetch-suggestions 返回输入建议的方法 -->
        <!-- select 点击选中建议项时触发 -->
        <el-autocomplete
          :fetch-suggestions="queryDepartSearch"
          placeholder="请搜索出发城市"
          @select="handleDepartSelect"
          class="el-autocomplete"
<<<<<<< HEAD
					v-model="form.departCity"
=======
          v-model="form.departCity"
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
        ></el-autocomplete>
      </el-form-item>
      <el-form-item label="到达城市">
        <el-autocomplete
          :fetch-suggestions="queryDestSearch"
          placeholder="请搜索到达城市"
          @select="handleDestSelect"
          class="el-autocomplete"
<<<<<<< HEAD
						v-model="form.destCity"
=======
          v-model="form.destCity"
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
        ></el-autocomplete>
      </el-form-item>
      <el-form-item label="出发时间">
        <!-- change 用户确认选择日期时触发 -->
<<<<<<< HEAD
        <el-date-picker type="date" placeholder="请选择日期" style="width: 100%;" @change="handleDate" 	v-model="form.departDate"></el-date-picker>
=======
        <el-date-picker
          type="date"
          placeholder="请选择日期"
          style="width: 100%;"
          @change="handleDate"
          v-model="form.departDate"
        ></el-date-picker>
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
      </el-form-item>
      <el-form-item label>
        <el-button style="width:100%;" type="primary" icon="el-icon-search" @click="handleSubmit">搜索</el-button>
      </el-form-item>
      <div class="reverse">
        <span @click="handleReverse">换</span>
      </div>
    </el-form>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      tabs: [
        { icon: "iconfont icondancheng", name: "单程" },
        { icon: "iconfont iconshuangxiang", name: "往返" }
      ],
      currentTab: 0,
      form: {
<<<<<<< HEAD
          departCity: '',
          departCode: '',
          destCity: '',
          destCode: '',
          departDate: ''
=======
        departCity: "", // 出发城市
        departCode: "", // 出发城市代码
        destCity: "", // 到达城市
        destCode: "", // 到达城市代码
        departDate: "" // 日期字符串
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
      }
    };
  },
  methods: {
<<<<<<< HEAD
    // 搜索城市封装
  //   queryCity(value, cb,aa,bb){
  //  this.$axios({
	// 		url: '/airs/city',
	// 		params: {
	// 			name: value
	// 		}
	// 	}).then(res =>{
	// 		// console.log(res.data)
	// 		// 推荐列表数组
	// 		const {data} = res.data
	// 	 const newData = data.map(v =>{
	// 		 v.value = v.name.replace('市','')
	// 		 return v
	// 	 })
	// 	 	//  默认选中第一个
	// 	this.form.aa = newData[0].value
	// 	this.form.bb = newData[0].value
  //       cb(newData)
  //       // this.form[aa]
	// 	})
  //   },

    // tab切换时触发
    handleSearchTab(item, index) {},

    // 出发城市输入框获得焦点时触发
    // value 是选中的值，cb是回调函数，接收要展示的列表
    queryDepartSearch(value, cb) {
		//  请求城市
		this.$axios({
			url: '/airs/city',
			params: {
				name: value
			}
		}).then(res =>{
			// console.log(res.data)
			// 推荐列表数组
			const {data} = res.data
		 const newData = data.map(v =>{
			 v.value = v.name.replace('市','')
			 return v
		 })
		 	//  默认选中第一个
		this.form.departCity = newData[0].value
		this.form.departCode = newData[0].value
        cb(newData)
        
    })

=======
    // tab切换时触发
    handleSearchTab(item, index) {
			if(index === 1){
				this.$confirm("暂时不支持往返，请使用单程票！",'提示',{
              confirmButtonText: '确定',
            showCancelButton: false,
            type: 'warning'
				})
			}
		},

    // 出发城市输入框获得焦点时触发
    // value 是选中的值，cb是回调函数，接收要展示的列表
    // 出发城市输入框获得焦点时触发
    // value 是选中的值，cb是回调函数，接收要展示的列表
    async queryDepartSearch(value, cb) {
      const arr = await this.querySearchAsync(value);
      if (arr.length > 0) {
        // 不在下拉列表中选择，则默认选择第一项
        this.form.departCity = arr[0].value;
        this.form.departCode = arr[0].sort;
      }
      cb(arr);
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
    },

    // 目标城市输入框获得焦点时触发
    // value 是选中的值，cb是回调函数，接收要展示的列表
<<<<<<< HEAD
    queryDestSearch(value, cb) {
		 this.$axios({
			url: '/airs/city',
			params: {
				name: value
			}
		}).then(res =>{
			// console.log(res.data)
			// 推荐列表数组
			const {data} = res.data
		 const newData = data.map(v =>{
			 v.value = v.name.replace('市','')
			 return v
		 })
		//  默认选中第一个
		this.form.destCity = newData[0].value
		this.form.destCode = newData[0].value
      	cb(newData)
    })
=======
    async queryDestSearch(value, cb) {
      const arr = await this.querySearchAsync(value);
      if (arr.length > 0) {
        // 不在下拉列表中选择，则默认选择第一项
        this.form.destCity = arr[0].value;
        this.form.destCode = arr[0].sort;
      }
      cb(arr);
    },

    // 查询城市接口的方法，返回promise
    // queryString是查询关键字
    querySearchAsync(queryString) {
      return new Promise((resolve, reject) => {
        // 如果关键字是空，则直接返回
        if (!queryString) {
          return resolve([]);
        }

        this.$axios({
          url: `/airs/city`,
          params: {
            name: queryString
          }
        }).then(res => {
          const { data } = res.data;

          // 下拉提示列表必须要有value字段
          const arr = data.map(v => {
            return {
              ...v,
              value: v.name.replace("市", "")
            };
          });
          resolve(arr);
        });
      });
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
    },

    // 出发城市下拉选择时触发
    handleDepartSelect(item) {
<<<<<<< HEAD
			// console.log(item)
			this.form.departCity = item.value
			this.form.departCode = item.sort
		},

    // 目标城市下拉选择时触发
    handleDestSelect(item) {
			this.form.destCity = item.value
			this.form.destCode = item.sort
		},

    // 确认选择日期时触发
    handleDate(value) {
			this.form.departDate = moment(value).format("YYYY-MM-DD")
		},

    // 触发和目标城市切换时触发
    handleReverse() {},

    // 提交表单是触发
    handleSubmit() {
      this.$router.push({
        path: '/air/flights',
        query: this.form
      })
      // 把当前的搜索到的条件存储到本地
      // 如果有，就直接拿出来
      const airs = JSON.parse(localStorage.getItem("airs")) || []
      airs.unshift(this.form)
      if(airs.length > 5){
        airs.length = 5
      }
      localStorage.setItem("airs",JSON.stringify(airs))
		}
=======
      this.form.departCity = item.value;
      this.form.departCode = item.sort;
    },

    // 目标城市下拉选择时触发
    handleDestSelect(item) {
      this.form.departCity = item.value;
      this.form.destCode = item.sort;
    },

    // 确认选择日期时触发
    handleDate(value) {
      this.form.departDate = moment(value).format("YYYY-MM-DD");
    },

    // 触发和目标城市切换时触发
    handleReverse() {
			const {departCity,departCode,destCode,destCity} = this.form
			this.form.departCity = destCity
			this.form.departCode = destCode

			this.form.destCity = departCity
			this.form.destCode = departCode
		},

    // 提交表单是触发
    handleSubmit() {
      // console.log(this.form)
      const rules = {
        depart: {
          value: this.form.departCity,
          message: "请选择出发城市"
        },
        dest: {
          value: this.form.destCity,
          message: "请选择到达城市"
        },
        departDate: {
          value: this.form.departDate,
          message: "请选择出发时间"
        }
      };

      let valid = true; // 表单验证结果

      Object.keys(rules).forEach(v => {
        // 只要有一个结果不通过，就停止循环
        if (!valid) return;
        const item = rules[v];

        // 数据字段为空
        if (!item.value) {
          valid = false;

          this.$confirm(item.message, "提示", {
            confirmButtonText: "确定",
            showCancelButton: false,
            type: "warning"
          });
        }
      });

      // 不通过验证，不需要往下执行
      if (!valid) return;

     
  //  把当前的搜索条件存到本地存储里面
    const airs = JSON.parse(localStorage.getItem("airs"))
    airs.unshift(this.form)
    if(airs.length > 5){
      airs.length = 5
    }
    localStorage.setItem("airs",JSON.stringify(airs))
    //  跳转
      this.$router.push({
        path: "/air/flights",
        query: this.form
      });
    }
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
  },
  mounted() {}
};
</script>

<style scoped lang="less">
.search-form {
  border: 1px #ddd solid;
  border-top: none;
  width: 360px;
  height: 350px;
  box-sizing: border-box;
}

.search-tab {
  span {
    display: block;
    flex: 1;
    text-align: center;
    height: 48px;
    line-height: 42px;
    box-sizing: border-box;
    border-top: 3px #eee solid;
    background: #eee;
  }

  .active {
    border-top-color: orange;
    background: #fff;
  }

  i {
    margin-right: 5px;
    font-size: 18px;

    &:first-child {
      font-size: 16px;
    }
  }
}

.search-form-content {
  padding: 15px 50px 15px 15px;
  position: relative;

  .el-autocomplete {
    width: 100%;
  }
}

.reverse {
  position: absolute;
  top: 35px;
  right: 15px;

  &:after,
  &:before {
    display: block;
    content: "";
    position: absolute;
    left: -35px;
    width: 25px;
    height: 1px;
    background: #ccc;
  }

  &:after {
    top: 0;
  }

  &:before {
    top: 60px;
  }

  span {
    display: block;
    position: absolute;
    top: 20px;
    right: 0;
    font-size: 12px;
    background: #999;
    color: #fff;
    width: 20px;
    height: 20px;
    line-height: 18px;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;

    &:after,
    &:before {
      display: block;
      content: "";
      position: absolute;
      left: 10px;
      width: 1px;
      height: 20px;
      background: #ccc;
    }

    &:after {
      top: -20px;
    }

    &:before {
      top: 20px;
    }
  }
}
</style>