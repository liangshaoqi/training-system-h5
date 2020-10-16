import { POST } from 'src/http'
export function getExamResult(data) {
  return POST('/training/exarmResult', data)
}

export function saveExamInfo (data) {
  return POST('/training/saveExarm', data)
}
