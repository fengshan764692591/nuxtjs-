// axios 错误拦截器
import {Message} from "element-ui"
// Message = this.$message
// 第一个参数是 nuxt
export default ({ $axios }) =>{
    // 拦截错误的请求
    // console.log(nuxt)
    $axios.onError(err =>{
        // console.log(err.response,123)
        // 结构
        const { message,statusCode } = err.response.data
        if(statusCode === 400){
            Message.error(message)
        }
      
    })
}