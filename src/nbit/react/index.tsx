import Decimal from 'decimal.js'
import { marketUtils, decimalUtils } from '@/nbit'
import React, { memo, ReactNode } from 'react'

export interface IIncreaseTag {
  // 原始值
  value?: string | number
  // 显示'+'|'-'
  hasPrefix?: boolean
  // 显示'%'|'亿'等单位后缀
  hasPostfix?: boolean
  // % 小数点位数 eg: 12.xx%
  digits?: number
  // 是否删除小数点末尾的 0
  delZero?: boolean
  // 四舍五入
  isRound?: boolean
  // 千分位
  kSign?: boolean
  // 默认空值显示文案
  defaultEmptyText?: string
  // 是否显示红涨绿跌
  hasColor?: boolean
  // 红涨绿跌相对于谁比较
  diffTarget?: number
  // 校验 0 返回 defaultEmptyText
  isCheckZero?: boolean
  // 默认是需要百分比计算
  needPercentCalc?: boolean
  //会添加个父级 span class 为 tag-wrap-text-buy_up_color | tag-wrap-text-sell_down_color | 'tag-wrap'
  hasFather?: boolean
  left?: ReactNode
  right?: ReactNode
}
const defaultProps = {
  hasColor: true,
  hasPrefix: true,
  hasPostfix: false,
  isRound: false,
  kSign: true,
  needPercentCalc: false,
  delZero: true,
  defaultEmptyText: '--',
  diffTarget: 0,
}
/** 涨跌组件，支持涨跌色、千分位、前后缀正值负值符号等、 */
const IncreaseTag = (props: IIncreaseTag & typeof defaultProps) => {
  const { left, right, hasFather, digits } = props
  const value = `${props.value === undefined ? '--' : props.value}`
  const increaseClassStr = props.hasColor ? marketUtils.getColorClassByPrice(value, props.diffTarget) : ''
  const increaseClassStrWrap = increaseClassStr ? `tag-wrap-${increaseClassStr}` : 'tag-wrap'
  const _digits = digits ?? decimalUtils.getDigits(value)
  /**
   * @description: 处理前缀、后缀、千分位、逗号格式化
   * @param {number} val
   * @param {string} origin
   * @param {*} postfix
   */
  const getformatFixStr = (val: number | string, origin: string | number, postfix = '%') => {
    const { hasPrefix, hasPostfix, kSign } = props
    let str = ''
    if (hasPrefix) {
      const comparedZeroRes = decimalUtils.getSafeDecimal(val).comparedTo(decimalUtils.getSafeDecimal(0))
      const prefix = comparedZeroRes === 1 ? '+' : ''
      str = `${prefix}${str}`
    }
    str = `${str}${val}`
    if (hasPostfix) {
      str = `${str}${postfix}`
    }
    // 是否添加千位分隔符
    if (kSign) {
      const list = str.split('.')
      if (list.length > 1) {
        // 小数处理
      }
      const decimal = list.length > 1 ? `.${list[1]}` : ''
      str = list[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + decimal
    }
    return str
  }
  /**
   * @description: 获取最终页面展示值
   */
  const getIncreaseNumber = () => {
    const { isCheckZero, defaultEmptyText, hasPostfix, delZero, isRound, needPercentCalc } = props
    if (value === '' || value === '--' || value === undefined) {
      return defaultEmptyText
    }

    if (isCheckZero) {
      if (value === '0') {
        return defaultEmptyText
      }
    }
    let accurateVal: string | number
    // 最终显示值不需要后缀
    if (!hasPostfix) {
      accurateVal = decimalUtils.formatZeroPrefix(
        decimalUtils.getSafeDecimal(value).toFixed(_digits, isRound ? Decimal.ROUND_HALF_UP : Decimal.ROUND_DOWN),
        _digits
      )

      if (delZero) {
        accurateVal = decimalUtils.removeDecimalZero(accurateVal)
      }
      return getformatFixStr(accurateVal, value, '')
    }
    // 需要后缀、后端没处理过得值

    // 需要处理百分比计算。这是默认选项
    if (needPercentCalc) {
      accurateVal = decimalUtils.formatZeroPrefix(
        decimalUtils
          .getSafeDecimal(value)
          .mul(Math.pow(10, 2))
          .toFixed(_digits, isRound ? Decimal.ROUND_HALF_UP : Decimal.ROUND_DOWN),
        _digits
      )

      if (delZero) {
        accurateVal = decimalUtils.removeDecimalZero(accurateVal)
      }

      return getformatFixStr(accurateVal, value, '%')
    }
    // 不需要处理百分比
    accurateVal = decimalUtils.formatZeroPrefix(
      decimalUtils.getSafeDecimal(value).toFixed(_digits, isRound ? Decimal.ROUND_HALF_UP : Decimal.ROUND_DOWN),
      _digits
    )
    if (delZero) {
      accurateVal = decimalUtils.removeDecimalZero(accurateVal)
    }

    return getformatFixStr(accurateVal, value)
  }
  if (hasFather) {
    return (
      <span className={`${increaseClassStrWrap}`}>
        <span className={`increase-wrap ${increaseClassStr}`}>
          {left && left}
          {getIncreaseNumber()}
          {right && right}
        </span>
      </span>
    )
  }
  return (
    <span className={`increase-wrap ${increaseClassStr}`}>
      {left && left}
      {getIncreaseNumber()}
      {right && right}
    </span>
  )
}

IncreaseTag.defaultProps = defaultProps

export { IncreaseTag }
