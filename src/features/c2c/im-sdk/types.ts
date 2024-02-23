import { ZIMMessage } from 'zego-zim-web'

export enum ImMessageTypeEnum {
  /** 自定义消息 */
  custom = 'custom',
  /** 订单详情 */
  orderDetail = 'orderDetail',
  /** 文本消息 */
  text = 'text',
  /** 图片消息 */
  image = 'image',
  /** 系统消息 */
  notification = 'notification',
}
export interface ImListType {
  /** 文本内容 */
  body: string
  /** 发送人 */
  from: string
  /** 昵称 */
  fromNick: string
  /** 消息类型 p2p: 单点 team: 群消息 */
  scene: string
  /** 消息状态 */
  status: string
  /** 接受人 */
  target: string
  /** 时间 */
  time: number
  /** 接受人 */
  to: string
  /** 消息类型 text 文本 image 图片 */
  type: string
  /** 消息唯一 id */
  idServer: string
  /** 自定义消息内容 */
  attach?: {
    msgType: number
    orderStatus: string
    ext: string
    name: string
    url: string
    w: number
    h: number
  }
  orderDetail: any
  originMessage?: ZIMMessage
}
// 单独写是因为sdk 只有 declare 无法运行时使用
export enum ZIMConnectionEvent {
  Success = 0,
  ActiveLogin = 1,
  LoginTimeout = 2,
  LoginInterrupted = 3,
  KickedOut = 4,
}
export enum ZIMMessagePriority {
  Low = 1,
  Medium = 2,
  High = 3,
}
export enum ZIMConversationType {
  Unknown = -1,
  Peer = 0,
  Room = 1,
  Group = 2,
}
export enum ZIMConversationEvent {
  Added = 0,
  Updated = 1,
  Disabled = 2,
  Deleted = 3,
}
export enum ZIMConversationNotificationStatus {
  Notify = 1,
  DoNotDisturb = 2,
}
export enum ZIMMessageType {
  Unknown = 0,
  Text = 1,
  Command = 2,
  Image = 11,
  File = 12,
  Audio = 13,
  Video = 14,
  Barrage = 20,
  System = 30,
  Revoke = 31,
  Custom = 200,
}
export enum ZIMMessageSentStatus {
  Sending = 0,
  Success = 1,
  Failed = 2,
}
export enum ZIMMessageDirection {
  Send = 0,
  Receive = 1,
}
export enum ZIMMessageOrder {
  Descending = 0,
  Ascending = 1,
}
export enum ZIMMessageReceiptStatus {
  None = 0,
  Processing = 1,
  Done = 2,
  Expired = 3,
  Failed = 4,
}
export enum ZIMMessageRevokeStatus {
  Unknown = -1,
  SelfRevoke = 0,
  SystemRevoke = 1,
  ServiceAPIRevoke = 2,
  GroupAdminRevoke = 3,
  GroupOwnerRevoke = 4,
}
export enum ZIMRevokeType {
  TwoWay = 0,
  OneWay = 1,
}
