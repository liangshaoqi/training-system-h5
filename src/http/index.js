import axios from 'axios';
import qs from 'qs';
import baseUrl from 'src/config/url_config';
import { Toast } from 'mint-ui';
import { session_get } from 'src/utils/index'
// axios.defaults.baseURL = baseUrl;
const service = axios.create({
  timeout: 60000, // 请求超时时间
});
// request拦截器
service.interceptors.request.use(
  (config) => {
    // 头部
    config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    config.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
    config.headers.delete['Content-Type'] = 'application/x-www-form-urlencoded';
    config.headers.token = encodeURIComponent(localStorage.getItem('token'))
    // 判断请求方式
    // if(config.file){
    //   config.headers['Content-Type'] = 'multipart/form-data'
    //   config.params = qs.stringify(config.params)
    // }
    const accountType = session_get('accountType')
    if (accountType) {
      config.headers['accountType'] = accountType
    }
    if (config.pay) { // 支付接口formdata
      config.data = qs.stringify(config.data);
    }
    const method = config.method;
    if (method == 'post' || method == 'patch' || method == 'put') {
      // config.data = qs.stringify(config.data);
    }
    // console.log(config)
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);
// response拦截器
service.interceptors.response.use(
  // 成功回调
  (response) => {
    // 以下判断根据每个项目不同状态码做出不同处理
    if (response.data.code && response.data.code != '200') {
      if (response.data.code === 'E11007') {
        window.location.replace('#/login');
      } else {
        Toast({
          message: response.data.msg
        });
      }
    }
    return response.data
  },
  (err) => {
    // 错误消息提示
    if (err) {
      let statusCode = err.response.status;
      console.log(statusCode);
      let errMsg = '';
      switch (statusCode) {
        case 400:
          errMsg = '错误请求';
          break;
        case 401:
          errMsg = '无权限';
          break;
        case 403:
          errMsg = '禁止访问';
          break;
        case 404:
          errMsg = 'Not Found';
          break;
        case 415:
          errMsg = '请求错误';
          break;
        case 500:
          errMsg = 'Internal Server Error';
          break;
        default:
          errMsg = '服务器错误';
          break;
      }
      Toast({
        message: errMsg
      });
    } else {
      Toast({
        message: '服务器错误'
      });
    }
   
    return Promise.reject(err);
  }
);
export function POST(url, data = {}) {
  return service({
    baseURL: baseUrl,
    url,
    data: data,
    method: 'post',
  });
}
// get
export function GET(url, data = {}) {
  return service({
    baseURL: baseUrl,
    url,
    params: data,
    method: 'get',
  });
}
// file
export function FILE(url, data = {}) {
  return service({
    // baseURL: baseUrl,
    url,
    data: data,
    method: 'post',
    file: true,
  });
}
