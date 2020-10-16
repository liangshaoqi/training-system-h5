const localStorage = window.localStorage;

const stringify = (data) => {
  return JSON.stringify(data) || '';
};
const parse = (data) => {
  return JSON.parse(data) || '';
};

export const setTokenLoc = (token) => {
  localStorage.setItem('token', token);
};

export const getTokenLoc = () => {
  return localStorage.getItem('token');
};

export const removeTokenLoc = () => {
  localStorage.removeItem('token');
};

export const setCardNo = (cardNo) => {
  localStorage.setItem('cardNo', cardNo);
};

export const getCardNo = () => {
  return localStorage.getItem('cardNo');
};

export const removeCardNo = () => {
  localStorage.removeItem('cardNo');
};

export const setUserInfo = (data) => {
  localStorage.setItem('userInfo', stringify(data));
};

export const getUserInfo = () => {
  return parse(localStorage.getItem('userInfo'));
};

export const removeUserInfo = () => {
  localStorage.removeItem('userInfo');
};

export const setLearnList = (data) => {
  localStorage.setItem('learnList', stringify(data));
};

export const getLearnList = () => {
  return parse(localStorage.getItem('learnList'));
};

export const setExamInfo = (data) => {
  localStorage.setItem('examInfo', stringify(data));
};

export const getExamInfo = () => {
  return parse(localStorage.getItem('examInfo'));
};
