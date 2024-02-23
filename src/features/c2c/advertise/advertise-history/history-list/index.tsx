/**
 * 广告记录 - 列表
 */
import { getAdvertAppealStatus, getAdvertProgressStatus } from '@/apis/c2c/advertise'
import CommonList from '@/components/common-list/list'
import {
  AdvertisingDirectionTypeEnum,
  AdvertStatusTypeEnum,
  getHistoryStatusTypeName,
  HistoryStatusTypeEnum,
  HistoryTabTypeEnum,
  HistoryVersionTypeEnum,
} from '@/constants/c2c/advertise'
import { dateFormatEnum } from '@/constants/dateFomat'
import { HintModal } from '@/features/assets/futures/common/hint-modal'
import { onBlindAdvertise, onDelAdvertise } from '@/helper/c2c/advertise'
import { formatDate } from '@/helper/date'
import { formatCurrency } from '@/helper/decimal'
import { link } from '@/helper/link'
import { useC2CAdvertiseStore } from '@/store/c2c/advertise'
import { IAdvertList } from '@/typings/api/c2c/advertise/post-advertise'
import { t } from '@lingui/macro'
import { Toast } from 'react-vant'
import { useState } from 'react'
import { requestWithLoading } from '@/helper/order'
import { MainnetInfo } from '../../common/mainnet-info'
import { PaymentTypeInfo } from '../../common/payment-type-info'
import { RestockModal } from '../../common/restock-modal'
import styles from './index.module.css'

interface HistoryListProps {
  finished: boolean
  list: IAdvertList[]
  onRefresh: () => void
  onLoad: (e?: boolean) => Promise<void>
}

function HistoryList(props: HistoryListProps) {
  const {
    advertiseHistory: { activeTab, version },
  } = useC2CAdvertiseStore()
  const { finished, list, onRefresh, onLoad } = props || {}
  const [restockVisible, setRestockVisible] = useState(false)
  const [hintVisible, setHintVisible] = useState(false)
  const [hintProps, setHintProps] = useState<any>({})
  const [advertId, setAdvertId] = useState('')

  const onGetStatusColor = (status: string) => {
    let className = ''
    switch (status) {
      case HistoryStatusTypeEnum.normal:
        className = 'bg-success_color_special_02 text-success_color'
        break
      case HistoryStatusTypeEnum.trade:
        className = 'bg-brand_color_special_02 text-brand_color'
        break
      case HistoryStatusTypeEnum.resting:
        className = 'bg-card_bg_color_02 text-text_color_03'
        break
      default:
        break
    }

    return className
  }

  /**
   * 删除
   */
  const onDel = async (params: IAdvertList) => {
    const res = await getAdvertAppealStatus({ advertId: params?.advertId })
    const { isOk, data } = res || {}

    if (!isOk) {
      return
    }

    if (data?.hasOrder) {
      setHintProps({
        showIcon: true,
        content: t`features_c2c_advertise_advertise_history_history_list_index_nwgl5a8nko1oiyvudngyb`,
        commitText: t`features_message_center_index_5101365`,
        onCommit: () => setHintVisible(false),
      })

      setHintVisible(true)
      return
    }

    setHintProps({
      showIcon: true,
      content: (
        <div className="flex justify-center">{t`features_c2c_advertise_advertise_history_history_list_index_hq__4lmudjtjfwzz3j-xp`}</div>
      ),
      commitText: t`user.field.reuse_17`,
      cancelText: t`assets.financial-record.cancel`,
      onClose: () => setHintVisible(false),
      onCommit: async () => {
        if (await onDelAdvertise(params.advertId)) {
          Toast.info(t`features_agent_agent_manage_index_5101554`)
          setHintVisible(false)
          onLoad(true)
        }
      },
    })

    setHintVisible(true)
  }

  /**
   * 下架广告
   */
  const onRemoveAds = async (params: IAdvertList) => {
    const res = await getAdvertProgressStatus({ advertId: params?.advertId })
    const { isOk, data } = res || {}
    if (!isOk || !data) {
      return
    }

    if (data?.hasOrder) {
      setHintProps({
        showIcon: true,
        content: t`features_c2c_advertise_advertise_history_history_list_index_h7u9l-a001nrvuy7ly3mv`,
        commitText: t`features_message_center_index_5101365`,
        onCommit: () => setHintVisible(false),
      })

      setHintVisible(true)
      return
    }

    setHintProps({
      title: t`features_c2c_advertise_advertise_history_history_list_index_qd3k0isuykow24kvajmrm`,
      content: (
        <div className="flex justify-center">{t`features_c2c_advertise_advertise_history_history_list_index_le7wqyigyiwxvikyw7qa9`}</div>
      ),
      commitText: t`user.field.reuse_17`,
      cancelText: t`assets.financial-record.cancel`,
      onClose: () => setHintVisible(false),
      onCommit: async () => {
        if (await onBlindAdvertise(params.advertId)) {
          Toast.info(t`features_c2c_advertise_advertise_history_history_list_index_jeeesf8luevlggwhbcnua`)
          setHintVisible(false)
          onLoad(true)
        }
      },
    })

    setHintVisible(true)
  }

  return (
    <>
      <CommonList
        refreshing
        finished={finished}
        onRefreshing={onRefresh}
        onLoadMore={onLoad}
        showEmpty={list.length === 0}
        listChildren={list.map((item, index: number) => {
          const {
            areaName = '--',
            coinName = '--',
            quantity = '--',
            minAmount = '0',
            maxAmount = '0',
            price = '--',
            totalOrderAmount = '--',
            orderCount = '--',
            customerCnt = '--',
            createTime = '',
            removalTime = '',
            mainchainAddrs = [],
            payments = [],
            advertDirectCd = '',
            currencySymbol = '',
            advertNewStatus = '',
            grey,
            statusCd,
            newPayments = [],
          } = item || {}
          const color = advertDirectCd === AdvertisingDirectionTypeEnum.buy ? 'var(--gr-05)' : 'var(--rd-05)'

          const normalList = [
            {
              label: t({
                id: 'features_c2c_advertise_advertise_history_history_list_index__fc40moskhjg7ebhboitb',
                values: { 0: areaName },
              }),
              value: `${currencySymbol} ${formatCurrency(price)}`,
            },
            {
              label: t`features_trade_future_c2c_25101577`,
              value: `${formatCurrency(minAmount)} - ${formatCurrency(maxAmount)} ${coinName}`,
            },
            {
              label: t`features/trade/spot/price-input-0`,
              value: `${formatCurrency(quantity)} ${coinName}`,
              isHide: activeTab === HistoryTabTypeEnum.off,
            },
          ]

          const detailsList = [
            {
              label: t`features_c2c_advertise_advertise_history_history_list_index_yu157mewrwbjhrzxxvo7v`,
              value: `${formatCurrency(totalOrderAmount)} ${coinName}`,
            },
            {
              label: t`features_c2c_advertise_advertise_history_history_list_index_uzumpnuwq0o0-obnpopcw`,
              value: formatCurrency(orderCount),
            },
            {
              label: t`features_c2c_advertise_advertise_history_history_list_index_uwloa3sb5t3xljfkhobsi`,
              value: formatCurrency(customerCnt),
            },
            {
              label: t`features_c2c_advertise_advertise_history_history_list_index_otdc-vsfhwtkjtzw2nngm`,
              value: formatDate(createTime, dateFormatEnum.minuteSlash),
            },
            {
              label: t`features_c2c_advertise_advertise_history_history_list_index_t_vpbzahwz7jujwprbe1e`,
              value: formatDate(removalTime, dateFormatEnum.minuteSlash),
            },
          ]

          return (
            <div key={index} className={styles['history-list-root']}>
              <div
                className="flex flex-col"
                onClick={e => {
                  e.stopPropagation()
                  link(`/c2c/adv/details/${item?.advertId}`)
                }}
              >
                <div className="header">
                  <div className="coin-info">
                    <div className="line" style={{ backgroundColor: color }} />
                    <span style={{ color }}>
                      {coinName}/{areaName}
                    </span>

                    {activeTab === HistoryTabTypeEnum.on && (
                      <div className={`status ${onGetStatusColor(advertNewStatus)}`}>
                        <span className="status-text">{getHistoryStatusTypeName(advertNewStatus)}</span>
                      </div>
                    )}
                  </div>

                  {activeTab === HistoryTabTypeEnum.on ? (
                    <span
                      className="header-operate"
                      onClick={e => {
                        e.stopPropagation()
                        requestWithLoading(onRemoveAds(item), 0)
                      }}
                    >
                      {t`features_c2c_advertise_advertise_history_history_list_index_qd3k0isuykow24kvajmrm`}
                    </span>
                  ) : (
                    <div className="header-operate">
                      <span
                        className={`${grey && 'text-text_color_03'}`}
                        onClick={e => {
                          e.stopPropagation()

                          if (grey) return
                          setAdvertId(item?.advertId)
                          setRestockVisible(true)
                        }}
                      >
                        {t`features_c2c_advertise_common_restock_modal_index_j7fvxqbeuy1rgox-eujet`}
                      </span>
                      <span className="operate-line">|</span>
                      <span
                        className={`${statusCd === AdvertStatusTypeEnum.withdrawing && 'text-text_color_03'}`}
                        onClick={e => {
                          if (statusCd === AdvertStatusTypeEnum.withdrawing) return
                          e.stopPropagation()
                          requestWithLoading(onDel(item), 0)
                        }}
                      >
                        {t`common.delete`}
                      </span>
                    </div>
                  )}
                </div>

                <div className="normal-info">
                  {normalList.map((normalItem, i: number) => {
                    if (normalItem?.isHide) return

                    return (
                      <div className="info-item" key={i}>
                        <span className="info-label">{normalItem.label}</span>
                        <span className="info-value">{normalItem.value}</span>
                      </div>
                    )
                  })}
                </div>

                {version === HistoryVersionTypeEnum.details && (
                  <div className="normal-info mt-2">
                    {detailsList.map((detailsItem, i: number) => {
                      return (
                        <div className="info-item" key={i}>
                          <span className="info-label">{detailsItem.label}</span>
                          <span className="info-value">{detailsItem.value}</span>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>

              <div className="bottom">
                <PaymentTypeInfo paymentList={newPayments} placement={'bottom-start'} />
                <MainnetInfo list={mainchainAddrs} />
              </div>
            </div>
          )
        })}
      />

      {restockVisible && (
        <RestockModal
          advertId={advertId}
          visible={restockVisible}
          onClose={() => setRestockVisible(false)}
          onCommit={() => {
            setRestockVisible(false)
            onLoad(true)
          }}
        />
      )}
      {hintVisible && <HintModal visible={hintVisible} {...hintProps} />}
    </>
  )
}

export { HistoryList }
