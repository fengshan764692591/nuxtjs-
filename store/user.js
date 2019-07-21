
// state 存数据
  export const state = ()=>{
      return {
        userInfo: {
            token: '',
            user: {
                // nickname:''
            }
        }
      }
  } 

// mutations 同步修改数据
export const mutations ={
    // 设置用户数据
    setUserInfo(state,data){
        state.userInfo = data;
    },

    // 清除用户数据
    clearUserInfo(state){
        state.userInfo = {
            token: '',
            user:{}
        }
    }
}

// actions 异步修改数据
export const actions = {
// 登录的请求
// 第一个参数是store对象
login({commit},data){
    // console.log(store)
    	this.$axios({
					url: '/accounts/login',
					method:'POST',
					data,
				}).then(res =>{
          // console.log(res.data)
          // 把数据保存到vuex
     commit("setUserInfo",res.data)
        })
}
}