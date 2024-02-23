export function replaceEmpty(str?: string | number) {
  if (Number.isNaN(str) || str?.toString() === 'NaN') {
    return '--'
  }
  return str?.toString() ? str : '--'
}

// 过滤表情符号
export const defaultFilterEmoji = (value = '') => {
  return value.replace(
    /[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g,
    ''
  )
}

// 过滤中文字符
export const defaultFilterChinese = (value = '') => {
  return value.replace(/[\u4e00-\u9fa5]/g, '')
}
