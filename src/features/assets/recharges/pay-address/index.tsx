/**
 * 资产 - 充值地址
 */
import { t } from '@lingui/macro'
// eslint-disable-next-line import/extensions
import { QRCodeCanvas } from 'qrcode.react'
import { Button } from 'react-vant'
import { ICoin } from '@/features/assets/common/coin-list'
import { AssetsDepositAddressResp } from '@/typings/api/assets/assets'
import { AssetsCoinRemindSettingTypeEnum } from '@/constants/assets'
import { copyCoinAddress } from '../helper/common'
import StopService from '../../common/stop-service'
import styles from './index.module.css'

export default PayAddress
interface PayAddressProps {
  /** 币种信息 */
  coin: ICoin
  /** 主网信息 */
  network: any
  /** 充值信息 */
  rechargeData: AssetsDepositAddressResp
}

function PayAddress({ rechargeData, coin, network }: PayAddressProps) {
  return (
    <div className={styles.scoped}>
      {network?.isDeposit === 1 ? (
        <div className="pay-address">
          <div className="pay-qrcode">
            <QRCodeCanvas value={rechargeData.address} width="100%" height="140" />
            <div className="pay-tips">
              {t`features_assets_recharge_pay_address_index_604`}
              {` ${coin.symbol}`}
            </div>
          </div>
          <div className="title">{t`features_assets_recharge_pay_address_index_510098`}</div>
          <div className="address-content">
            <div className="address-text">{rechargeData.address}</div>
            <Button
              className="copy-btn"
              type="primary"
              onClick={() => {
                copyCoinAddress(rechargeData.address, t`user.secret_key_01`)
              }}
            >{t`features_assets_recharge_pay_address_index_603`}</Button>
          </div>
        </div>
      ) : (
        <StopService network={network} type={AssetsCoinRemindSettingTypeEnum.recharge} />
      )}
    </div>
  )
}
