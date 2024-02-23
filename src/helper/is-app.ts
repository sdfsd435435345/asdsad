import { envIsClient } from './env'

const isAppReg = /nbtheme/i
/**
 * @description 通过判断 ua，返回是否在 app 内
 */
export const isApp = (ua?: any) => envIsClient && isAppReg.test(ua || navigator?.userAgent || '')
