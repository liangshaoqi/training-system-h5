import { POST } from 'src/http'
export function login(data) {
  return POST('/oauth/token', data)
}