let isProd = process.env.NODE_ENV === 'production' ? true : false
const baseUrl = {
  prod: 'http://47.108.226.154:8080',
  dev: 'http://47.108.226.154:8080'
}
let url = ''
isProd ? url = baseUrl.prod : url = baseUrl.dev
export default url