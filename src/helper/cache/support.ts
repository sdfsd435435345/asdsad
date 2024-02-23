import cacheUtils from 'store'

export const getSupport = () => {
  return cacheUtils.get('helpCenterMenu')
}

export const setSupport = data => {
  return cacheUtils.set('helpCenterMenu', data)
}
