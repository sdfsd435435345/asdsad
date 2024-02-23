import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import relativeTime from 'dayjs/plugin/relativeTime'
import { replaceEmpty } from './filters'

dayjs.extend(relativeTime)
dayjs.extend(utc)
dayjs.extend(timezone)

export enum DateFormatTemplate {
  default = 'YYYY-MM-DD HH:mm:ss',
}
/**
 * 格式化时间，默认格式为 YYYY-MM-DD HH:mm:SS
 * @param date 格式化前的时间
 * @param template
 * @returns 格式化后的时间
 */
export function formatDate(date: string | number, template: string = DateFormatTemplate.default) {
  if (!date) {
    return replaceEmpty(date)
  }

  const result = dayjs(date).format(template)
  if (result === 'Invalid Date') {
    return replaceEmpty()
  }

  return result
}

/** 展示时分秒时填充前置 0 */
export function fillZero(num: number) {
  return num < 10 ? `0${num}` : num
}
const DAY_MS = 24 * 60 * 60 * 1000
/**
 * 获取天数的毫秒数
 * @param day 天数
 * @returns 毫秒数
 */
export function getDayMs(day: number) {
  return day * DAY_MS
}
// 获取指定时间段开始时间
export function getBeforeDate(n: number | false): number {
  if (!n) {
    return null as any
  }

  let oneDay = 24 * 60 * 60 * 1000
  const startTime = new Date(new Date(new Date(Date.now() - n * oneDay).getTime()).setHours(0, 0, 0, 0)).getTime()
  return startTime
}
/** 获取从今天往前天数的开始时间，比如 1 天，是今天凌晨到今天 23:59:59  */
export function getPeriodDayTime(days: number) {
  const start = dayjs(formatDate(Date.now(), 'YYYY-MM-DD')).toDate().getTime() - getDayMs(days - 1)
  const end = start + getDayMs(days) - 1

  return {
    start,
    end,
  }
}

/** 与当前时间差距多少，type 为差距单位* */
export function getDiff(lastTime: number, type, template: string = DateFormatTemplate.default) {
  const time = dayjs(new Date()).format(template)
  return dayjs(time).diff(formatDate(lastTime, 'YYYY-MM-DD HH:mm:ss'), type)
}

/** 是否是当前年份* */
export function getYearDiff(day: number) {
  const newTime = dayjs(new Date()).format('YYYY')
  const lastTime = formatDate(day, 'YYYY')
  const isCurrentYears = dayjs(newTime).diff(lastTime, 'year')
  return !!isCurrentYears
}
/**
 *  获取合约资金费率下一个结算日期
 * @param times '0,6,8'
 * @param span 间隔，如 8
 */
export function getFutureFundingRateNextDate(times: string, span: number) {
  let targetDate = dayjs().tz('Asia/Shanghai').toDate()
  targetDate.setHours(Number(times[0] || 0), 0, 0, 0)
  while (targetDate.getTime() < Date.now()) {
    targetDate = new Date(targetDate.getTime() + 60 * 60 * 1000 * (span || 8))
  }

  return targetDate.getTime()
}

/** 获取当前时间和另一个个时间差* */
export function getTimeDiff(day, type) {
  // console.log(dayjs(day).format('YYYY-MM-DD HH:mm'))
  if (!day) return
  const startDate = dayjs(dayjs().format('YYYY-MM-DD HH:mm'))
  const endDate = dayjs(dayjs(day).format('YYYY-MM-DD HH:mm'))
  return startDate.diff(endDate, type)
}

/** 获取当前星期* */
export function getWeekDay() {
  return dayjs().day()
}

export function getCurrentTimeDiff(startTime, endTime) {
  const startDate = dayjs(dayjs().format(`YYYY-MM-DD ${startTime}`)).valueOf()
  const endDate = dayjs(dayjs().format(`YYYY-MM-DD ${endTime}`)).valueOf()
  const currentDate = dayjs(dayjs().format(`YYYY-MM-DD HH:mm`)).valueOf()
  return { startDate, endDate, currentDate }
}
/**
 * 获取当前的年月日时间戳
 */
export function getCurrentFullDayTimestamp() {
  return dayjs(formatDate(Date.now(), 'YYYY-MM-DD')).toDate().getTime()
}

/**
 * 获取当前时间是否在今天日期
 */
export function isToday(time: number) {
  return dayjs(time).isSame(dayjs(), 'day')
}

/**
 * 获取客户端时区
 * @returns eg: +08:00
 */
export function getTimeZoneOffset() {
  return `UTC${dayjs().format('Z')}`
}
