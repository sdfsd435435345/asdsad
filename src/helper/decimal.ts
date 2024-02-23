import Decimal from 'decimal.js'
/** 项目里先写工具类，成熟后抽离到 toolbox 仓库
 * @doc https://toolbox.coin-online.cc/docs/utils/src/decimal/
 */
import { decimalUtils } from '@/nbit'

const SafeCalcUtil = decimalUtils.SafeCalcUtil

export type IIsRound = boolean | Decimal.Rounding
/**
 * 数字格式化 - 按照指定小数点位输出
 * @param data    要截取的数据
 * @param digits 指定小数点位数
 * @param isRound 是否向上约 | 传入具体 Decimal.Rounding 策略
 * @param delPostZero 是否去除末尾 0
 * @returns
 */
const formatNumberDecimal = (data: any, digits = 2, isRound?: IIsRound, delPostZero?: boolean) => {
  return decimalUtils.formatNumberDecimal(data, digits, isRound, delPostZero)
}
/**
 * 去掉小数点后面多余的 0
 * @param val
 */
export const removeDecimalZero = val => {
  return decimalUtils.removeDecimalZero(val)
}
/**
 * 格式化数字，当超过指定位数时，按照指定小数点位输出，去除末尾 0，工具升级后和本来命名含义不一致（0.0 会返回 0）
 */
export function formatNumberDecimalWhenExceed(value: Decimal.Value, digits: number, isRound?: IIsRound) {
  return decimalUtils.formatNumberDecimal(value, digits, isRound, true /**  去掉多余的 0 */)
}

/**
 * 资产金额格式化，三位加逗号
 * @param data         要格式化的数据
 * @param digits      保留几位小数
 * @param keepDigits 是否始终保持对应位数的小数，不足补 0
 * @param isRound 是否向上约 | 传入具体 Decimal.Rounding 策略
 * @returns
 */
const formatCurrency = (data: any, digits?: number, keepDigits = true, isRound?: boolean | Decimal.Rounding) => {
  return decimalUtils.formatCurrency(data, digits, keepDigits, isRound)
}
type IGetPriceInputParams = {
  value: string
  inputValue: string
  max?: Decimal.Value
  min?: Decimal.Value
  digit: number
  isRound?: IIsRound
  currentValue?: number
}
export function getPriceInput({ value, inputValue, max, min, digit, isRound, currentValue }: IGetPriceInputParams) {
  let newVal = inputValue?.toString().trim() || ''
  if (newVal.startsWith('.')) {
    return value
  }
  if (newVal.toString().split('.').length > 2) {
    return value
  }
  if (newVal === value && inputValue === value) {
    return value
  }
  if (/\.$/.test(newVal)) {
    return newVal
  }
  if (newVal.includes('.')) {
    const [, dec] = newVal.split('.')
    if (dec.length > digit) {
      newVal = formatNumberDecimal(newVal, digit, isRound)
    }
  }
  if (/^0\d+/.test(newVal)) {
    newVal = newVal.replace(/^0/, '')
  }
  if (typeof max === 'number' && SafeCalcUtil.sub(newVal, max).gt(0)) {
    newVal = max.toString()
  }
  if (typeof min === 'number' && SafeCalcUtil.sub(newVal, min).lt(0)) {
    newVal = currentValue ? currentValue.toString() : min.toString()
  }
  return inputValue === '' ? inputValue : newVal
}
/** 获取小数或已经是百分比的字符串百分比展示 */
export function getPercentDisplay(rate?: number | string | null, digits?: number) {
  if (rate === undefined || rate === null || rate === '') {
    return '--'
  }
  if (rate.toString().includes('%')) {
    return rate
  }
  const rateNumber = decimalUtils.SafeCalcUtil.mul(rate, 100)
  if (Number.isNaN(rateNumber)) {
    return '--'
  }
  return `${Number.isInteger(digits) ? formatNumberDecimalWhenExceed(rateNumber, digits!) : rateNumber}%`
}

/**
 * 将科学计数的数值转成字符串
 * @param data 要格式化的数据
 */
export function formatNonExponential(data) {
  return decimalUtils.getSafeDecimal(data).toFixed()
}

export { formatCurrency, formatNumberDecimal }
