export function isMobile(str) {
	let num = typeof str === 'string' ? Number(str) : str;
	let filter = /^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$/i;
	return filter.test(num);
}
export function isEmail(str) {
  let filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})$/
  return filter.test(str)
}
export function isIDCard(str) {
  let filter = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/;
  return filter.test(str)
}
export const PwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;

export function session_set(name, data) {
  sessionStorage.setItem(name, JSON.stringify(data));
}
export function session_get(name) {
  return JSON.parse(sessionStorage.getItem(name));
}
export function timestampToTime(timeStamp, middleStr = '-', type = 'YMD') {
  let date = new Date(timeStamp);
  let Y = date.getFullYear() + middleStr;
  let M =
    (date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1) + middleStr;
  let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() + '';
  let h =
    (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  let m =
    (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) +
    ':';
  let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  if (type === 'YMD') {
    return Y + M + D;
  }
  return Y + M + D + ' ' + h + m + s;
}