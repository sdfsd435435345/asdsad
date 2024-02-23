import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import { useC2CCenterStore } from '@/store/c2c/center'
import { oss_svg_image_domain_address } from '@/constants/oss'
import { C2cCenterMerchantEnum } from '@/constants/c2c/center'
import { C2cCenterKyc } from '@/constants/c2c/common'
import { formatDate } from '@/helper/date'
import LazyImage from '@/components/lazy-image'
import styles from './index.module.css'

export default function C2CCenterHeader() {
  const { C2CCenterUser } = useC2CCenterStore()

  /** 处理 kyc 认证* */
  const handleKyc = (id: number) => {
    const kycName = C2cCenterKyc().find(v => v.id === id)
    return kycName?.title || t`features_c2c_order_appeal_index_onotkmcjyszif-40pc_lv`
  }
  return (
    <div className={styles['c2c-center-header-means']}>
      <div className="means-portrait">
        {C2CCenterUser?.avatarPath ? (
          <LazyImage src={C2CCenterUser?.avatarPath} round width={48} height={48} />
        ) : (
          <Icon name="user_head" hasTheme className="c2c-avatar-header" />
        )}
      </div>
      <div className="means-details">
        <div className="means-details-name">
          <div className="truncate">{C2CCenterUser?.nickName || C2CCenterUser?.uid}</div>
          {C2CCenterUser?.isMerchant === C2cCenterMerchantEnum.yes && (
            <LazyImage
              imageType=".png"
              className="means-details-title-image"
              src={`${oss_svg_image_domain_address}user_verified`}
            />
          )}
        </div>
        <div className="means-details-title">
          {C2CCenterUser?.isMerchant === C2cCenterMerchantEnum.yes &&
            `${t`features_trade_future_c2c_25101567`}${t`features_trade_future_c2c_25101568`}`}
        </div>
        <div className="means-details-kyc">{`${t`features_trade_future_c2c_25101570`} ${handleKyc(
          C2CCenterUser?.kycType as number
        )}`}</div>
        <div className="means-details-time">{`${t`features_trade_future_c2c_25101571`} ${
          C2CCenterUser?.registerTime ? formatDate(C2CCenterUser?.registerTime, 'YYYY-MM-DD') : ''
        }`}</div>
      </div>
    </div>
  )
}
