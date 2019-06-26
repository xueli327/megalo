// 手机号验证
export function isvalidPhone(val) {
    const REG = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
    return REG.test(val.phone)
  }