/**
 * 广告单详情
 */
import { t } from '@lingui/macro'
import { useEffect, useState } from 'react'
import { useMount } from 'ahooks'
import Icon from '@/components/icon'
import NavBar from '@/components/navbar'
import { Popover, Toast } from 'react-vant'
import { getAdvertAppealStatus, getAdvertDetail, getAdvertProgressStatus } from '@/apis/c2c/advertise'
import { AdvertStatusTypeEnum, HistoryVersionTypeEnum } from '@/constants/c2c/advertise'
import { HintModal } from '@/features/assets/futures/common/hint-modal'
import { usePageContext } from '@/hooks/use-page-context'
import { useC2CAdvertiseStore } from '@/store/c2c/advertise'
import { onBlindAdvertise, onDelAdvertise } from '@/helper/c2c/advertise'
import { AdvertDetailResp } from '@/typings/api/c2c/advertise/post-advertise'
import { requestWithLoading } from '@/helper/order'
import { AdvertiseContent } from './advertise-content'
import { HistoricalOrder } from './historical-order'
import { RemarkInfo } from './remark-info'
import { TradingInfo } from './trading-info'
import { AdvertiseContentDetails } from './advertise-content-details'
import { RestockModal } from '../common/restock-modal'
import styles from './index.module.css'

function AdvertiseDetailsLayout() {
  const pageContext = usePageContext()
  const {
    advertiseHistory: { version },
    advertiseDetails: { statusCd = '', advertId = '', grey, isOnShelves, welcomeInfoMessage, remark },
    updateAdvertiseDetails,
    fetchAdvertiseEnums,
  } = useC2CAdvertiseStore()
  const [hintVisible, setHintVisible] = useState(false) // 是否展示提示弹窗
  const [hintProps, setHintProps] = useState<any>({})
  const [restockVisible, setRestockVisible] = useState(false) // 是否展示重新上架弹窗
  const [moreVisible, setMoreVisible] = useState(false)
  useMount(fetchAdvertiseEnums)

  const moreList = [
    {
      text: t`features_c2c_advertise_common_restock_modal_index_j7fvxqbeuy1rgox-eujet`,
      disabled: grey,
    },
    {
      text: t`features_c2c_advertise_advertise_details_index_nik9tov5w83dmo5prdkyq`,
    },
  ]

  /**
   * 查询广告详情
   */
  const onLoadDetails = async () => {
    const res = await getAdvertDetail({ advertId: pageContext.routeParams.id })
    const { isOk, data } = res || {}
    if (!isOk) {
      return
    }

    updateAdvertiseDetails(data as AdvertDetailResp)
  }

  /**
   * 下架广告
   */
  const onRemoveAdv = async () => {
    const res = await getAdvertProgressStatus({ advertId })
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
        if (await onBlindAdvertise(advertId)) {
          Toast.info(t`features_c2c_advertise_advertise_history_history_list_index_jeeesf8luevlggwhbcnua`)
          setHintVisible(false)
          history.back()
        }
      },
    })
    setHintVisible(true)
  }

  /**
   * 删除
   */
  const onDelAdv = async () => {
    const res = await getAdvertAppealStatus({ advertId })
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
        if (await onDelAdvertise(advertId)) {
          Toast.info(t`features_agent_agent_manage_index_5101554`)
          setHintVisible(false)
          history.back()
        }
      },
    })

    setHintVisible(true)
  }

  useEffect(() => {
    requestWithLoading(onLoadDetails(), 0)
  }, [])

  return (
    <div className={styles['advertise-details-root']}>
      <NavBar
        title={t`features_c2c_advertise_advertise_details_index_yom1wobph6drd-u2esl5b`}
        right={
          statusCd === AdvertStatusTypeEnum.withdrawing ? null : isOnShelves ? (
            <span className="off-btn" onClick={() => requestWithLoading(onRemoveAdv(), 0)}>
              {t`features_c2c_advertise_advertise_history_history_list_index_qd3k0isuykow24kvajmrm`}
            </span>
          ) : (
            <Popover
              placement="bottom-end"
              actions={moreList}
              onSelect={(action, index: number) => {
                if (index === 0) {
                  setRestockVisible(true)
                } else {
                  requestWithLoading(onDelAdv(), 0)
                }
              }}
              reference={<Icon name="c2c_more" hasTheme className="text-xl" />}
            />
          )
        }
      />

      {version === HistoryVersionTypeEnum.normal ? (
        <AdvertiseContent isMore={moreVisible} onChangeMore={(e: boolean) => setMoreVisible(e)} />
      ) : (
        <AdvertiseContentDetails />
      )}

      {!moreVisible && (
        <>
          {version === HistoryVersionTypeEnum.details && (welcomeInfoMessage || remark) && <RemarkInfo />}
          <TradingInfo />
          <HistoricalOrder />
        </>
      )}

      {hintVisible && <HintModal visible={hintVisible} {...hintProps} />}
      {restockVisible && (
        <RestockModal
          advertId={advertId}
          visible={restockVisible}
          onClose={() => setRestockVisible(false)}
          onCommit={() => {
            setRestockVisible(false)
            onLoadDetails()
          }}
        />
      )}
    </div>
  )
}

export { AdvertiseDetailsLayout }
