import { POST } from 'src/http'
export function login(data) {
  return POST('/training/login', data)
}
export function logOut(data) {
  return POST('/training/loginOut', data)
}
