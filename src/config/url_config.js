let isProd = process.env.NODE_ENV === 'production' ? true : false
const baseUrl = {
  prod: 'http://112.126.97.136:8081',
  dev: 'http://112.126.97.136:8081'
}
let url = ''
isProd ? url = baseUrl.prod : url = baseUrl.dev
export default url