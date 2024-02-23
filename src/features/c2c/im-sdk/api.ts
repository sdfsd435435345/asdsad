export type ImResponse<P = any> = { isOk: boolean; message?: string; data?: P; code?: number }
/**
 * 统一请求函数定义
 */
export type ImRequest<Q = any, P = any> = (
  params: Q & {
    /** 可以传入自定义参数，主要是用来区分是否需要使用公共 c2c */
    customConfig?: any
  }
) => Promise<ImResponse<P>>

export type IGetImTokenReq = {
  uid: any
}
export type IGetImTokenRes = {
  token: string
  appKey: string
  userId: string
}

export type IGetImTOkenFn = ImRequest<IGetImTokenReq, IGetImTokenRes>

/** 初始化接口方法 */
export function initApiMethods(request) {
  /**
   * 获取 IM Token
   * https://yapi.nbttfc365.com/project/82/interface/api/11974
   */
  const getImToken: IGetImTOkenFn = ({ customConfig = {}, ...options }) => {
    return request({
      path: `/v1/im/refreshToken`,
      method: 'POST',
      data: {
        uid: options.uid, // 用户 uid
      },
      ...customConfig,
    })
  }

  return {
    getImToken,
  }
}
