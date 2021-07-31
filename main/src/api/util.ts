const REG_PHONE = /^\d{11}$/; // 手机号
const REG_VCODE = /^\d{6}$/; // 验证码
const REG_CARDNUMBER = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; // 身份证号
const REG_CHINESE_NAME = /^[\u4E00-\u9FA5]{2,4}$/; // 中文姓名
const REG_PASSWORD = /^[0-9A-Za-z]{6,20}$/;

// 正则手机号码
export function testPhone(v: string) {
  return REG_PHONE.test(v);
}

// 正则短信验证码
export function testVcode(v: string) {
  return REG_VCODE.test(v);
}

// 正则身份证号码
export function testCardNumber(v: string) {
  return REG_CARDNUMBER.test(v);
}

// 正则登录密码
export function testPassword(v: string) {
  return REG_PASSWORD.test(v);
}

// 正则是否为空
export function testEmpty(v: null) {
  return String(v).trim() === "" || v === null;
}

// 正则姓名
export function testChineseName(v: string) {
  return REG_CHINESE_NAME.test(v);
}

