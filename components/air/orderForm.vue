<template>
  <div class="main">
    <div class="air-column">
      <h2>剩机人</h2>
      <el-form class="member-info">
<<<<<<< HEAD
        <div class="member-info-item">
          <el-form-item label="乘机人类型">
            <el-input placeholder="姓名" class="input-with-select">
=======
        <!-- 需要循环的乘机人列表结构 -->
        <div class="member-info-item" v-for="(item,index) in users" :key="index">
          <el-form-item label="乘机人类型">
            <el-input placeholder="姓名" class="input-with-select" v-model="users[index].username">
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
              <el-select slot="prepend" value="1" placeholder="请选择">
                <el-option label="成人" value="1"></el-option>
              </el-select>
            </el-input>
          </el-form-item>

          <el-form-item label="证件类型">
<<<<<<< HEAD
            <el-input placeholder="证件号码" class="input-with-select">
=======
            <el-input placeholder="证件号码" class="input-with-select" v-model="users[index].id">
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
              <el-select slot="prepend" value="1" placeholder="请选择">
                <el-option label="身份证" value="1" :checked="true"></el-option>
              </el-select>
            </el-input>
          </el-form-item>

<<<<<<< HEAD
          <span class="delete-user" @click="handleDeleteUser()">-</span>
=======
          <span class="delete-user" @click="handleDeleteUser(index)">-</span>
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
        </div>
      </el-form>

      <el-button class="add-member" type="primary" @click="handleAddUsers">添加乘机人</el-button>
    </div>

    <div class="air-column">
      <h2>保险</h2>
      <div>
<<<<<<< HEAD
        <div class="insurance-item">
          <el-checkbox label="航空意外险：￥30/份×1  最高赔付260万" border></el-checkbox>
=======
        <div class="insurance-item" v-for="(item,index) in infoData.insurances" :key="index">
          <el-checkbox
            :label="`${item.type}: ￥${item.price}/份 最高赔付${item.compensation}`"
            border
            @change="changelnsurances(item)"
          ></el-checkbox>
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
        </div>
      </div>
    </div>

    <div class="air-column">
      <h2>联系人</h2>
      <div class="contact">
        <el-form label-width="60px">
          <el-form-item label="姓名">
<<<<<<< HEAD
            <el-input></el-input>
          </el-form-item>

          <el-form-item label="手机">
            <el-input placeholder="请输入内容">
=======
            <el-input v-model="contactName"></el-input>
          </el-form-item>

          <el-form-item label="手机">
            <el-input placeholder="请输入内容" v-model="contactPhone">
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
              <template slot="append">
                <el-button @click="handleSendCaptcha">发送验证码</el-button>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item label="验证码">
<<<<<<< HEAD
            <el-input></el-input>
=======
            <el-input v-model="captcha"></el-input>
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
          </el-form-item>
        </el-form>
        <el-button type="warning" class="submit" @click="handleSubmit">提交订单</el-button>
      </div>
    </div>
<<<<<<< HEAD
=======
    <input type="hidden" :value="allPrice">
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  methods: {
    // 添加乘机人
    handleAddUsers() {},

    // 移除乘机人
    handleDeleteUse() {},

    // 发送手机验证码
    handleSendCaptcha() {},

    // 提交订单
    handleSubmit() {}
=======
  data() {
    return {
      users: [
        //用户数据的集合
        {
          username: "",
          id: ""
        }
      ],
      insurances: [], //保险id的集合
      contactName: "", //联系人
      contactPhone: "", // 联系人的手机号码
      invoice: false, //是否需要发票
      seat_xid: "", //座位id
      air: "", //航班id
      infoData: {},
      captcha: "" //验证码
    };
  },
  mounted() {
    //  获取座位ID，航班id
    const { id, seat_xid } = this.$route.query;
    this.$axios({
      url: "/airs/" + id,
      params: {
        seat_xid
      }
    }).then(res => {
      // console.log(res)
      this.infoData = res.data;
      // 把值存到store
      this.$store.commit("air/setInfoData",this.infoData)
      // 子传父
      // this.$emit("setInfoData",this.infoData)
    });
  },
  computed:{
    // 计算总价格
    allPrice(){
     let price = 123
    //  如果接口没有请求回来，就return 0
    if(!this.infoData.airport_tax_audlet) return 0;
    // //  机票单价
    price += this.infoData.seat_infos.org_settle_price;

    // 基建燃油费
    price += this.infoData.airport_tax_audlet

    // 保险
    price += this.insurances.length * 30
    // 人数
    price += this.users.length

    //  console.log(123456)
     this.$store.commit("air/setAllPrice",price)
    }
  },
  methods: {
    // 添加乘机人
    handleAddUsers() {
      this.users.push({
        username: "",
        id: ""
      });
    },
    // 选择保险的时候触发
    changelnsurances(item) {
      //  修改data中的insurances的值
      // 判断数组中是否以存有id
      const index = this.insurances.indexOf(item.id);
      if (index > -1) {
        this.insurances.splice(index, 1);
      } else {
        this.insurances.push(item.id);
      }

      console.log(this.insurances);
    },

    // 移除乘机人
    handleDeleteUse(index) {
      this.users.splice(index, 1);
    },

    // 发送手机验证码
    handleSendCaptcha() {
      this.$store.dispatch("user/sendCode", this.contactPhone).then(code => {
        this.$message({
          message: `验证成功,验证码是:${code}`,
          type: "success"
        });
      });
    },

    // 提交订单
    handleSubmit() {
      //  判断状态的对象
      const rules = {
        users: {
          value: this.users[0].username && this.users[0].id,
          message: "乘机人不能为空"
        },
        contactName: {
          value: this.contactName,
          message: "请输入联系人"
        },
        contactPhone: {
          value: this.contactPhone,
          message: "请输入手机号码"
        },
        captcha: {
          value: this.captcha,
          message: "请输入验证码"
        }
      };
      // 循环判断验证是否通过
      let valid = true;
      Object.keys(rules).forEach(v => {
        if (!valid) return;
        // 如果为fales就返回错误信息
        if (!rules[v].value) {
          valid = false;
          this.$message.warning(rules[v].message);
        }
      });
      if (!valid) return;
      //  拼接数据
      const data = {
        users: this.users,
        insurance: this.insurances,
        contactName: this.contactName,
        contactPhone: this.contactPhone,
        invoice: false,
        captcha: this.captcha,
        seat_xid: this.$route.query.seat_xid,
        air: this.$route.query.id
      };
      // console.log(data);
      // 提交订单
      this.$axios({
        url: "/airorders",
        methods: "POST",
        data,
        headers: {
          Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
        }
      }).then(res => {
        //  console.log(res.data)
        const { message } = res.data;
        this.$message.success(message);
      });
    }
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
  }
};
</script>

<style scoped lang="less">
.air-column {
  border-bottom: 1px #ddd dashed;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.air-column h2 {
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: normal;
}

/deep/ .el-select .el-input {
  width: 130px;
}

.input-with-select {
  width: 590px;
}

.input-with-select /deep/ .el-input-group__prepend {
  background-color: #fff;
}
.member-info /deep/ .el-form-item {
  margin-bottom: 0;
}

.member-info-item {
  border-bottom: 1px #eee dashed;
  padding-bottom: 20px;
  position: relative;

  &:first-child {
    .delete-user {
      display: none;
    }
  }
}

.add-member {
  margin-top: 20px;
}

.delete-user {
  display: block;
  background: #ddd;
  width: 16px;
  height: 16px;
  font-size: 14px;
  text-align: center;
  line-height: 16px;
  color: #fff;
  cursor: pointer;
  border-radius: 50px;
  position: absolute;
  right: -30px;
  top: 50%;
}

.insurance {
  > div {
    margin-top: 10px;
  }
}

.insurance-item {
  margin-bottom: 20px;
}

.contact {
  /deep/ .el-input {
    width: 50%;
  }
}

.submit {
  margin: 50px auto;
  display: block;
  width: 250px;
  height: 50px;
}
</style>