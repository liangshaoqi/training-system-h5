import { GET } from 'src/http'
export function getText(data) {
  return GET('/exhibitionOrder/getExtraInfo', data)
}