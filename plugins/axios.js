<<<<<<< HEAD
import {Message} from "element-ui";

export default function({$axios, redirect}){
    $axios.onError(err => {
        const {statusCode, message} = err.response.data;
        
        // 还未使用
        // if(statusCode === 401 || statusCode === 403){
        //     Message.warning({message: "请先登录"});
        //     redirect("/user/login");
        // }

        if(statusCode === 400){
            Message.warning({message});
        }
=======
// axios 错误拦截器
import {Message} from "element-ui"
// Message = this.$message
// 第一个参数是 nuxt
export default ({ $axios,redirect }) =>{
    // 拦截错误的请求
    // console.log(nuxt)
    $axios.onError(err =>{
        // console.log(err.response,123)
        // 结构
        const { message,statusCode } = err.response.data
        if(statusCode === 400){
            Message.error(message)
        }
			// 未授权
			if(statusCode === 401 || statusCode === 403){
				// 跳转到登录页面
				redirect("/user/login")
			}
      
>>>>>>> 647924a91849ba3ed7bf829711ca4d419b88477a
    })
}