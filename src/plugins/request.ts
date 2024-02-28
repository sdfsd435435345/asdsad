import { Toast } from 'react-vant'
import axios, { AxiosRequestConfig } from 'axios'
import { gitCommitId, baseUrl, envIsDev, envIsServer } from '@/helper/env'
import { link } from '@/helper/link'
import { baseUserStore } from '@/store/user'
import { baseCommonStore } from '@/store/common'
import { encryptAES } from '@/helper/ASE_RSA'
import { EncryptionKey } from '@/constants/encryption-key'
import { isApp } from '@/helper/is-app'
import { t } from '@lingui/macro'
import createAuthRefreshInterceptor from 'axios-auth-refresh'
import { postMemberAuthRefreshToken } from '@/apis/user'
import { setToken } from '@/helper/auth'
import { C2cTradeBestPriceCodeEnum } from '@/constants/c2c/trade'
import { tokenPreRefreshValue } from '@/constants/auth'
import { maintenanceApiResCode } from '@/constants/maintenance'
import { languageRoutes } from '@/constants/i18n'
import { getTimeZoneOffset } from '@/helper/date'

export enum contentTypeEnum {
  'application/x-www-form-urlencoded' = 1,
  'multipart/form-data',
}

/**
 * 统一请求函数定义
 */
export type MarkcoinRequest<Q = any, P = any> = (
  params: Q & {
    customConfig?: CustomRequestConfig
  }
) => Promise<MarkcoinResponse<P>>
type BaseMarkcoinResponse<R = any> = { message: string; data: R; code: number }
/**
 * 统一返回定义
 */
export type MarkcoinResponse<P = any> = { isOk: boolean; message?: string; data?: P; code?: number }

type FastPayConfig = {
  /** 目标为 fastpay 服务器 */
  withFastPayServer?: boolean
  /** 携带 fastpayToken，withFastPayServer 为 true 的话默认为 true */
  withFastPayToken?: boolean
}
/**
 * 统一请求参数设置
 */

export type CustomRequestConfig = {
  path?: string
  signature?: string
  contentType?: contentTypeEnum
  baseParams?: object
  signedData?: any
  /** 为兼容某部分接口没按照特定格式返回 */
  needAllRes?: boolean
  /** 单独处理这种 token 过期的情况，返回 true 则表示继续执行，返回 false 则不需要 */
  whenAuthError?: () => void | boolean
} & FastPayConfig

export type MarkcoinRequestConfig = AxiosRequestConfig & CustomRequestConfig
export const getRequestBaseHeader = (headers: any) => {
  const useStore = baseUserStore.getState()
  console.log(useStore, 'useStoreuseStore');

  let tokenParams = {
    currentToken: useStore?.userInfo
      ?.token
  }
  return {
    ...tokenParams,
  }
}
const authErrorCode = [401]
/**
 * 10080003 登出 token 错误码
 */
const passBusinessCode: number[] = [10080003, 10096004]
const passRoutes = [
  '/trade/',
  '/futures/',
  '/login',
  '/register',
  '/ternary-option/',
  '/retrieve',
  '/safety-verification',
]
// 自行处理的错误码，不会弹窗提示
const selfHandleErrorCodes = [C2cTradeBestPriceCodeEnum.notMatched, maintenanceApiResCode]

let isAuthErrorShowMassge = false
let fusionModePopUpShow = false

/** 处理状态码，并提示用户 */
const handleErrorCode = (
  code: number,
  msg: string,
  errorMessage?: string | undefined,
  config?: CustomRequestConfig
) => {
  if (envIsServer) {
    return
  }

  console.log(msg, 'msgmsgmsgmsg');
  

  const isAuthError = authErrorCode.includes(code)
  const isServerError = (code === 500 && msg === 'Network Error') || (code === 500 && msg?.includes('timeout of'))

  /** 用户信息失效处理 */
  if (isAuthError && !isAuthErrorShowMassge) {
    isAuthErrorShowMassge = true

    /** 阻止多次 401 请求后，将值设置为 true, 防止后续请求无法弹窗提示 */
    setTimeout(() => {
      isAuthErrorShowMassge = false
    }, 3000)
    if (config?.whenAuthError) {
      if (!config.whenAuthError()) {
        return
      }
      return
    }
    baseUserStore.getState().clearUserCacheData()
    const urlPathname = location.pathname
    /** 运行某些页面未登录访问、用户信息失效访问的处理 */
    if (!passRoutes.some(route => urlPathname.includes(route))) {
      Toast(msg || t`plugins_request_5101062`)
      const language = languageRoutes.find(route => urlPathname.includes(route))
      const redirect = urlPathname.replace(language || '', '')
      if (isApp()) {
        import('dsbridge').then(dsbridge => {
          dsbridge.default?.call('jumpToLogin')
        })
      } else {
        // link(`/login?redirect=${redirect}`)
      }

      return
    }
    Toast(msg)
    return
  }
  if (isServerError) {
    Toast(t`plugins_request_5101063`)
    return
  }

  if (!isAuthError && !isServerError) {
    const content = errorMessage || msg
    // disable toast if content === undefined
    content && Toast(content)
  }
}
const onRejected = error => {
  let resData: MarkcoinResponse
  const response = error?.response
  const msg = response?.data?.message || error?.toJSON?.()?.message
  const code = response?.data?.code || response?.status || 500
  const errorMessage = error?.config?.errorMessage
  
  // 用户登录失效
  handleErrorCode(code, msg, errorMessage, error?.config)

  resData = {
    isOk: false,
    data: '',
    message: msg,
    code: -1,
  }
  return Promise.resolve(resData)
}

const axiosRequest = axios.create({
  baseURL: envIsDev ? baseUrl : baseUrl,
  withCredentials: false,
  timeout: 10 * 1000,
})

function refreshAuthLogic(failedRequest) {
  const userStore = baseUserStore.getState()
  const tokenObj = userStore.token
  const tokenTtl = userStore.personalCenterSettings.tokenTtl as number
  return postMemberAuthRefreshToken({ refreshToken: tokenObj?.refreshToken as string, tokenTtl }).then(freshRes => {
    const freshResVal = freshRes?.data
    if (freshResVal?.accessToken) {
      setToken(freshResVal)
      failedRequest.response.config.headers.Authorization = freshResVal?.accessToken
    }
    return Promise.resolve()
  })
}

createAuthRefreshInterceptor(axiosRequest, refreshAuthLogic, {
  shouldRefresh: err => {
    const is401 = err.response?.status === 401
    const date = Date.now()
    const userStore = baseUserStore.getState()
    const tokenObj = userStore.token
    const refreshTokenExpireTime = Number(tokenObj?.refreshTokenExpireTime) + 99999999999
    if (!tokenObj?.refreshTokenExpireTime) {
      /** 这中间件和 axios catch  互斥只能在这里写 */
      onRejected(err)
      return false
    }
    // ================ 测试用 Start
    // 401 场景直接刷新，前提是刷新 token 没过期，正常不考虑这种场景 都 401 了还计算什么 刷新 token 时间，我们为了体验只考虑前置刷新

    // if (is401) {
    //   // 刷新 token 未过期
    //   if (date < refreshTokenExpireTime) {
    //     return true
    //   }
    //   /** 这中间件和 axios catch  互斥只能在这里写 */
    //   onRejected(err)
    // }

    // ================== END
    if (date < refreshTokenExpireTime) {
      // 分初始化刷新还是要提前刷新，但是我们不考虑初始化场景，只考虑提前刷新场景
      if (!is401) {
        // 要提前三分之一的时间刷新，也就是 4 小时
        if (date + tokenPreRefreshValue >= refreshTokenExpireTime) {
          return true
        }
      }
    }
    /** 这中间件和 axios catch  互斥只能在这里写 */
    onRejected(err)
    return false
  },
})
const Request: MarkcoinRequest = ({ path, headers = {}, ...rest }) => {
  // TODO: 需要检查这里 header 是否安全
  const baseHeader = getRequestBaseHeader(headers)
  const config: MarkcoinRequestConfig = {
    url: path,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...headers,
      ...baseHeader,
    },
    /**
     * get 参数 params
     * post 参数 data
     */
    ...rest,
  }

  switch (config.contentType) {
    // form 表单提交
    case contentTypeEnum['application/x-www-form-urlencoded']: {
      config.headers = {
        ...config.headers,
        'Content-Type': 'application/x-www-form-urlencoded',
      }
      break
    }
    // 适用文件上传 file 文件格式 图片等
    case contentTypeEnum['multipart/form-data']: {
      config.headers = {
        ...config.headers,
        'Content-Type': 'multipart/form-data',
      }
      break
    }

    default: {
      // 通过加密表判断需要加密的字段，对其进行加密。
      if (config.signature) {
        const keys = Object.keys(config.data)
        EncryptionKey.map(key => keys.includes(key) && (config.data[key] = encryptAES(config.data[key])))
      }

      break
    }
  }

  return axiosRequest
    .request<any, MarkcoinResponse>(config)
    .then(response => {
      // check api response for maintenance code number
      if (envIsServer) return response
      const store = baseCommonStore.getState()
      if (response?.data?.code === maintenanceApiResCode) store.setMaintenanceMode({ triggerCheck: true })
      else store.setMaintenanceMode({ triggerCheck: false })
      return response
    })
    .then(response => {
      let resData: MarkcoinResponse
      const res = response.data
      const msg = res.msg!

      // 现在是 yapi mock 暂未约束 code 码
      if (res.code === 200 || baseUrl.includes('yapi')) {
        resData = {
          isOk: true,
          data: res.data,
        }
        return resData
      }
      // 其它未知错误，原样返回
      // 过滤业务代码
      const isPassBusinessCode = passBusinessCode.includes(res.code)

      if (!isPassBusinessCode && !selfHandleErrorCodes.includes(res.code)) {
        // 用户登录失效
        
        handleErrorCode(res.code, msg)
      }

      resData = {
        isOk: false,
        data: res.data,
        message: res.message,
        code: res.code,
      }
      return Promise.resolve(resData)
    })
    .catch(error => {
      let resData: MarkcoinResponse
      const response = error?.response
      const msg = response?.data?.message || error?.toJSON?.()?.message
      const code = response?.data?.code || response?.status || 500

  
      handleErrorCode(code, msg)
      resData = {
        isOk: false,
        data: '',
        message: msg,
        code: -1,
      }
      return Promise.resolve(resData)
    })
}
export default Request
