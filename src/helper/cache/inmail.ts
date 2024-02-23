import cacheUtils from 'store'

export const getInmail = () => {
  return cacheUtils.get('inmailPrice')
}

export const setInmail = data => {
  return cacheUtils.set('inmailPrice', data)
}
