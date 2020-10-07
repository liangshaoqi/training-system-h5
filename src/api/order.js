import { POST, GET, PAY } from 'src/http'
export function addOrder(data) {
  return POST('/exhibitionOrder/addOrder', data)
}

export function getPayData(data) {
  return GET('/exhibitionOrder/checkSubmitData', data)
}
export function pay(data) {
  return PAY(data)
}
// 查询订单
export function queyOrder(data) {
  return POST('/exhibitionOrder/orderList', data)
}
export function exhibitionOrder(data) {
  return POST('/exhibitionOrder/submitNotify', data)
}