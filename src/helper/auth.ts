import { baseUserStore } from '@/store/user'
import { getMemberBaseSettingsInfo } from '@/apis/user'
import { link } from './link'
import { removeCookieToken, setCookieToken } from './cookie'
import { envIsClient } from './env'

export const setToken = tokenObj => {
  if (tokenObj?.token) {
    setCookieToken(tokenObj.token)
    const userStore = baseUserStore.getState()
    userStore.setToken({
      accessToken: tokenObj.token,
      refreshToken: tokenObj.refreshToken,
      accessTokenExpireTime: tokenObj.tokenExpireTime,
      refreshTokenExpireTime: tokenObj.refreshTokenExpireTime,
    })
    userStore.setLogin(true)
  }
  if (tokenObj?.accessToken) {
    setCookieToken(tokenObj.accessToken)
    const userStore = baseUserStore.getState()
    userStore.setToken(tokenObj)
    userStore.setLogin(true)
  }
}

export const removeToken = () => {
  removeCookieToken()
  const userStore = baseUserStore.getState()
  userStore.setToken(null)
}

/**
 * @description: 获取是否是非登录状态
 */
export function getIsUnLogin() {
  const userStore = baseUserStore.getState()
  return !userStore.isLogin
}

/**
 * @description: 获取是否登录状态
 */
export function getIsLogin() {
  const userStore = baseUserStore.getState()
  return userStore.isLogin
}

/**
 * 更具 authTo unAuthTo 和登录态拿到重定向路由
 */
export function getRedirectUrl(authTo, unAuthTo) {
  if (!!authTo && getIsLogin()) {
    return authTo
  }
  if (!!unAuthTo && getIsUnLogin()) {
    return unAuthTo
  }
}

/**
 * @description: 已禁用请查看最新 redirectTo 用法
 */
function getIsLoginBeforeRender(headers: PageContext['headers']) {
  if (envIsClient) {
    return getIsLogin()
  }
  if (!headers) {
    console.error('=====>>>> 服务端场景调用下请传入 PageContext.headers <<<<=====')
    return
  }
  return headers.token
}

/**
 * @description:获取登录状态，如果没登录会跳登录页，常用于资金页、交易页前置校验
 * @return isLogin
 */
export function checkLogin() {
  /** 未登录跳首页 */
  if (!getIsLogin()) {
    link('/login')
    return false
  }
  return true
}
/**
 * 拉取并更新用户信息到 store，目前只更新用户中心设置
 */
export function fetchAndUpdateUserInfo() {
  const userState = baseUserStore.getState()
  if (!userState.isLogin) {
    return
  }
  getMemberBaseSettingsInfo({}).then(res => {
    if (!res.isOk || !res.data) {
      return
    }
    userState.setPersonalCenterSettings(res.data)
  })
}
