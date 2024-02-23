/**
 *
 * @param routeQuery 传入需要 querystring 化的对象
 * @param excludeKey 不用 querystring 化的 key
 * @returns querystring 化后的字符串
 */
const getUrlParsedParamsString = (routeQuery, excludeKey: string[] = []) => {
  let paramsUrl = ''
  Object.entries(routeQuery).forEach(([key, value], indexs, entries) => {
    if (!excludeKey.includes(key)) {
      paramsUrl += `${key}=${value}`
      if (indexs < entries.length - 1) {
        paramsUrl += '&'
      }
    }
  })
  return paramsUrl
}

export { getUrlParsedParamsString }
