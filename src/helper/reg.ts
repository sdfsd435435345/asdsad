/**
 * 正则校验
 */

/** 验证由数字和 26 个英文字母组成的字符串 */
const strReg = /^[A-Za-z0-9]+$/
const indexReg = /^[A-Za-z]+$/
const numReg = /^[0-9]+$/
const nameReg = /^[\u4E00-\u9FA5A-Za-z0-9 ]+$/ // 只能输入数字、字母、汉字、空格
export const regText = /[^\u4e00-\u9fa5\w]/g
export const regNum = /[\W]/g
/** 每 4 个字符加一个空格* */
const bankReg = /(\d{4})(?=\d)/g

// valid email format pattern
const emailRegex = /^([A-Za-z0-9_\-.\u4e00-\u9fa5])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,8})$/

export const onCheckStr = (str: string) => strReg.test(str)

/**
 * 验证币种列表索引
 * @param indexBar
 * @returns
 */
export const checkIndexBar = (indexBar: any) => indexReg.test(indexBar)

/**
 * 校验数字
 */
export const onCheckNum = (num: string) => numReg.test(num)

// to check for valid email
export const checkValidEmailInput = (input: string) => emailRegex.test(input)

/**
 * 校验逐仓名称
 */
export const onCheckPositionName = (name: string) => nameReg.test(name)

/**
 * 银行卡号每四个数字一个空格
 */
export const formatBankCard = (value: string) => {
  return value?.replace(bankReg, '$1 ') || ''
}
