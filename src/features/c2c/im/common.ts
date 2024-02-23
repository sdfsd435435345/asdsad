import dayjs from 'dayjs'
import isToday from 'dayjs/plugin/isToday'
import { t } from '@lingui/macro'
import { IC2cOrderDetail } from '@/typings/api/c2c/order'
import { AssetsRouteEnum } from '@/constants/assets'
import { getC2cOrderDetailPageRoutePath, getAssetsHistoryPageRoutePath } from '@/helper/route'

dayjs.extend(isToday)

/** 5MB 图片大小 */
export const LimitSize = 5 * (1024 * 1024)

export enum ImImageWidthAndHeightEnum {
  /** 图片最大宽度 */
  width = 80,
  /** 图片最大高度 */
  height = 150,
}

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

export enum ImMsgTypeEnum {
  /** 普通消息 */
  ordinary = 1,
  /** 提示框消息 */
  promptBox,
  /** 提醒消息 */
  remind,
}

export enum ChatDisabledStatusEnum {
  wasReceiveCoin = 'WAS_RECEIVE_COIN',
  wasCancel = 'WAS_CANCEL',
  notCancelAppealFinish = 'NOT_CANCEL__APPEAL_FINISH',
  cancelAppealFinish = 'CANCEL__APPEAL_FINISH',
}

export enum ImOrderDetailDealType {
  /** 站内 */
  INSIDE = 'INSIDE',
  /** 站外 */
  OUTSIDE = 'OUTSIDE',
}

export enum ImOrderOperateEnum {
  /** 确认收款 */
  wasPayed = 'WAS_PAYED',
  /** 确认收币 */
  wasTransferCoin = 'WAS_TRANSFER_COIN',
}

export interface ImOrderDetailType {
  /** 订单 id */
  id: string
  /** 订单创建时间 */
  createdTime: number
  /** 币对名称 */
  coinName: string
  /** 买家 id */
  buyerUid: string
  /** 卖家 id */
  sellerUid: string
  /** 价格 */
  price: number
  /** 数量 */
  number: number
  /** 总价值 */
  totalPrice: number
  /** 站内站外 */
  dealTypeCd: string
  /** 法币英文名称 */
  currencyEnName: string
  /** 法币符号 */
  currencySymbol: string
  /** 群组 id */
  tid: string
  /** 是否是申诉人 */
  isAppealer: boolean
  /** 是否是胜诉人 */
  isAppealWinner: boolean
}

export interface ImSystemNotificationOrderStatusType {
  /** 订单标题 */
  title: string
  /** 订单内容 */
  text: string
  /** 订单副标题 */
  subText: string
  /** 是否是链接 */
  hasLink: boolean
  /** 是否有副标题 */
  hasSub: boolean
  /** 链接 */
  link: string
  /** 副链接 */
  subLink: string
  /** 是否有回调方法 */
  hasCallBack: boolean
  /** 是否有副标题回调方法 */
  hasSubCallBack: boolean
}

interface ImOrderStatusProps {
  /** 订单 id */
  orderNumber: string
  /** 是否是申诉人 */
  isAppealer?: boolean
  /** 是否胜诉 */
  isAppealWinner?: boolean
  /** 站内站外 */
  dealTypeCd: string
}

const routerList = (orderNumber: string, dealTypeCd?: string) => {
  return {
    toDetails: getC2cOrderDetailPageRoutePath(orderNumber),
    toRecord:
      dealTypeCd === ImOrderDetailDealType.INSIDE
        ? getAssetsHistoryPageRoutePath(AssetsRouteEnum.c2c)
        : getAssetsHistoryPageRoutePath(AssetsRouteEnum.coins),
  }
}

export const OrderDetailDefaultValue = {
  type: 'orderDetail',
  body: '',
  from: '',
  fromNick: '',
  scene: '',
  status: '',
  target: '',
  time: 0,
  to: '',
  idServer: '',
}

/** 订单状态默认值 */
const orderDetailDefaultOptions = {
  title: '',
  text: '',
  subText: '',
  hasLink: false,
  hasSub: false,
  link: '',
  subLink: '',
  hasCallBack: false,
  hasSubCallBack: false,
}

/** 通用订单状态 */
export const ImSystemCommonStatus = ({ orderNumber, isAppealer, isAppealWinner }: ImOrderStatusProps) => {
  return {
    WAS_RECEIVE_COIN: {
      ...orderDetailDefaultOptions,
      title: t`features_c2c_im_common_aw5lsjznneg-but0cyevk`,
      text: `${t`features_c2c_footer_index_2225101635`} ${orderNumber} ${t`features_c2c_im_common_p30kfl9l9ubdn-hlwbxlj`}`,
    },
    WAS_CANCEL: {
      ...orderDetailDefaultOptions,
      title: t`features_c2c_order_detail_canceled_vx8xgivhlqjjnw6ks6vw_`,
      text: `${t`features_c2c_footer_index_2225101635`} ${orderNumber} ${t`features_c2c_im_common_xwue4cm5l0u-ug9pm5to2`}`,
    },
    CANCEL__APPEALING: {
      ...orderDetailDefaultOptions,
      title: t`features_c2c_order_detail_appealing__m9ygir2toseh72wmui_5`,
      text: isAppealer
        ? t`features_c2c_im_common_ezh_ps5nvmpitv_pfmda8`
        : t`features_c2c_im_common_dakzawrjxhrgqgu8jobbo`,
    },
    NOT_CANCEL__APPEALING: {
      ...orderDetailDefaultOptions,
      title: t`features_c2c_order_detail_appealing__m9ygir2toseh72wmui_5`,
      text: isAppealer
        ? t`features_c2c_im_common_ezh_ps5nvmpitv_pfmda8`
        : t`features_c2c_im_common_dakzawrjxhrgqgu8jobbo`,
    },
    NOT_CANCEL__APPEAL_FINISH: {
      ...orderDetailDefaultOptions,
      title: isAppealWinner
        ? t`constants_c2c_order_dgjannjiih3hqkr0vcgh7`
        : t`constants_c2c_order_uocpa5vduwto3b07iwjjl`,
      text: t`features_c2c_im_common_bhhecb48yweozlzhxnn9o`,
    },
    CANCEL__APPEAL_FINISH: {
      ...orderDetailDefaultOptions,
      title: isAppealWinner
        ? t`constants_c2c_order_dgjannjiih3hqkr0vcgh7`
        : t`constants_c2c_order_uocpa5vduwto3b07iwjjl`,
      text: t`features_c2c_im_common_bhhecb48yweozlzhxnn9o`,
    },
  }
}

/** 买家订单状态 */
export const ImBuyerStatus = ({ orderNumber, isAppealer, isAppealWinner, dealTypeCd }: ImOrderStatusProps) => {
  const router = routerList(orderNumber, dealTypeCd)
  return {
    CREATED: {
      ...orderDetailDefaultOptions,
      title: t`features_c2c_im_common_yjnfxfvzfj_1niyj2zu4r`,
      text: t`constants_c2c_order_q-npvv53i1t_ynjhffdje`,
      hasLink: true,
      link: router.toDetails,
    },
    WAS_PAYED: {
      ...orderDetailDefaultOptions,
      title: t`features_c2c_im_common_nm9vwnqx0kudllaeam09p`,
      text: t`features_trade_future_settings_margin_index_650`,
      hasLink: true,
      link: router.toDetails,
    },
    WAS_COLLECTED: {
      ...orderDetailDefaultOptions,
      title: t`features_c2c_im_common_ec0iyep6uhrs6ozyynkpf`,
      text: t`features_trade_future_settings_margin_index_650`,
      hasLink: true,
      link: router.toDetails,
    },
    WAS_TRANSFER_COIN: {
      ...orderDetailDefaultOptions,
      title: t`features_c2c_im_common_kay6lbgk3xttuc9pmpzzz`,
      text: t`features_c2c_order_detail_common_mdz252vlluu92gfeweklw`,
      subText: t`features_c2c_im_common_fd1eme_ufbdanazh4gm9e`,
      hasLink: true,
      link: router.toRecord,
      subLink: getC2cOrderDetailPageRoutePath(orderNumber, true),
      hasSub: true,
      // hasSubCallBack: true,
    },
    ...ImSystemCommonStatus({ orderNumber, isAppealer, isAppealWinner, dealTypeCd }),
  }
}

/** 卖家订单状态 */
export const ImSellerStatus = ({ orderNumber, isAppealer, isAppealWinner, dealTypeCd }: ImOrderStatusProps) => {
  const router = routerList(orderNumber)
  return {
    CREATED: {
      ...orderDetailDefaultOptions,
      title: t`features_c2c_im_common_qfuxzy3a-kvbfezlrsf1b`,
      text: t`features_c2c_im_common_wpya0f4einnm-jotqgqew`,
    },
    WAS_PAYED: {
      ...orderDetailDefaultOptions,
      title: t`features_c2c_im_common_gkgkgooyyg3nrv4wvx_-n`,
      text: t`features_c2c_order_detail_await_pay_bppixtv6t46soldcaoqb1`,
      link: getC2cOrderDetailPageRoutePath(orderNumber, true),
      hasLink: true,
      // hasCallBack: true,
    },
    WAS_COLLECTED: {
      ...orderDetailDefaultOptions,
      title: t`features_c2c_im_common_tjtw0p3v4xetqilvqsyed`,
      text: t`constants_c2c_order_hjpf8esfjmwsunjytvc6b`,
      hasLink: true,
      link: router.toDetails,
    },
    WAS_TRANSFER_COIN: {
      ...orderDetailDefaultOptions,
      title: t`features_c2c_im_common_za78alu6ac4esae5zjl1l`,
      text: t`features_c2c_im_common_uqckq1uiqrq0rmhivsmpw`,
    },
    ...ImSystemCommonStatus({ orderNumber, isAppealer, isAppealWinner, dealTypeCd }),
  }
}

/** 处理聊天时间 判断是否是今年&今天 进行格式化 */
export function ImFormattedTime(time: number | string) {
  if (!time) return
  const today = dayjs(time).isToday()
  const notThisYear = Number(time) < dayjs().startOf('year').valueOf()
  return dayjs(time).format(today ? 'HH:mm' : notThisYear ? 'YYYY-MM-DD HH:mm' : 'MM-DD HH:mm')
}
