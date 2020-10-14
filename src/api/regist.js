import { POST } from 'src/http'
export function getGuiderInfo(data) {
  return POST('/training/guiderInfo', data)
}

export function register(data) {
  return POST('/training/register', data)
}
