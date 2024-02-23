const localeConfig = {
  'en-US': [
    { id: 1, name: 'T', value: 12 },
    { id: 2, name: 'B', value: 9 },
    {
      id: 3,
      name: 'M',
      value: 6,
    },
    {
      id: 4,
      name: 'K',
      value: 3,
    },
  ],
  'zh-HK': [
    { id: 1, name: '萬億', value: 12 },
    { id: 2, name: '億', value: 8 },
    {
      id: 3,
      name: '萬',
      value: 4,
    },
  ],
  'zh-CN': [
    { id: 1, name: '万亿', value: 12 },
    { id: 2, name: '亿', value: 8 },
    {
      id: 3,
      name: '万',
      value: 4,
    },
  ],
}

function round(num: number, precision: number) {
  //
  const index = num.toString().indexOf('.')
  if (index !== -1) {
    const a = `${num.toString()}e${(precision - index).toString()}`
    return (Math.round(Number(a)) / 10 ** (precision - index)).toString()
  }
  let value = `${num.toString()}.`
  for (let i = num.toString().length; i < precision; i += 1) {
    value += '0'
  }
  return value
}

/**
 *  对与不支持intl国际化的代码进行兼容
 * @param num
 * @param lang
 * @param precision
 * @returns
 */
export const formatterCurrency = (num: number, lang: string, precision: number) => {
  const numStr = num.toString().indexOf('.') === -1 ? num.toFixed(1) : num.toString()
  const index = numStr.indexOf('.')

  for (let i = 0; i < localeConfig[lang].length; i += 1) {
    const item = localeConfig[lang][i]
    if (index > item.value) {
      // 缩放到指定单位
      const value = num * Number((10 ** -item.value).toFixed(item.value))
      return round(value, precision + 4) + item.name
    }
  }
  return round(num, precision + 4)
}

function supportsES2020() {
  try {
    const s = new Intl.NumberFormat('en', {
      style: 'unit',
      unit: 'bit',
      unitDisplay: 'long',
      notation: 'scientific',
    }).format(10000)

    // Check for a plurality bug in environment that uses the older versions of ICU:
    // https://unicode-org.atlassian.net/browse/ICU-13836
    if (s !== '1E4 bits') {
      return false
    }
  } catch (e) {
    return false
  }
  return true
}
/**
 *  检查intl国际化是否支持
 * @returns
 */
export const checkIntlSupport = (): boolean => {
  if (typeof Intl === 'undefined' || !('NumberFormat' in Intl) || !supportsES2020()) {
    // 不支持 Intl.NumberFormat
    return false
  }
  // 支持 Intl.NumberFormat
  return true
}
