import { ZIMImageMessage, ZIMMediaMessage, ZIMMessage } from 'zego-zim-web'
import { ImListType, ImMessageTypeEnum, ZIMMessageType } from './types'

type ISdkMessage = ZIMMessage
const SdkMessageType = ZIMMessageType
function convertMessageType(type: any) {
  switch (type) {
    case SdkMessageType.Text:
      return ImMessageTypeEnum.text
    case SdkMessageType.Image:
      return ImMessageTypeEnum.image
    case SdkMessageType.Custom:
      return ImMessageTypeEnum.custom
    default:
      return ImMessageTypeEnum.text
  }
}

/** 避免过多的业务代码改动，web 也可复用 */
export function convertSdkSingleMessageToImMessage(message: ISdkMessage | ZIMImageMessage) {
  const type = convertMessageType(message.type)
  let body = message.message as string
  let attach = {} as any
  switch (type) {
    case ImMessageTypeEnum.custom:
      try {
        attach = JSON.parse(message.message as string)
      } catch {
        // nothing
      }
      break
    case ImMessageTypeEnum.image:
      attach = {
        url: (message as ZIMImageMessage).fileDownloadUrl,
        h: (message as ZIMImageMessage).originalImageHeight,
      }
      break

    default:
      break
  }
  if (type === ImMessageTypeEnum.image) {
    body = (message as ZIMMediaMessage).fileDownloadUrl
  }
  const imMessage: ImListType = {
    /** 文本内容 */
    body,
    /** 发送人 */
    from: message.senderUserID,
    /** 昵称，这里目前消息还没有，可能要从订单详情里推测 */
    fromNick: '',
    /** 消息类型 p2p: 单点 team: 群消息，忽略即可 */
    scene: '',
    /** 消息状态，忽略 */
    status: '',
    /** 接受人，单聊信息只能就是自己，可以忽略 */
    target: '',
    /** 时间 */
    time: message.timestamp,
    /** 接收人,单聊信息只能就是自己，可以忽略 */
    to: '',
    /** 消息类型 */
    type,
    /** 消息唯一 id */
    idServer: message.messageID,
    /** 自定义消息内容 */
    attach,
    orderDetail: {} as any,
    originMessage: message,
  }

  return imMessage
}
