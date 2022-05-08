import { POST } from 'src/http'
export function getExamList(data) {
  return POST('/training/guiderExamination', data)
}

// 保存学习成绩
export function saveExamScore(data) {
  return POST('/training/guiderExaminationScore', data)
}

// 查询得分列表
export function getExamScoreList(data) {
  return POST('/training/queryScore', data)
}
