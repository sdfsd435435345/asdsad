export enum I18nsEnum {
  'zh-CN' = 'zh-CN',
  'zh-HK' = 'zh-HK',
  'en-US' = 'en-US',
}
export const I18nKeys = Object.values(I18nsEnum)

export const I18nsMap = {
  [I18nsEnum['en-US']]: 'English',
  [I18nsEnum['zh-CN']]: '简体中文',
  [I18nsEnum['zh-HK']]: '繁體中文',
}

export const languageRoutes = I18nKeys.map(v => `/${v}`)

export function getI18nEmptyObject() {
  let res = {}
  I18nKeys.forEach(k => {
    res[k] = {}
  })
  return res
}
export const LanguageMapToChartMap = {
  'zh-CN': 'zh',
  'zh-Hk': 'zh',
  'en-US': 'en',
  'ja-JP': 'ja',
  'ko-KR': 'ko',
  'th-TH': 'th_TH',
  'zh-TW': 'zh_TW',
  'fr-FR': 'fr',
  'de-DE': 'de_DE',
  'it-IT': 'it',
  'es-ES': 'es',
  'vi-VN': 'vi',
}

export enum I18nsEnumAll {
  'zh-CN' = 'zh-CN',
  'zh-HK' = 'zh-HK',
  'en-US' = 'en-US',
  'zh-cn' = 'zh-CN',
  'zh-hk' = 'zh-HK',
  'en-us' = 'en-US',
}
