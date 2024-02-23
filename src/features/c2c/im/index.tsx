import { useEffect, useMemo, useRef, useState } from 'react'
import { useGetState, useRequest, useSize, useUnmount } from 'ahooks'
import { useCopyToClipboard } from 'react-use'
import { Image, Loading, Dialog, Input, Uploader, UploaderValueItem, Toast, Button } from 'react-vant'
import { t } from '@lingui/macro'
import { CellMeasurer, CellMeasurerCache, List, AutoSizer } from 'react-virtualized/dist/commonjs'
import { getAllStorage, setAllStorage } from '@/helper/cache'
import { IC2cOrderDetail } from '@/typings/api/c2c/order'
import { c2cSdkAppId } from '@/helper/env'
import {
  ImSystemNotificationOrderStatusType,
  ImBuyerStatus,
  ImSellerStatus,
  ImFormattedTime,
  // ImSettingsType,
  ImMessageTypeEnum,
  ImMsgTypeEnum,
  ImOrderDetailDealType,
  ImImageWidthAndHeightEnum,
  OrderDetailDefaultValue,
  LimitSize,
  // ImOrderOperateEnum,
  // ChatDisabledStatusEnum,
} from '@/features/c2c/im/common'
import { OnlyOnePopup } from '@/components/only-one-overlay'
import { ConfirmReceivedModal } from '@/features/c2c/order/detail/paid'
// import { showBuyerConfirmTransferred } from '@/features/c2c/order/detail/transferred'
import { baseUserStore, useUserStore } from '@/store/user'
// import useLongPress from '@/features/c2c/im/long-press'
import FullScreenLoading from '@/features/user/components/full-screen-loading'
import { getTeamId } from '@/apis/c2c/im'
import Icon from '@/components/icon'
import { link } from '@/helper/link'
import request from '@/plugins/request'
import styles from './index.module.css'
import {
  initC2CIm,
  sendImageMessage,
  sendTextMessage,
  bindEvents,
  queryHistoryMessages,
  destroyIm,
  getCurrentUserId,
} from '../im-sdk'
import { ImListType } from '../im-sdk/types'

function CTcIm({ orderDetails }: { orderDetails: IC2cOrderDetail }) {
  const [imList, setImList, getImList] = useGetState<Array<ImListType>>([])
  const [sendMessageText, setSendMessageText] = useState<string>('')
  const [confirmVisible, setConfirmVisible] = useState(false)

  // const uploaderImage = useRef<string>('')

  /** 聊天窗口 Dom */
  const chatBoxRef = useRef<HTMLDivElement>(null)
  const size = useSize(chatBoxRef)
  const controlRef = useRef<boolean>(true)
  /** 虚拟列表 Dom */
  const chatWindowRef = useRef<any>(null)
  /** 最后的发送时间 */
  const lastMsg = useRef<ImListType>()
  /** 是否是第一次请求历史数据 */
  const isFirstGetHistory = useRef<boolean>(true)
  /** 滚动到第几条消息 */
  const rowIndex = useRef<number>(0)
  /** 历史消息条数 */
  const historyListLength = useRef<number>(0)
  /** tid */
  const orderTid = useRef<string>('')

  const { userInfo } = useUserStore()
  const selfUid = userInfo.uid

  const [state, copyToClipboard] = useCopyToClipboard()

  // const isChatDisabled =
  //   orderDetails?.statusCd === ChatDisabledStatusEnum.wasReceiveCoin ||
  //   orderDetails?.statusCd === ChatDisabledStatusEnum.wasCancel ||
  //   orderDetails?.statusCd === ChatDisabledStatusEnum.notCancelAppealFinish ||
  //   orderDetails?.statusCd === ChatDisabledStatusEnum.cancelAppealFinish

  const cache = useMemo(() => {
    return new CellMeasurerCache({
      defaultHeight: 109,
      fixedWidth: true,
    })
  }, [])

  // const onLongPress = (event, custom) => {
  //   console.log(custom)
  // }

  // const defaultOptions = {
  //   shouldPreventDefault: true,
  //   delay: 500,
  // }

  // const longPress = useLongPress({ onLongPress, options: defaultOptions })

  const handleCopy = () => {
    copyToClipboard(orderDetails?.id)
    state.error
      ? Toast({ message: t`user.secret_key_02`, position: 'top' })
      : Toast({ message: t`user.secret_key_01`, position: 'top' })
  }

  const rowRenderer = ({ index, key, parent, style }) => {
    const data = imList && imList[index]
    let orderStatus: ImSystemNotificationOrderStatusType
    /** 判断买卖方 */
    const isBuyer = selfUid === orderDetails?.buyerUid

    const dataName = data?.fromNick || data?.from || getCurrentUserId() || ''
    const buyerNickname =
      orderDetails?.buyerMerNickName || orderDetails?.buyerUserName || orderDetails?.buyerUid || dataName
    const sellerNickname =
      orderDetails?.sellerMerNickName || orderDetails?.sellerUserName || orderDetails?.sellerUid || dataName

    const rivalNickname = isBuyer ? sellerNickname : buyerNickname

    /** 处理自定义消息 */
    if (data?.type === ImMessageTypeEnum.custom) {
      const statusOptions = {
        orderNumber: orderDetails?.id,
        isAppealer: orderDetails?.isAppealer,
        isAppealWinner: orderDetails?.isAppealWinner,
        dealTypeCd: orderDetails?.dealTypeCd,
      }
      /** 根据订单状态拉去对应的文案与链接 */
      const buyOrderStatus = ImBuyerStatus(statusOptions)
      const sellOrderStatus = ImSellerStatus(statusOptions)

      orderStatus = isBuyer
        ? buyOrderStatus[data?.attach?.orderStatus as string]
        : sellOrderStatus[data?.attach?.orderStatus as string]
    }
    return (
      <CellMeasurer cache={cache} columnIndex={0} key={key} parent={parent} rowIndex={index}>
        {({ registerChild }) => (
          <div ref={registerChild} style={style}>
            {data?.type !== ImMessageTypeEnum.notification && (
              <>
                {data?.type === ImMessageTypeEnum.orderDetail && (
                  <>
                    <div className="date">
                      <label>{ImFormattedTime(orderDetails?.createdTime)}</label>
                    </div>

                    <div className={`order container ${styles['c2c-im-order']}`}>
                      <div className="order-wrap">
                        <div className="header">
                          <label className={`buy-or-sell ${orderDetails?.buyerUid === selfUid ? 'buy' : 'sell'}`}>
                            {orderDetails?.buyerUid === selfUid
                              ? t`features_kyc_index_standards_5101189`
                              : t`features_kyc_index_standards_5101190`}
                          </label>

                          <label className="symbol">{orderDetails?.coinName}</label>

                          {orderDetails?.dealTypeCd && (
                            <span
                              className={`source ${
                                orderDetails?.dealTypeCd === ImOrderDetailDealType.INSIDE
                                  ? 'station'
                                  : 'outside-station'
                              }`}
                            >
                              {orderDetails?.dealTypeCd === ImOrderDetailDealType.INSIDE
                                ? t`features_trade_future_c2c_25101574`
                                : t`features_trade_future_c2c_25101575`}
                            </span>
                          )}

                          <div className="order-number">
                            <label>{orderDetails?.id}</label>
                            <Icon name="copy" hasTheme onClick={handleCopy} />
                          </div>
                        </div>
                        <div className="main">
                          <div className="price">
                            <label className="text">{t`future.funding-history.index.table-type.price`}</label>
                            <label className="number">
                              {orderDetails?.currencySymbol} {orderDetails?.price}
                            </label>
                          </div>

                          <div className="quantity">
                            <label className="text">{t`features/trade/spot/price-input-0`}</label>
                            <label className="number">
                              {orderDetails?.number} {orderDetails?.coinName}
                            </label>
                          </div>

                          <div className="sum">
                            <label className="text">{t`features_c2c_trade_trade_form_22225101641`}</label>
                            <label className="number">
                              {orderDetails?.currencySymbol} {orderDetails?.totalPrice}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {data?.type === ImMessageTypeEnum.custom && orderStatus ? (
                  <div className={`order-status-info container ${styles['c2c-order-status-info']}`}>
                    {data?.attach?.msgType === ImMsgTypeEnum.remind ? (
                      <>
                        {!isBuyer && (
                          <div className="system-reminder-wrap">
                            <p>{t`features_c2c_im_index_s0ykt_dt1g6k3ifdmuepo`}</p>
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <div className="order-status-info-wrap">
                          <div className="tips-text">
                            <p>{orderStatus?.title}</p>
                          </div>

                          {orderStatus?.hasLink || orderStatus?.hasCallBack ? (
                            <div className="link">
                              <div
                                className="text"
                                // onClick={() =>
                                //   orderStatus?.hasCallBack && data.attach?.orderStatus === ImOrderOperateEnum.wasPayed
                                //     ? setConfirmVisible(true)
                                //     : link(orderStatus?.link)
                                // }
                                onClick={() => link(orderStatus?.link)}
                              >
                                <label>{orderStatus?.text}</label>
                                <Icon name="next_arrow" />
                              </div>

                              {orderStatus?.hasSub && (
                                <>
                                  <div
                                    className="text"
                                    // onClick={() =>
                                    //   orderStatus?.hasSubCallBack &&
                                    //   data.attach?.orderStatus === ImOrderOperateEnum.wasTransferCoin
                                    //     ? showBuyerConfirmTransferred(orderDetails)
                                    //     : null
                                    // }
                                    onClick={() => link(orderStatus?.subLink)}
                                  >
                                    <label>{orderStatus?.subText}</label>
                                    <Icon name="next_arrow" />
                                  </div>
                                </>
                              )}
                            </div>
                          ) : (
                            <div className="text">
                              <label>{orderStatus?.text}</label>
                            </div>
                          )}
                        </div>

                        <div className="time-left">
                          <label>{ImFormattedTime(data?.time)}</label>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <>
                    {data?.from !== getCurrentUserId() &&
                      (data?.type === ImMessageTypeEnum.text || data?.type === ImMessageTypeEnum.image) && (
                        <div className={`text-message ${styles['c2c-im-other-side-text-message']}`}>
                          <div className="text-message-wrap">
                            <div className="avatar">
                              <div className="image">
                                {rivalNickname ? (
                                  <span>{rivalNickname?.charAt(0)}</span>
                                ) : (
                                  <Icon name="user_head_hover" />
                                )}
                              </div>
                            </div>

                            <div className="right-container">
                              <div className="name">
                                <label>{rivalNickname}</label>
                              </div>

                              {data?.type === ImMessageTypeEnum.text && (
                                <div className="content other-side-message">
                                  <p>{data?.body}</p>
                                </div>
                              )}

                              {data?.type === ImMessageTypeEnum.image && (
                                <div className="c2c-text-message-image">
                                  <Image
                                    loadingIcon={<Loading type="spinner" />}
                                    src={data?.attach?.url}
                                    width={ImImageWidthAndHeightEnum.width}
                                    height={
                                      (data?.attach?.h as number) > ImImageWidthAndHeightEnum.height
                                        ? ImImageWidthAndHeightEnum.height
                                        : data?.attach?.h
                                    }
                                    fit="cover"
                                    onClick={() =>
                                      Dialog.show({
                                        className: styles['c2c-im-text-message-image'],
                                        closeable: false,
                                        footer: null,
                                        showConfirmButton: false,
                                        closeOnClickOverlay: true,
                                        message: (
                                          <Image loadingIcon={<Loading type="spinner" />} src={data?.attach?.url} />
                                        ),
                                      })
                                    }
                                  />
                                </div>
                              )}

                              <div className="time-left">
                                <label>{ImFormattedTime(data?.time)}</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                    {data?.from === getCurrentUserId() && (
                      <div className={`text-message ${styles['c2c-im-my-text-message']}`}>
                        <div className="text-message-wrap">
                          <div
                            className="content"
                            // onTouchStart={e => longPress.onTouchStart(e, data) as any}
                            // onTouchEnd={e => longPress.onTouchEnd(e) as any}
                          >
                            {data?.type === ImMessageTypeEnum.text && (
                              <div className="my-message">
                                <p>{data?.body}</p>
                              </div>
                            )}

                            {data?.type === ImMessageTypeEnum.image && (
                              <div className="c2c-text-message-image">
                                <Image
                                  loadingIcon={<Loading type="spinner" />}
                                  src={data?.attach?.url}
                                  width={ImImageWidthAndHeightEnum.width}
                                  height={
                                    (data?.attach?.h as number) > ImImageWidthAndHeightEnum.height
                                      ? ImImageWidthAndHeightEnum.height
                                      : data?.attach?.h
                                  }
                                  fit="cover"
                                  onClick={() =>
                                    Dialog.show({
                                      className: styles['c2c-im-text-message-image'],
                                      closeable: false,
                                      footer: null,
                                      showConfirmButton: false,
                                      closeOnClickOverlay: true,
                                      message: (
                                        <Image loadingIcon={<Loading type="spinner" />} src={data?.attach?.url} />
                                      ),
                                    })
                                  }
                                />
                              </div>
                            )}

                            <div className="time-right">
                              <label>{ImFormattedTime(data?.time)}</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        )}
      </CellMeasurer>
    )
  }

  /** 处理历史数据拼接 */
  const handleHistoryList = (list: Array<ImListType>, msgs: ImListType, index: number) => {
    /** 拼接历史数据前清掉缓存 */
    cache.clearAll()

    /** 滚动到最新加入列表数据的末尾行数 */
    rowIndex.current = index
    lastMsg.current = msgs

    setImList([...list])
    controlRef.current = true
  }

  const getHistoryMsgsList = async () => {
    const preMessage = imList[1]
    const result = await queryHistoryMessages(orderDetails?.id || orderTid.current, preMessage?.originMessage)
    const msgsList: Array<ImListType> = result || []

    historyListLength.current = msgsList.length

    const orderDetail = { ...OrderDetailDefaultValue, orderDetail: orderDetails }

    /** 没有历史数据 */
    if (msgsList.length < 1 && imList.length > 0) {
      return
    }

    /** 将历史数据添加到已存在数据的列表中 */
    if (msgsList.length > 0 && imList.length > 0) {
      /** 去除顶部订单详情 */
      const removeOrderDetailList = [...getImList()].slice(1)
      const list: Array<ImListType> = [orderDetail, ...msgsList, ...removeOrderDetailList]

      handleHistoryList(list, msgsList[0], msgsList.length + 1)
      return
    }

    /** 添加历史数据 */
    if (msgsList.length > 0) {
      const list: Array<ImListType> = [orderDetail, ...msgsList]

      handleHistoryList(list, msgsList[0], list.length)
      return
    }

    /** 设置订单头 */
    setImList([orderDetail])
  }

  /** 初始化 IM */
  const initIM = async () => {
    const initResult = await initC2CIm({
      request,
      getUserInfo: () => {
        const { userInfo: imUserInfo } = baseUserStore.getState()

        return {
          uid: imUserInfo.uid,
          nickname: imUserInfo.nickname,
        }
      },
      appId: c2cSdkAppId,
    })
    if (!initResult) return
    bindEvents({
      tid: orderDetails?.id || orderTid.current,
      onMessages(messages) {
        const list: Array<ImListType> = [...getImList(), ...messages]
        setImList([...list])
      },
    })
    /** 连接 */
    await initResult.login()
    /** 获取历史数据 */
    await getHistoryMsgsList()

    isFirstGetHistory.current = false
  }

  const { run, loading } = useRequest(initIM, { manual: true })

  const getTeamTid = async () => {
    const res = await getTeamId({ orderId: orderDetails?.id })
    if (!res.isOk || !res.data) {
      return
    }

    orderTid.current = res.data
    run()
  }

  const { run: getTid, loading: teamIdLoading } = useRequest(getTeamTid, { manual: true })

  useEffect(() => {
    if (orderDetails?.id) {
      orderDetails?.id ? run() : getTid()
    }
  }, [orderDetails?.id])

  useUnmount(destroyIm)

  useEffect(() => {
    /** 列表更新 滚动到指定位置 */
    if (chatWindowRef.current) {
      chatWindowRef.current?.scrollToRow(rowIndex.current || (imList && imList.length > 0) ? imList.length - 1 : 0)
    }
  }, [imList])

  /** 自定义图片上传 oss */
  // const handleUploader = async (list: Array<UploaderValueItem>) => {
  //   if (list.length > 0) {
  //     const imageList = list.slice(-1)[0]
  //     const file = imageList.file as File
  //     const url = imageList.url as string

  //     if (file.size > LimitSize) {
  //       Toast.info(t`features_user_safety_items_application_form_index_622`)
  //       return
  //     }

  //     const res = await postMemberUpload({ image: url })
  //     if (res.isOk && res.data) {
  //       uploaderImage.current = res.data.url

  //       nimSDK.current?.msg
  //         .sendImageMsg({
  //           scene: 'team',
  //           to: orderDetails?.id,
  //           file,
  //           filePath: url,
  //         })
  //         .then((res: ImListType) => {
  //           console.log('上传成功 ===>', res)

  //           const msglist: Array<ImListType> = [...getImList(), res]
  //           rowIndex.current = msglist.length // 发送消息后页面滚动的条数位置

  //           setImList([...msglist])
  //         })
  //         .cache(err => {
  //           Toast.info(err)
  //         })
  //     }
  //   }
  // }

  const handleSendMessage = () => {
    if (!sendMessageText) return
    sendTextMessage(orderDetails?.id || orderTid.current, sendMessageText)
      .then(res => {
        const msglist: Array<ImListType> = [...getImList(), res]
        /** 发送消息后页面滚动的条数位置 */
        rowIndex.current = msglist.length

        setImList([...msglist])
        setSendMessageText('')
      })
      .catch(err => {
        Toast.info(err)
      })
  }

  /** 回车发送文本消息 */
  const handleIpuntKeyDown = e => {
    if (e.code === 'Enter') handleSendMessage()
  }

  /** 上传并发送图片 */
  const handleUploadImage = async (list: Array<UploaderValueItem>) => {
    const _localStorage = getAllStorage()
    if (list.length > 0) {
      const imageList = list.slice(-1)[0]
      const file = imageList.file as File
      const url = imageList.url as string

      if (file.size > LimitSize) {
        Toast.info(t`features_user_safety_items_application_form_index_622`)
        return
      }
      sendImageMessage(orderDetails?.id || orderTid.current, file)
        .then(res => {
          const msglist: Array<ImListType> = [...getImList(), res]
          /** 发送消息后页面滚动的条数位置 */
          rowIndex.current = msglist.length

          /** 重新获取缓存信息 */
          setAllStorage(_localStorage)
          setImList([...msglist])
        })
        .catch(err => {
          Toast.info(err)
        })
    }
  }

  /** 滚动事件 */
  const onScrollChatList = item => {
    if (!controlRef.current) {
      return
    }

    /** 订单详情高度为 221 */
    if (item.scrollTop < 250 && item.scrollTop > 0) {
      controlRef.current = false
      getHistoryMsgsList()
    }
  }

  return (
    <section className={`c2c-im ${styles.scoped}`}>
      <div className="c2c-im-wrap" ref={chatBoxRef}>
        <div className={`chat-box ${styles['c2c-im-chat-box']}`}>
          <AutoSizer>
            {({ height }) => (
              <List
                ref={chatWindowRef}
                width={(size?.width as number) || 0}
                height={height}
                /** 展现条数 */
                rowCount={imList?.length || 20}
                /** 缓存 */
                deferredMeasurementCache={cache}
                /** 行高 */
                rowHeight={cache.rowHeight}
                /** 渲染dom */
                rowRenderer={rowRenderer}
                /** 滚动监听事件 */
                onScroll={onScrollChatList}
                /** 滚动定位 */
                scrollToIndex={rowIndex.current || imList?.length}
              />
            )}
          </AutoSizer>
        </div>

        <div className={`chat-input-box ${styles['c2c-im-chat-input-box']}`}>
          <div className="chat-input-box-wrap">
            <div className="input">
              <Input
                // disabled={isChatDisabled}
                value={sendMessageText}
                placeholder={t`features_c2c_im_index_yrj18foblvvvgaotegq2f`}
                onChange={setSendMessageText}
                onKeyDown={handleIpuntKeyDown}
                suffix={
                  <div className="upload-image">
                    <Uploader
                      onChange={handleUploadImage}
                      previewImage={false}
                      // disabled={isChatDisabled}
                    >
                      <Icon name="c2c_image" hasTheme />
                    </Uploader>
                  </div>
                }
              />
            </div>
            <div className="btn">
              <Button type="primary" onClick={handleSendMessage}>
                {t`user.field.reuse_31`}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <FullScreenLoading isShow={loading || teamIdLoading} />

      <OnlyOnePopup destroyOnClose position="bottom" visible={confirmVisible}>
        <ConfirmReceivedModal order={orderDetails} onVisibleChange={setConfirmVisible} />
      </OnlyOnePopup>
    </section>
  )
}

export default CTcIm
