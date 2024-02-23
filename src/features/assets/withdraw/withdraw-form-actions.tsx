/**
 * 资产 - 提币页面底部操作组件
 */
import { t } from '@lingui/macro'
import { Button, Toast } from 'react-vant'
import { AssetsWithdrawTypeEnum } from '@/constants/assets/index'
import { useAssetsStore } from '@/store/assets/spot'
import { decimalUtils } from '@/nbit'
import Icon from '@/components/icon'
import { CommonDigital } from '@/components/common-digital'
import styles from './withdraw.module.css'

const SafeCalcUtil = decimalUtils.SafeCalcUtil

export function WithdrawActions({ onSubmit }: { onSubmit: () => void }) {
  const { withdrawType, formData: { coin, amount = '0', error } = {}, amountInfo } = useAssetsStore().withdrawModule

  // 展示手续费说明 toast
  const showFeeInfo = () => {
    Toast.info({
      message: t`assets.withdraw.form.tips.charge`,
      position: 'bottom',
    })
  }

  /**
   * 计算到账数量
   */
  const onCalculateAmount = () => {
    let newAmount = '0.00'

    if (!amount || Number(amount) <= 0) {
      newAmount = '0.00'
    } else if (amountInfo?.feeSymbol === coin?.symbol) {
      const total = `${SafeCalcUtil.add(amount, amountInfo?.fee)}`

      if (amountInfo?.availableAmount && +total > +amountInfo?.availableAmount) {
        newAmount = `${SafeCalcUtil.sub(amountInfo?.availableAmount, amountInfo?.fee)}`
      } else {
        newAmount = amount || '0.00'
      }
    } else {
      newAmount = amount
    }

    return newAmount
  }

  return (
    <div className={styles['form-actions-wrapper']}>
      <div className="withdraw-info">
        <div className="number-item">
          <span className="label">
            {withdrawType === AssetsWithdrawTypeEnum.platform
              ? t`features_assets_withdraw_withdraw_form_actions_aiqsokzezr`
              : t`features_assets_withdraw_withdraw_form_actions_510287`}
          </span>
          <CommonDigital content={`${onCalculateAmount()} ${coin?.symbol || '--'}`} className="value" />
        </div>
        {withdrawType === AssetsWithdrawTypeEnum.blockchain && (
          <div className="number-item">
            <div className="label" onClick={showFeeInfo}>
              <span className="mr-1">{t`assets.withdraw.confirm.charge`}</span>
              <Icon name="property_icon_tips" hasTheme />
            </div>
            <CommonDigital content={`${amountInfo?.fee} ${amountInfo?.feeCoinName || '--'}`} className="value" />
          </div>
        )}
      </div>

      <Button disabled={error} onClick={onSubmit} type="primary" className="withdraw-btn">
        {withdrawType === AssetsWithdrawTypeEnum.blockchain ? t`assets.withdraw.title` : 'Pay'}
      </Button>
    </div>
  )
}
