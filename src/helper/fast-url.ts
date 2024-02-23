// s3 匹配图片域名

export const originS3Domain = 'https://newbit-s3.s3.ap-southeast-1.amazonaws.com'
// s3 替换的图片域名
export const fastS3Domain = 'https://img.chainstar.cloud'
export const fastS3DomainOld = 'https://img.monkey00.com'
// oss 原地址
export const originOSSDomain = 'https://markcoin.oss-ap-southeast-1.aliyuncs.com'
export const fastOSSDomain = 'https://oss.chainstar.cloud'

/**
 * url 传进来的地址
 * whetherManyBusiness: 是否是多商户模式图片
 * businessId: 商户 id
 */
export function getFastManyBusinessUrl(url, whetherManyBusiness?: boolean, businessId?: string) {
  /** 是否是多商户模式图片，如果是就会替换想换路径 * */
  if (whetherManyBusiness) {
    url = url.replace('/h5/image/', `/h5/business/${businessId}/business-img/`)
  }
  return url
}

/**
 * 判断是否是 S3、OSS 然后把地址替换成高速通道 URL
 */
export function getFastUrl(url: string) {
  if (typeof url !== 'string') {
    console.log(url, 'getFastUrl: 请检查下传入的 URL 不为字符串')
    return url
  }
  /** oss 和 s3 匹配处理* */
  if (url.includes(originS3Domain)) {
    // 执行替换操作
    url = url?.replace(originS3Domain, fastS3Domain)
    return url
  }
  if (url.includes(fastS3DomainOld)) {
    // 执行替换操作
    url = url?.replace(fastS3DomainOld, fastS3Domain)
    return url
  }
  if (url.includes(originOSSDomain)) {
    url = url?.replace(originOSSDomain, fastOSSDomain)
    return url
  }

  return url
}

function hasSingleChars(str, currentStr) {
  let charMap = {}
  let result = false
  for (let char of str) {
    if (currentStr === char) {
      if (charMap[char]) {
        result = false
      }
      charMap[char] = true
      result = true
    }
  }
  return result
}

export function getFileType(url) {
  if (typeof url !== 'string') {
    console.log(url, 'getFileType: 请检查下传入的 URL 不为字符串')
  }
  const allNames = url.split('/') || []
  const nameArr = allNames.slice(3, allNames.length)
  let hasTypeStr = ''
  nameArr.forEach(v => {
    if (hasSingleChars(v, '.')) {
      hasTypeStr = v
    }
  })
  return hasTypeStr.split('.')[1]
}

export function injectThemeImgUrl(url, theme) {
  if (typeof url !== 'string') {
    console.log(url, 'injectThemeImgUrl: 请检查下传入的 URL 不为字符串')
  }
  const allNames = url.split('/') || []
  const nameArr = allNames.slice(3, allNames.length)
  let strHasType = ''
  nameArr.forEach(v => {
    if (hasSingleChars(v, '.')) {
      strHasType = v
    }
  })
  if (strHasType) {
    const [name, type] = strHasType.split('.')
    return url.replace(strHasType, `${name}${theme}.${type}`)
  }
  return `${url}${theme}`
}
