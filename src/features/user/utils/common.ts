import { UserVerifyTypeEnum } from '@/constants/user'

interface SystemType {
  Windows: boolean
  Mac: boolean
  iphone: boolean
  ipod: boolean
  ipad: boolean
  android: boolean
}

interface BrowserType {
  Chrome: boolean
  Firefox: boolean
  Opera: boolean
  Safari: boolean
  Edge: boolean
}

enum UidLength {
  length = 8, // 长度 8
}

export function getBrowser() {
  let browser = ''
  let userAgent = navigator?.userAgent?.toLowerCase() || ''
  let browserList: BrowserType = {
    Chrome: userAgent.indexOf('chrome') > -1 && userAgent.indexOf('safari') > -1, // Chrome 浏览器
    Firefox: userAgent.indexOf('firefox') > -1, // 火狐浏览器
    Opera: userAgent.indexOf('opera') > -1, // Opera 浏览器
    Safari: userAgent.indexOf('safari') > -1 && userAgent.indexOf('chrome') === -1, // safari 浏览器
    Edge: userAgent.indexOf('edge') > -1, // Edge 浏览器
  }

  for (let i in browserList) {
    if (browserList[i]) {
      browser = i
    }
  }
  return browser
}

export function getOperationSystem() {
  let OS = ''
  const OSList = <SystemType>{}
  const MacList = ['Mac68K', 'MacPPC', 'Macintosh', 'MacIntel']
  let userAgent = navigator?.userAgent?.toLowerCase() || ''
  OSList.Windows = navigator.platform === 'Win32' || navigator.platform === 'Windows'
  OSList.Mac = MacList.includes(navigator.platform)
  OSList.iphone = userAgent.indexOf('iPhone') > -1
  OSList.ipod = userAgent.indexOf('iPod') > -1
  OSList.ipad = userAgent.indexOf('iPad') > -1
  OSList.android = userAgent.indexOf('Android') > -1

  for (let i in OSList) {
    if (OSList[i]) {
      OS = i
    }
  }
  return OS
}

export function IsAccountType(email: string | undefined) {
  if (!email) return false
  const regExp = /@/g
  const numberExp = /^[\d]+$/
  const isEmail = email.match(regExp)
  const isNumber = email.match(numberExp)
  const isLength = email.length === UidLength.length

  if (isEmail) {
    return UserVerifyTypeEnum.email
  }

  if (isNumber && isLength) {
    return UserVerifyTypeEnum.uid
  }

  return false
}

/** 信息脱敏 */
export function UserInformationDesensitization(str: string): string {
  if (str === '' || str === undefined || str === null) return ''

  const regExp = /@/g
  const numberExp = /^[\d]+$/
  const isEmail = str.match(regExp)
  const isPhone = str.match(numberExp)

  if (isEmail) {
    const email = str.split('@')
    const emailExp = email[0].length < 3 ? /(?:.{1})[^@]+(?=@)/ : /(?:.{2})[^@]+(?=.{2}@)/
    return str.replace(emailExp, '****')
  }

  if (isPhone) {
    const phoneExp = /(\d{3})\d*(\d{4})/
    return str.replace(phoneExp, '$1****$2')
  }

  return ''
}

/** input 值清除空格 */
export function FormValuesTrim(value: string | number | undefined): string {
  if (!value) return ''
  return String(value).replace(' ', '')
}

/** input 值清除小数点 */
export function FormValuesTrimDecimalPoint(value: string | number | undefined): string {
  if (!value) return ''
  return String(value).replace('.', '')
}
