import { POST } from 'src/http'
export function getExamList(data) {
  return POST('/training/guiderExamination', data)
}
