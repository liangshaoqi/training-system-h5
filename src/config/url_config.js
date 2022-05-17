let isProd = process.env.NODE_ENV === 'production' ? true : false
const baseUrl = {
  prod: 'http://peixun.quanyuyxj.com:8081',
  dev: 'http://47.108.172.61:8081'
}
let url = ''
isProd ? url = baseUrl.prod : url = baseUrl.dev
export default url