/* eslint-disable prefer-promise-reject-errors */
import ZIM, { ZIMImageMessage, ZIMMessage } from 'zego-zim-web'
import { unionBy } from 'lodash'
import { IGetImTOkenFn, IGetImTokenRes, initApiMethods } from './api'
import { convertSdkSingleMessageToImMessage } from './helper'
import { ImListType, ZIMConnectionEvent, ZIMConversationType, ZIMMessageType } from './types'

type IUserInfo = {
  uid: string
  nickname: string
}
type IInitC2CImParams = {
  /** 系统内的 request 函数，自定义获取 token 函数时可不传 */
  request?: any
  /** 获取用户信息 */
  getUserInfo: () => IUserInfo
  /** 获取 IM token 的方法，默认从接口拿，可不传 */
  getImToken?: IGetImTOkenFn
  appId: number
}
// 导出的全局信息，可以认为只有 1 个实例
export const C2cImGlobalConfig = {
  initParams: {} as IInitC2CImParams,
  initRes: {
    zim: null as any as ZIM,
    settings: {} as IGetImTokenRes,
    login: async () => {},
  },
  isLogin: false,
}

/** 初始化 im，返回 sdk、登录函数和 token 配置 */
export async function initC2CIm(params: IInitC2CImParams) {
  if (C2cImGlobalConfig.initRes.zim) {
    console.info('IM 已初始化')
    return C2cImGlobalConfig.initRes
  }
  let { request, getUserInfo, getImToken } = params
  if (!getImToken) {
    getImToken = initApiMethods(request).getImToken
  }
  /** 获取配置信息 */
  const res = await getImToken({
    uid: getUserInfo().uid,
    customConfig: {
      withFastPayServer: true,
    },
  })
  if (!res.isOk || !res.data) return

  const settings = res.data
  ZIM.create({ appID: params.appId })
  const zim = ZIM.getInstance()
  function login() {
    const userInfo = getUserInfo()
    const uid = userInfo?.uid
    return zim
      .login(
        {
          userID: C2cImGlobalConfig.initRes.settings.userId,
          userName: '', // userInfo?.nickname || uid,
        },
        C2cImGlobalConfig.initRes.settings.token
      )
      .then(res => {
        C2cImGlobalConfig.isLogin = true
        return res
      })
  }
  const result = {
    zim,
    settings,
    login,
  }

  C2cImGlobalConfig.initParams = params
  C2cImGlobalConfig.initRes = result

  return result
}

enum ZIMEventEnum {
  /** 单聊 */
  message = 'receivePeerMessage',
  /** 群聊 */
  receiveGroupMessage = 'receiveGroupMessage',
  connectionStateChanged = 'connectionStateChanged',
  tokenWillExpire = 'tokenWillExpire',
}
type IBindEventsParams = {
  /** 群聊 id */
  tid: string
  onMessages: (messages: ImListType[]) => void
}

export function bindEvents({ tid, onMessages }: IBindEventsParams) {
  const globalZim = C2cImGlobalConfig.initRes.zim
  globalZim.on(ZIMEventEnum.receiveGroupMessage, (_, { messageList, fromConversationID }) => {
    if (fromConversationID === tid) {
      const list: Array<ImListType> = messageList.map(convertSdkSingleMessageToImMessage)

      onMessages(list)
    }
  })

  /** 断开重连 */
  globalZim.on(ZIMEventEnum.connectionStateChanged, function (_, { state, event, extendedData }) {
    // 当长时间网络连接断开导致SDK内部登出时，需要重新登录
    if (state === 0 && event !== ZIMConnectionEvent.Success && event !== ZIMConnectionEvent.KickedOut) {
      const { login, settings } = C2cImGlobalConfig.initRes
      login()
    }
  })
  globalZim.on(ZIMEventEnum.tokenWillExpire, async function (_, { second }) {
    // 可以在这里调用 renewToken 接口来更新 token
    const { settings } = C2cImGlobalConfig.initRes
    const res = await globalZim.renewToken(settings.token)
    if (res.token) {
      // 更新 token
      settings.token = res.token
    }
  })
}
function beforeSend() {
  if (!C2cImGlobalConfig.initRes.zim) {
    return Promise.reject('IM 未初始化')
  }
  if (!C2cImGlobalConfig.isLogin) {
    return Promise.reject('IM 未登录')
  }

  return Promise.resolve()
}
export async function queryHistoryMessages(tid: any, message?: ZIMMessage) {
  await beforeSend()
  const result = await C2cImGlobalConfig.initRes.zim.queryHistoryMessage(tid, ZIMConversationType.Group, {
    count: 20,
    reverse: true,
    nextMessage: message,
  })
  // 自己发图片消息在本地会有 2 条消息，这里做一个过滤，但是有时候会过滤掉正常的图片
  return unionBy(result.messageList, item => item.messageID).map(convertSdkSingleMessageToImMessage)
}

export async function sendTextMessage(tid: any, value: string) {
  await beforeSend()
  return C2cImGlobalConfig.initRes.zim
    .sendMessage(
      {
        type: ZIMMessageType.Text,
        message: value,
      },
      tid,
      ZIMConversationType.Group,
      {
        priority: 1,
      }
    )
    .then(res => {
      return convertSdkSingleMessageToImMessage(res.message)
    })
}

export async function sendImageMessage(tid: any, value: File) {
  await beforeSend()
  return C2cImGlobalConfig.initRes.zim
    .sendMediaMessage(
      {
        type: ZIMMessageType.Image,
        fileLocalPath: value,
      },
      tid,
      ZIMConversationType.Group,
      {
        priority: 1,
      }
    )
    .then(res => {
      return convertSdkSingleMessageToImMessage(res.message)
    })
}

export function destroyIm() {
  const globalZim = C2cImGlobalConfig.initRes.zim
  if (!globalZim) return
  globalZim.destroy()
  C2cImGlobalConfig.initRes = {
    zim: null as any as ZIM,
    settings: {} as IGetImTokenRes,
    login: async () => {},
  }
  C2cImGlobalConfig.isLogin = false
}

export function getCurrentUserId() {
  return C2cImGlobalConfig.initRes.settings.userId
}
