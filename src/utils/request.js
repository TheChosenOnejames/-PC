/*
 * @Date: 2022-06-08 08:55:57
 * @LastEditors: shen-xu
 * @LastEditTime: 2022-06-16 12:07:54
 * @Description: 
 */
// 这个模块, 对于axios进行二次封装, 可以方便的进行自定义axios
import axios from 'axios'

// 创建自定义的axios实例, 方便自定义配置 (为了得到一个你的axios)
const http = axios.create({
  baseURL: 'http://10.66.128.94:8000', // 基础地址
  timeout: 1000, // 配置请求等待延时
  // headers: { 'X-Custom-Header': 'foobar' } // 配置请求头
})

// 将来这里还可以写很多的自定义的配置
export default http
