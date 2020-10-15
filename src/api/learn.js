import { POST } from 'src/http'
export function getLearnList(data) {
  return POST('/training/exarmInfo', data)
}
