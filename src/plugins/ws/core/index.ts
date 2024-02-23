import { SubscribeReq, Request, LoginReq, ConnectReq } from '@/plugins/ws/protobuf/ts/proto/Request'
import { Any } from '@/plugins/ws/protobuf/ts/google/protobuf/any'
import { baseUserStore } from '@/store/user'
import { baseCommonStore } from '@/store/common'
import { IOptions, IPayload, INbitWebSocket, ISubscribeParams, ITopicsCBItem, IWSTopics } from '../types/index'
import { WSBaseThrottleWaitEnum, WSSendTypeEnum, WSThrottleTypeEnum } from '../constants/index'
import { getTopicKey, isEmpty, PBDecode, stringToJson } from '../utils'
import { HAVE_THE_HEART_TIME, HEART_TIME } from '../config'

class NbitWebSocket implements INbitWebSocket {
  /** 默认参数 */
  private defaultOpt: IOptions = {
    fail: null,
    success: null,
    debug: false,
    wsUrl: '',
    getToken: () => '',
  }

  /** 参数配置 */
  private options: IOptions

  /** ws 实例 */
  private ws: WebSocket | null = null

  /** 心跳检测定时器 */
  private heartTimer: NodeJS.Timeout | null = null

  /** 服务器超时定时器 */
  private serverTimeoutTimer: NodeJS.Timeout | null = null

  /** 持续心跳检测定时器 */
  private haveTheHeartTimer: NodeJS.Timeout | null = null

  /** 重新连接次数 */
  private reconnectCount = 0

  /** 消息缓存队列 */
  private queue: IPayload[] = []

  /** 断开重连倒计时 */
  private reconnectTimer: NodeJS.Timeout | null = null

  /** 重连间隔时间 */
  private delayConnectTime = 3000

  /** 所有已订阅的 topics 的回调队列 */
  private topicsCBStack: Record<string, ITopicsCBItem<number>[]> = {}

  // 是否自动断线重连
  private autoReconnect = true

  /** 当 ws 状态变化的时候触发的回调 */
  public onStateChange: ((state: number) => void) | null = null

  /**
   * 初始化实例
   * @param options 参数
   */
  constructor(options?: IOptions) {
    /** 合并传入参数和默认参数 */
    this.options = { ...this.defaultOpt, ...options }
  }

  public setOptions(options: IOptions) {
    this.options = { ...this.defaultOpt, ...options }
  }

  /** 创建连接 */
  public async connect(): Promise<void> {
    // eslint-disable-next-line no-console
    this.log('ws[connect]')
    if (this.ws?.readyState === WebSocket.OPEN) {
      // eslint-disable-next-line no-console
      this.log('ws[connect]: Opening')
      return
    }
    this.stateChange(WebSocket.CONNECTING)
    // let otp
    // TODO:
    // try {
    //   // 获取认证
    //   const response = await service.get('/websocket/otp')
    //   // 账号认证错误之后不再进行重连
    //   if (response.data.status === 401) return
    //   otp = response.data.data?.otp
    // } catch (error) {
    //   console.error(error)
    // }
    // this.log('ws[connect] otp', otp)
    // if (!otp) {
    //   this.reconnect()
    //   return
    // }
    const url = this.options.wsUrl
    this.ws = new WebSocket(url)
    this.ws.binaryType = 'arraybuffer'
    this.ws.onopen = () => {
      // eslint-disable-next-line no-console
      this.log(new Date().toLocaleTimeString(), 'ws[onopen]')
      this.reconnectCount = 0
      /** 连接成功回调 */
      this.stateChange()
      this.options.success && this.options.success()
      // 首先尝试发送 connect 事件
      this.sendConnect()
      /** 触发发送缓存消息 */
      this.runQueue()
      // 断线重连时，重新订阅
      const topics = Object.keys(this.topicsCBStack)
      if (topics.length > 0) {
        this._subscribe(topics)
      }
      /** 心跳检测 默认 5s */
      this.heartbeat()
      /** 固定心跳检测 默认为 18 s */
      this.haveTheHeart()
    }
    this.ws.onmessage = e => {
      this.heartbeatReset()
      const msgVal = PBDecode(e.data)
      const { topic, data } = msgVal
      const cbStacks: ITopicsCBItem<number>[] = this.topicsCBStack[topic]
      if (!cbStacks) return

      cbStacks.forEach((stack: ITopicsCBItem<number>) => {
        // const start = (this.options.debug && performance.now()) || 0
        if (stack.throttleType === WSThrottleTypeEnum.none) {
          // 不缓存，收到 ws 通知，立即执行
          stack.callback(data)
          // const end = (this.options.debug && performance.now()) || 0
        } else {
          if (stack.throttleType === WSThrottleTypeEnum.cover) {
            // 覆盖更新，缓存不断覆盖
            stack.cacheTrades = [data]
          } else if (stack.throttleType === WSThrottleTypeEnum.increment) {
            // 增量更新，缓存返回历史数据数组
            stack.cacheTrades.push(data)
          }
          /** 设置延时任务 */
          if (!stack.cacheTimer) {
            stack.cacheTimer = setTimeout(() => {
              // stack 有可能解订阅已经删除了
              if (stack) {
                stack.callback(stack.cacheTrades)
                // const end = (this.options.debug && performance.now()) || 0
                stack.cacheTrades = []
                stack.cacheTimer = null
              }
            }, stack.throttleTime)
          }
        }
      })
      this.log('ws[message]', msgVal)
    }
    this.ws.onerror = e => {
      console.error('ws[onerror]', e)
      this.stateChange()
      this.reconnect()
    }
    this.ws.onclose = e => {
      // eslint-disable-next-line no-console
      this.log(new Date().toLocaleTimeString(), 'ws[onclose]', e)
      /** autoReconnect 为 false 时说明手动调用了 close 方法，则不再进行重连 */
      if (!this.autoReconnect) return
      this.stateChange()
      this.reconnect()
    }
  }

  /** 开启心跳 */
  private heartbeat(): void {
    this.heartTimer && clearTimeout(this.heartTimer)
    this.serverTimeoutTimer && clearTimeout(this.serverTimeoutTimer)
    this.heartTimer = setTimeout(() => {
      this.log('ws[heartbeat timeout]')
      this.log(new Date().toLocaleTimeString(), 'ws[heartbeat timeout]')

      const request = Request.create()
      request.event = 'ping'
      this.ws?.readyState === WebSocket.OPEN && this.ws?.send(Request.toBinary(request))
      // 超时关闭，超时时间为 5s
      this.serverTimeoutTimer = setTimeout(() => {
        this.log(new Date().toLocaleTimeString(), 'ws[reconnect] 主动触发')
        this.reconnect()
      }, HEART_TIME)
    }, HEART_TIME)
  }

  /** 发送 connect 事件 */
  private async sendConnect() {
    this.send(['connect'], WSSendTypeEnum.connect)
  }

  /** 重置心跳 */
  private heartbeatReset() {
    this.heartTimer && clearTimeout(this.heartTimer)
    this.serverTimeoutTimer && clearTimeout(this.serverTimeoutTimer)
    this.heartbeat()
  }

  /** 发送消息 */
  public async send(topics: IWSTopics, type: WSSendTypeEnum) {
    /** 调用发送消息时连接还没有处于 open 状态则直接缓存消息，后续连接成功之后执行 */
    if (this.ws?.readyState === WebSocket.OPEN) {
      // this.log('ws[send]', topics, type)
      const params = this.formatSendParams(topics, type)
      if (!params) {
        return
      }
      try {
        this.ws?.send(params)
      } catch (error) {
        console.error(error, 'error-----')
      }
    } else {
      this.queue.push({
        topics,
        type,
      })
    }
  }

  // 订阅消息
  private _subscribe(topics: IWSTopics): void {
    if (isEmpty(topics)) return

    this.send(topics, WSSendTypeEnum.subscribe)
  }

  // 取消订阅
  private _unsubscribe(topics: IWSTopics): void {
    if (isEmpty(topics)) return
    this.send(topics, WSSendTypeEnum.unsubscribe)
  }

  // 登录
  private _login(): void {
    this.send([WSSendTypeEnum.login], WSSendTypeEnum.login)
  }

  // 登出
  private _logout(): void {
    this.send([WSSendTypeEnum.logout], WSSendTypeEnum.logout)
  }

  // 订阅消息，支持内部缓存
  public subscribe({
    subs,
    callback,
    throttleType = WSThrottleTypeEnum.none,
    throttleTime = WSBaseThrottleWaitEnum.none,
  }: ISubscribeParams): void {
    const _subs = Array.isArray(subs) ? subs : [subs]
    let topics = (_subs || []).map(sub => {
      return getTopicKey(sub)
    })

    topics.forEach(topic => {
      if (this.topicsCBStack[topic] && this.topicsCBStack[topic].length > 0) {
        this.topicsCBStack[topic].push({ callback, throttleType, throttleTime, cacheTrades: [] })
      } else {
        this.topicsCBStack[topic] = [{ callback, throttleType, throttleTime, cacheTrades: [] }]
        this._subscribe([topic])
      }
    })
  }

  // 取消订阅
  public unsubscribe({ subs, callback }): void {
    const _subs = Array.isArray(subs) ? subs : [subs]
    let topics = (_subs || []).map(sub => {
      return getTopicKey(sub)
    })

    topics.forEach(topic => {
      if (callback) {
        const cbStacks = this.topicsCBStack[topic]
        if (!cbStacks) {
          this._unsubscribe([topic])
          return
        }
        cbStacks.forEach((stack, index) => {
          if (stack.callback === callback) {
            if (stack.cacheTimer) {
              clearTimeout(stack.cacheTimer)
            }
            cbStacks.splice(index, 1)
          }
        })
        if (!cbStacks.length) {
          this._unsubscribe([topic])
          delete this.topicsCBStack[topic]
        }
      } else {
        this._unsubscribe([topic])
        delete this.topicsCBStack[topic]
      }
    })
  }

  // 登录
  public login(): void {
    return this._login()
  }

  // 登出
  public logout(): void {
    return this._logout()
  }

  /** 格式化发送参数 */
  private formatSendParams(topics: IWSTopics, type: WSSendTypeEnum) {
    // TODO: 不确定后端是否支持批量订阅
    if ([WSSendTypeEnum.subscribe, WSSendTypeEnum.unsubscribe].includes(type)) {
      const topicsVal = topics
        .map(topic => {
          return stringToJson(topic)
        })
        .filter(topic => topic)

      const SubscribeReqData = SubscribeReq.create({
        subs: topicsVal,
      })
      const request = Request.create()
      request.event = type
      request.data = Any.pack(SubscribeReqData, SubscribeReq)
      return Request.toBinary(request)
    }

    if ([WSSendTypeEnum.login].includes(type)) {
      const token = this.options.getToken?.()
      if (!token) {
        this.log('ws[login token error]', token)
        return ''
      }
      this.log('ws[login success]', token)
      const LoginReqData = LoginReq.create({
        token,
      })
      const request = Request.create()
      request.event = type
      request.data = Any.pack(LoginReqData, LoginReq)
      return Request.toBinary(request)
    }
    if ([WSSendTypeEnum.logout].includes(type)) {
      const request = Request.create()
      this.log('ws[logout]')
      request.event = WSSendTypeEnum.logout
      return Request.toBinary(request)
    }
    if ([WSSendTypeEnum.connect].includes(type)) {
      const { businessId } = baseCommonStore.getState()
      const token = this.options.getToken?.()
      const connectReqData = ConnectReq.create({
        businessId: Number(businessId),
        client: 'H5',
        version: '',
        deviceId: baseUserStore.getState().deviceId,
        token,
      })
      const request = Request.create()
      request.event = type
      request.data = Any.pack(connectReqData, ConnectReq)
      this.log('ws[send connect]')
      return Request.toBinary(request)
    }
    console.error('ws 暂不支持类型', type)
    return ''
  }

  /** 处理缓存消息 */
  private async runQueue() {
    if (this.queue.length === 0) return
    this.queue.forEach(q => {
      this.send(q.topics, q.type as WSSendTypeEnum)
    })
  }

  /** 异常断开处理 */
  public reconnect(): void {
    // eslint-disable-next-line no-console
    this.log(new Date().toLocaleTimeString(), 'ws[reconnect] start')
    this.close()
    // eslint-disable-next-line no-console
    this.log(new Date().toLocaleTimeString(), 'ws[reconnect]', this.ws?.readyState, this.reconnectCount)
    // 外部主动调用 reconnect 时，需要开启默认的自动重连
    this.autoReconnect = true
    this.stateChange()
    // 异常断线重连
    this.reconnectTimer = setTimeout(() => {
      this.connect()
      // eslint-disable-next-line no-plusplus
      this.reconnectCount++
    }, this.delayConnectTime)
  }

  // topic 包含对应前缀的，需要重新订阅，比如行情等级切换是，所有行情相关订阅，需要重新订阅一次
  public reSubscribe(topicPrefix: string): void {
    const topics: string[] = []
    Object.keys(this.topicsCBStack).forEach(topic => {
      if (topic.includes(topicPrefix)) {
        topics.push(topic)
      }
    })
    this._unsubscribe(topics)
    setTimeout(() => {
      this._subscribe(topics)
    })
  }

  /** 手动断开连接 */
  public close() {
    this.reconnectTimer && clearTimeout(this.reconnectTimer)
    this.reconnectTimer = null
    this.autoReconnect = false
    this.ws?.close()
  }

  /** 30s 固定发送心跳 */
  private haveTheHeart() {
    if (!this.haveTheHeartTimer) {
      // this.haveTheHeartTimer && clearInterval(this.haveTheHeartTimer)
      this.haveTheHeartTimer = setInterval(() => {
        const request = Request.create()
        this.log('ws[haveTheHeart interval]')
        request.event = 'ping'
        this.log(new Date().toLocaleTimeString(), 'ws[heartbeat interval]')
        this.ws?.readyState === WebSocket.OPEN && this.ws?.send(Request.toBinary(request))
      }, HAVE_THE_HEART_TIME)
    }
  }

  /** 日志打印 */
  private log(...params: any) {
    if (this.options.debug) {
      // eslint-disable-next-line no-console
      console.log(new Date().toLocaleTimeString(), ...params)
    }
  }

  /** 触发 socket 状态变化的回调 */
  private stateChange(readyState?: number) {
    if (typeof this.onStateChange === 'function' && this.ws?.readyState !== undefined) {
      this.onStateChange(readyState !== undefined ? readyState : this.ws?.readyState)
    }
  }
}

export default NbitWebSocket
