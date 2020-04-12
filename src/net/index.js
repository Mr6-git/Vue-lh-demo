import axios from 'axios'

const service = axios.create({
  //配置axios
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 1000 // request timeout
})


export default service