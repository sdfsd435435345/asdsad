import { isApp } from '@/helper/is-app'
import { basePluginStore } from '@/store/plugin'
import dsBridge from 'dsbridge'
import { setToken, removeToken } from '../../auth'

/**
 * 打通 app h5 基础信息通信
 * https://chandao.nbttfc365.com/zentao/doc-objectLibs-custom--8-1074.html#app=doc
 */
async function bridgeAppH5(pageContext) {
  // 注入 dsBridge 到 plugin store
  if (isApp()) {
    basePluginStore.getState().setJsBridge(dsBridge)
  }

  // 判断是否 app 场景
  // 检测是否登录的函数
  // 获取 app token 去掉接口拉
  // 3、调用 H5 的函数 登录成功
  // 未登录跳转 App login 核心做

  if (isApp() && dsBridge.call('isLogin')) {
    const getTokenPromise = new Promise(function (resolve, reject) {
      dsBridge.call('getAccessToken', function (v) {
        resolve(v)
      })
    })
    return getTokenPromise.then((tokenRes: any) => {
      let _tokenRes = {} as any
      try {
        _tokenRes = JSON.parse(tokenRes)
      } catch (error) {
        console.log(error, 'JSON.parse getAccessToken error=====>>>>')
      }
      const data = _tokenRes?.data as any
      if (data) {
        setToken({
          accessToken: data.token,
          refreshToken: data.refreshToken,
          accessTokenExpireTime: data.tokenExpireTime,
          refreshTokenExpireTime: data.refreshTokenExpireTime,
        })
      }
    })
  }
  if (isApp() && !dsBridge.call('isLogin')) {
    removeToken()
    const { unAuthTo } = pageContext
    if (unAuthTo) {
      dsBridge.call('jumpToLogin')
      return true
    }
  }
}

export async function clientInjectFirst(pageContext) {
  return bridgeAppH5(pageContext)
}
