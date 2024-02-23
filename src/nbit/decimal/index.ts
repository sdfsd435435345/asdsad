import Decimal from 'decimal.js'


/**
 * 设置精度位 - 最大有效字位数
 * @param val
 */
export function setPrecision(val) {
  Decimal.set({ precision: val })
}

/**
 * 将安全金额的字符串还原回原始数字字符串，方便和后续的 decimal 计算
 * @param safeCurrency 安全金额的字符串
 * @returns 去除掉其他符号的数字字符串
 */
export function getSafeCurrency(safeCurrency: string | number | undefined | null): string | number {
  if (!safeCurrency) {
    return '0'
  }
  if (typeof safeCurrency === 'string') {
    if (safeCurrency === '--') {
      return '0'
    }
    if (isNaN(Number(safeCurrency))) {
      return '0'
    }
  }
  return safeCurrency
}

function getSafeCalcMethodDecimal(instance: Decimal): Decimal {
  // 覆盖四个计算方法为获取安全值
  const methods = ['add', 'sub', 'mul', 'div']
  methods.forEach(method => {
    instance[method] = function (val: Decimal.Value) {
      let decimalVal = getSafeDecimal(val)
      // 对于除法分母为 0 时返回 0
      if (method === 'div' && decimalVal.isZero()) {
        return getSafeCalcMethodDecimal(new Decimal(0))
      }
      return getSafeCalcMethodDecimal(Decimal[method](instance, decimalVal))
    }
  })

  return instance
}

/** 将值安全转换为 Decimal 数据 */
export function getSafeDecimal(value: Decimal.Value): Decimal {
  if (value instanceof Decimal) {
    return getSafeCalcMethodDecimal(value)
  }
  if (!value) {
    return getSafeCalcMethodDecimal(new Decimal(0))
  }
  if (typeof value === 'string') {
    return getSafeCalcMethodDecimal(new Decimal(getSafeCurrency(value)))
  }
  return getSafeCalcMethodDecimal(new Decimal(value))
}

/**
 * 添加安全的计算工具
 */
export const SafeCalcUtil = {
  mul(a: any, b: any) {
    return getSafeDecimal(a).mul(getSafeDecimal(b))
  },
  div(a: any, b: any) {
    return getSafeDecimal(a).div(getSafeDecimal(b))
  },
  add(a: any, b: any) {
    return getSafeDecimal(a).add(getSafeDecimal(b))
  },
  sub(a: any, b: any) {
    return getSafeDecimal(a).sub(getSafeDecimal(b))
  },
}

/**
 * 处理 '-0' '+0' 场景
 */
export function formatZeroPrefix(value: string, digits?: number) {
  digits = typeof digits === 'number' ? digits : getDigits(value)
  let _val = getSafeDecimal(value)
  const comparedZeroRes = _val.comparedTo(getSafeDecimal(0))
  if (comparedZeroRes === 0) {
    return `${_val.toFixed(digits)}`.replace(/[+-]*/, '')
  }
  return _val.toFixed(digits)
}

/**
 * 去掉小数点后面多余的 0
 * @param val
 */
export const removeDecimalZero = (val: string) => {
  const regexp = /(?:\.0*|(\.\d+?)0+)$/
  val = `${val}`.replace(regexp, '$1')
  return val
}

export type IIsRound = boolean | Decimal.Rounding
/**
 * 数字格式化 - 按照指定小数点位输出
 * @param data    要截取的数据
 * @param digits 指定小数点位数
 * @param isRound 是否向上约 | 传入具体 Decimal.Rounding 策略
 * @param delPostZero 是否去除末尾 0
 * @returns
 */
export const formatNumberDecimal = (data: any, digits = 2, isRound?: IIsRound, delPostZero?: boolean) => {
  // const round = isNumber(isRound) ? isRound : isRound ? Decimal.ROUND_HALF_UP : Decimal.ROUND_DOWN
    const round = Decimal.ROUND_HALF_UP
  let result = getSafeDecimal(formatZeroPrefix(getSafeDecimal(data).toFixed(digits, round), digits)).toFixed(
    digits,
    round
  )
  if (!delPostZero) {
    return result
  }
  return removeDecimalZero(result)
}

/**
 * 将对象中的某个 key 进行约小数位
 */
export function formatObjectNumberByKeys(obj, keys, offset) {
  keys.forEach(k => {
    if (obj[k]) {
      obj[k] = formatNumberDecimal(obj[k], offset, false, true)
    }
  })
  return obj
}

/**
 * 资产金额格式化，三位加逗号
 * @param data         要格式化的数据
 * @param digits      保留几位小数
 * @param keepDigits 是否始终保持对应位数的小数，不足补 0
 * @returns
 */
export const formatCurrency = (data: any, digits?: number, keepDigits = true, isRound?: IIsRound) => {
  if (!data?.toString()) {
    return ''
  }
  if (!digits && digits !== 0) {
    digits = getDigits(data)
  }
  data = getSafeDecimal(data)
  let value = (
    keepDigits ? formatNumberDecimal(data, digits, isRound) : formatNumberDecimal(data, digits, isRound, true)
  ).split('.')

  let n = value[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  if (value.length > 1) {
    n = `${n}.${value[1]}`
  }
  return n
}
/**
 * 获取某个数的小数位
 */
export function getDigits(data) {
  if (typeof data === 'string') {
    return data.split('.')[1]?.length || 0
  }
  data = getSafeDecimal(data)
  return data.toFixed().split('.')[1]?.length || 0
}
