/**
 * 资产 - 暂停服务组件
 */
import { t } from '@lingui/macro'
import { useState, useEffect } from 'react'
import { Button, Toast } from 'react-vant'
import LazyImage, { Type } from '@/components/lazy-image'
import { oss_svg_image_domain_address } from '@/constants/oss'
import { postSettingCoinPush, getCoinPushStatus } from '@/apis/assets/withdraw'
import { requestWithLoading } from '@/helper/order'
import styles from '../common.module.css'

/** 对于已停止的充值或提币服务的展示 */
function StopService({
  hint = t`features_assets_common_stop_service_index_510102`,
  network,
  type,
}: {
  hint?: string
  network: any
  type: number
}) {
  const [remindState, setRemindState] = useState(false)

  /**
   * 设置提醒
   */
  const setRemind = async () => {
    const res = await postSettingCoinPush({
      coinId: network.id,
      type,
      status: 1,
    })

    const { isOk, data } = res || {}
    if (!isOk || !data) return
    if (!data?.isSuccess) {
      Toast.info(t`features_assets_common_stop_service_index_510169`)
      return
    }

    setRemindState(true)
    Toast.info(t`features_assets_common_stop_service_index_510103`)
  }

  /**
   * 获取币种开启充提推送状态
   */
  const onLoadCoinStatus = async () => {
    const res = await getCoinPushStatus({
      coinId: network.id,
      type,
    })

    const { isOk, data } = res || {}
    if (!isOk || !data) return
    setRemindState(data?.isOpen)
  }

  useEffect(() => {
    onLoadCoinStatus()
  }, [network])

  return (
    <div className={styles['stop-service-root']}>
      <div className="top">
        <LazyImage
          src={`${oss_svg_image_domain_address}asset_carry_icon_suspend`}
          imageType={Type.png}
          hasTheme
          width={70}
          height={70}
        />

        <div className="hint">{hint}</div>
      </div>
      <div className="bottom">
        <Button
          className="setting-btn"
          type="primary"
          disabled={remindState}
          block
          onClick={() => requestWithLoading(setRemind(), 0)}
        >
          {remindState
            ? t`features_assets_common_stop_service_index_510105`
            : t`features_assets_common_stop_service_index_510104`}
        </Button>
      </div>
    </div>
  )
}

export default StopService
