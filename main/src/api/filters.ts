/**
 * 金额格式化
 * @param {Number, String} money
 * @param {Number} fixednum
 */
export function fixedMoney(money, fixednum = 2) {
  if (!money || typeof Number(money) !== "number") {
    return "￥0.00";
  }
  return "￥" + Number(money).toFixed(fixednum);
}
