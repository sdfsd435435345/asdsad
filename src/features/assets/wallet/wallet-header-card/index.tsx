import Icon from '@/components/icon'
import { Toast } from 'react-vant'
import { useCopyToClipboard } from 'react-use'
import { t } from '@lingui/macro'
import { rateFilterFutures } from '@/helper/assets/spot'
import { useAssetsStore } from '@/store/assets/spot'
import { useUserStore } from '@/store/user'
import { useEffect } from 'react'
import { AssetsOverviewResp } from '@/typings/api/assets/assets'
import { requestWithLoading } from '@/helper/order'
import { onGetAssetsOverview } from '@/helper/assets/overview'
import styles from './index.module.css'

function WalletHeaderCard() {
  const { userInfo, isLogin } = useUserStore()
  const { nickName, uid } = userInfo || {}
  const [state, copyToClipboard] = useCopyToClipboard()
  const handleCopy = (key: number | undefined) => {
    if (!key) return
    copyToClipboard(key.toString())
    state.error ? Toast.fail(t`user.secret_key_02`) : Toast.success(t`user.secret_key_01`)
  }

  const { assetsData, fetchCoinRate } = useAssetsStore().assetsModule

  useEffect(() => {
    isLogin && requestWithLoading(onGetAssetsOverview(), 0)
  }, [isLogin])

  /**
   * 获取总资产
   * @returns 换算后的总资产
   */
  const onGetTotal = () => {
    const assetsInfo: AssetsOverviewResp = assetsData
    const total = rateFilterFutures({ amount: assetsInfo.totalAmount || '', symbol: assetsInfo.symbol || '' })
    return total
  }

  return (
    <div className={styles.scoped}>
      <div className="text-base font-medium">
        <Icon name="default_avatar" className="mr-2 header-brand-logo" />
        <span className="text-base font-semibold">{nickName || t`user.personal_center_01`}</span>
      </div>
      <div>
        <label>{uid || '-'}</label>
        <Icon className="ml-1" name="copy_black" onClick={() => handleCopy(uid)} />
      </div>
      <div className="divider"></div>
      <div className="flex justify-between">
        <div>
          <div className="flex justify-center font-semibold">4642.00</div>
          <div className="flex justify-center text-sm">可售额</div>
        </div>
        <div>
          <div className="flex justify-center font-semibold">0.00</div>
          <div className="flex justify-center text-sm">不售额</div>
        </div>
        <div>
          <div className="flex justify-center font-semibold">358.00</div>
          <div className="flex justify-center text-sm">已上架</div>
        </div>
      </div>
    </div>
  )
}

export default WalletHeaderCard
