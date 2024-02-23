/**
 * 首页 - 总资产组件
 */
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import { useEffect } from 'react'
import { useUpdateEffect } from 'ahooks'
import { useAssetsStore } from '@/store/assets/spot'
import { getAssetsOverview } from '@/apis/assets/common'
import { rateFilterFutures } from '@/helper/assets/spot'
import { AssetsOverviewResp } from '@/typings/api/assets/assets'
import { useGetWsAssets } from '@/hooks/features/assets/spot'
import { CommonDigital } from '@/components/common-digital'
import styles from '../common.module.css'

function UserTotalAssets() {
  useGetWsAssets()
  const { assetsModule } = useAssetsStore()

  /**
   * 获取总资产
   * @returns 换算后的总资产
   */
  const onGetTotal = () => {
    const assetsInfo: AssetsOverviewResp = assetsModule.assetsData
    const total = rateFilterFutures({ amount: assetsInfo.totalAmount || '', symbol: assetsInfo.symbol || '' })
    return total
  }

  /**
   * 获取总资产
   */
  const onLoadAssets = async () => {
    const res = await getAssetsOverview({})
    const { isOk, data } = res || {}
    if (!isOk || !data) {
      return
    }

    assetsModule.updateAssetsModule({ assetsData: data })
  }

  useEffect(() => {
    onLoadAssets()
  }, [])

  useUpdateEffect(() => {}, [assetsModule.encryption])
  useUpdateEffect(() => {}, [assetsModule.assetsData, assetsModule.coinRate])

  return (
    <div className={styles['user-total-assets']}>
      <span className="title">{t`features_home_components_header_login_info_index_510102`}</span>
      <CommonDigital content={onGetTotal()} isEncrypt />

      <Icon
        name={assetsModule.encryption ? 'eyes_close' : 'eyes_open'}
        hasTheme
        className="icon"
        onClick={(e: any) => {
          e.stopPropagation()
          assetsModule.updateEncryption(!assetsModule.encryption)
        }}
      />
    </div>
  )
}

export { UserTotalAssets }
