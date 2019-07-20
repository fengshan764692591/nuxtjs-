// nuxt已经把store关联到应用
// state 存数据
 export const state = ()=>{
	 return  {
		//  存储数据
		userInfo: {
			token: '',
			user:{
				// username:"aa123"
			}
		}
		// userInfo: JSON.parse(localStorage.getItem("userInfo") || `{}`)
 }
 }

// mutations 同步设置修改state的数据
export const mutations ={
	// 设置用户数据
    setUserInfo(state,data){
			state.userInfo = data;
		},
		// 清除用户数据
		clearUserInfo(state){
			state.userInfo = {
				token: "",
				user: {}
			}
		}
}

// actions 异步设置修改属性
export const actions = {
	// 负责登录的请求
	// 第一个参数是store对象, commit从对象中解构出来,传数据data
	login({commit},data){
	//  console.log(store)
		this.$axios({
						url:'/accounts/login',
						method: 'POST',
            data
					}).then(res =>{
						console.log(res)
          // 把数据保存到vuex
          // user模块名
         commit("setUserInfo",res.data);
          })
	},
	// 手机验证码
	sendCode(store,phoneNumber){
	return	this.$axios({
			url: "/captchas",
			method: "POST",
			data: {
				tel: phoneNumber
			}
		}).then(res => {
			// console.log(res)
			const { code } = res.data;
			return code
		
		});
	}
}