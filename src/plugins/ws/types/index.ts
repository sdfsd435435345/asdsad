/* eslint-disable @typescript-eslint/no-explicit-any */

import { Optional } from '@/typings/common'
import { WSSendTypeEnum, WSThrottleTypeEnum } from '../constants'

/** options 参数 */
export interface IOptions {
  /** 失败重连次数 */
  failNum?: number
  /** 重连间隔时间 */
  delayConnectTime?: number
  /** 连接失败回调 */
  fail?: (() => unknown) | null
  /** 连接成功回调 */
  success?: (() => unknown) | null
  /** debug 开关 */
  debug?: boolean
  /** 是否是现货 ws */
  isCoin?: boolean
  /** ws url */
  wsUrl: string
  /** get login token */
  getToken?: () => string
}

/** 发送消息体 */
export interface IPayload {
  topics: IWSTopics
  type: keyof typeof WSSendTypeEnum
}

export type subCallback = (data: any) => void
export interface ISubscribeParams {
  subs: any[] | string | Record<string, any>
  callback: subCallback
  throttleType?: WSThrottleTypeEnum
  throttleTime?: number
}
export interface IUnSubscribeParams {
  subs: any[] | string | Record<string, any>
  callback: subCallback
}
export interface INbitWebSocket {
  onStateChange: ((state: number) => void) | null
  subscribe(params: ISubscribeParams): void
  unsubscribe(params: IUnSubscribeParams): void
  reconnect(): void
  close(): void
  connect(): void
  reSubscribe(topicPrefix: string): void
  setOptions(options: IOptions): void
}

export interface ITopicsCBItem<WSThrottleWaitEnum> {
  callback: subCallback
  throttleType: WSThrottleTypeEnum
  throttleTime: WSThrottleWaitEnum
  cacheTimer?: null | NodeJS.Timeout
  cacheTrades: unknown[]
}

export type IWSTopics = string[]
