import { POST } from 'src/http'
export function getExamResult(data) {
  return POST('/training/exarmResult', data)
}
