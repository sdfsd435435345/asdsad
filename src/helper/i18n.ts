import { i18n } from '@lingui/core'
import { en, zh } from 'make-plural/plurals'
import { I18nKeys, I18nsEnum, I18nsEnumAll } from '@/constants/i18n'
import { baseCommonStore } from '@/store/common'
import { envIsClient } from './env'

export const defaultLocale = I18nsEnum['en-US']

i18n.loadLocaleData({
  [I18nsEnum['en-US']]: { plurals: en },
  [I18nsEnum['zh-CN']]: { plurals: zh },
  [I18nsEnum['zh-HK']]: { plurals: zh },
})

/**
 * We do a dynamic import of just the catalog that we need
 * @param locale any locale string
 */
export async function dynamicActivate(locale: string) {
  const { messages } = await import(`../locales/${locale}/messages.ts`)
  i18n.load(locale, messages)
  i18n.activate(locale)
}

export const localeDefault = I18nsEnum['en-US']

/**
 * 删除 url split '/' 后的拼接数组里面的重复多语言
 */
function delMultipleLangArr(urlArr) {
  let resArr: any = []
  urlArr.forEach(k => {
    // 上一个有 多语言并且 当前 k 是多语言 就覆盖
    const lastIndex = resArr.length - 1
    if (I18nKeys.includes(resArr[lastIndex]) && I18nKeys.includes(k)) {
      resArr.splice(lastIndex, lastIndex, k)
    } else {
      resArr.push(k)
    }
  })
  return resArr
}

export function extractLocale(url) {
  const urlPaths = delMultipleLangArr(url.split('/'))
  let locale
  let urlWithoutLocale
  const firstPath = urlPaths[1]
  const hasLang = I18nKeys.includes(firstPath)
  if (hasLang) {
    locale = firstPath
    urlWithoutLocale = `/${urlPaths.slice(2).join('/')}`
  } else {
    locale = null
    urlWithoutLocale = url
  }
  return { locale, urlWithoutLocale }
}

export function setLocale(lang: I18nsEnum, path?: string) {
  if (envIsClient) {
    const _lang = lang === I18nsEnum['en-US'] ? '' : `/${lang}`
    const { setLocale: _setLocale } = baseCommonStore.getState()
    _setLocale(lang)
    const _path = path || extractLocale(location.pathname + location.search).urlWithoutLocale
    document.location.assign(`//${location.host}${_lang}${_path}`)
  }
}

export const removeLocale = (urlString?: string) => {
  if (!urlString) return
  // 外部路由不考虑处理多语言问题
  if (/^http/.test(urlString)) {
    return urlString.charAt(0) === '/' ? urlString : `/${urlString}`
  }
  let removed = urlString
  I18nKeys.forEach(k => {
    if (urlString.includes(k)) {
      const localeType = urlString[0] === '/' ? RegExp(`^/${k}`, 'i') : RegExp(`^${k}`, 'i')
      removed = urlString.replace(localeType, '')
    }
  })
  return removed.charAt(0) === '/' ? removed : `/${removed}`
}

/**
 * 获取传入的字符串当前系统是否是中文语言
 */
export function getIsUserBrowserLangZhCN(str) {
  return (str || '').toLowerCase().includes('zh-cn')
}

export function getUserBrowserLang(str) {
  // if ((str || '').includes('zh-')) {
  //   if (getIsUserBrowserLangZhCN(str)) {
  //     return I18nsEnum['zh-CN']
  //   }
  //   return I18nsEnum['zh-HK']
  // }
  return I18nsEnum['en-US']
}

/**
 * 更具不同权重获取优先级最高的那个语言，用来设置当前语言
 */
export function getFirstLang(appLang, cookieLocale, headerLang) {
  // app webview 优先
  if (appLang) {
    const res = I18nsEnumAll[appLang]
    if (res) {
      return res
    }
  }
  // 其次 web 系统内缓存
  if (cookieLocale) {
    const res = I18nsEnumAll[cookieLocale]
    if (res) {
      return res
    }
  }
  // 最后默认值，系统默认语言优先
  const userBrowserLang = getUserBrowserLang(headerLang)
  return userBrowserLang
}
