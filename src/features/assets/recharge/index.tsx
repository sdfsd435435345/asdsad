/**
 * 资产 - 充值
 */
import { t } from '@lingui/macro'
import { FC, useState, useEffect } from 'react'
import { Button, Toast } from 'react-vant'
import Icon from '@/components/icon'
import NavBar from '@/components/navbar'
import LazyImage from '@/components/lazy-image'
import MainNetWork from '@/features/assets/common/main-network'
import PayAddress from '@/features/assets/recharge/pay-address'
import { link } from '@/helper/link'
import { postDepositAddress } from '@/apis/assets/recharge'
import { AssetsDepositAddressResp } from '@/typings/api/assets/assets'
import { AssetsCoinRemindSettingTypeEnum, AssetsRouteEnum } from '@/constants/assets'
import { useUpdateEffect } from 'ahooks'
import { requestWithLoading } from '@/helper/order'
import { getAssetsHistoryPageRoutePath } from '@/helper/route'
import { copyCoinAddress } from './helper/common'
import { ICoin } from '../common/coin-list'
import styles from './index.module.css'

export default Recharge
interface RechargeProps {
  coin: ICoin
  networkId: any
  /** 事件回调函数 */
  openCoinListWrap: (val) => void
}

function Recharge({ coin, networkId, openCoinListWrap }: RechargeProps) {
  // 选中主网 ID
  const [selectedMainNetworkVal, setSelectedMainNetworkVal] = useState(networkId)

  // TODO 主币下都有主网信息，后期可以去掉 length 判断
  let nNetwork: any = {}
  if (coin.networks && coin.networks.length > 0) {
    nNetwork = coin.networks[0]
  } else {
    nNetwork = coin
  }

  // 选中主网信息
  let selectedMainNetwork: any = {}
  if (selectedMainNetworkVal) {
    selectedMainNetwork =
      coin?.networks && coin?.networks.length > 0
        ? coin?.networks?.find(network => network.id === selectedMainNetworkVal)
        : nNetwork
  }

  // 充值地址
  const [coinAddress, setCoinAddress] = useState<AssetsDepositAddressResp>({ address: '', hint: '', memo: '' })

  /**
   * 查询充值地址
   * @returns
   */
  const onLoadDepositAddress = async () => {
    const res = await postDepositAddress({ coinId: selectedMainNetwork?.id || coin.id })

    const { isOk, data, message = '' } = res || {}
    if (!isOk) {
      Toast(message)
      return
    }

    data && setCoinAddress(data)
  }

  /**
   * memo 地址组件
   */
  const MemoAddrItem = () => {
    return (
      <>
        <div className="memo">
          <div className="item-title">{t`features_assets_recharge_index_510099`}</div>
          <div className="memo-content">
            <div className="memo-text">{coinAddress.memo}</div>
            <Button
              className="memo-btn"
              type="primary"
              onClick={() => {
                copyCoinAddress(coinAddress.memo, t`features_assets_recharge_index_605`)
              }}
            >{t`features_assets_recharge_pay_address_index_603`}</Button>
          </div>
          <div className="memo-tips">{t`features_assets_recharge_index_606`}</div>
        </div>
      </>
    )
  }

  /**
   * 充值提示
   * 分享按钮
   * @returns
   */
  const ShareButtonItem: FC = () => {
    return (
      <>
        {coinAddress.hint && (
          <div className="recharge-tips">
            <div className="item-title">{t`features_assets_recharge_index_510100`}</div>
            <div className="tips-content">
              <Icon name="tips_icon" className="tips-content-icon" />
              <span>{coinAddress.hint}</span>
            </div>
          </div>
        )}
        {/* H5 隐藏分享图片功能 */}
        {/* <div className="share-div">
          <Button
            type="primary"
            block
            round
            onClick={() => {
              Toast.info(t`features_assets_recharge_index_607`)
            }}
          >
            {t`features_assets_recharge_index_608`}
          </Button>
        </div> */}
      </>
    )
  }

  useEffect(() => {
    setSelectedMainNetworkVal(networkId)
  }, [networkId])

  useUpdateEffect(() => {
    selectedMainNetwork && selectedMainNetwork.isDeposit === 1 && requestWithLoading(onLoadDepositAddress(), 0)
  }, [selectedMainNetwork])

  return (
    <div className={styles.scoped}>
      <NavBar
        title={t`features_assets_wallet_wallet_tabs_list_index_ztuued_k6i`}
        right={
          <Icon
            name="assets_financial_records"
            hasTheme
            className="record-icon"
            onClick={() => link(getAssetsHistoryPageRoutePath())}
          />
        }
      />

      <div className="select-currency">
        <div className="item-title">{t`assets.withdraw.form.coin.label`}</div>
        <div
          className="coin-info"
          onClick={() => {
            openCoinListWrap(true)
          }}
        >
          <div className="coin-info-item">
            <LazyImage width={20} height={20} src={coin && coin.appLogo} round />
            <span className="coin-name">{coin && coin.coinName}</span>
          </div>

          <div className="coin-info-item">
            <span>{coin.coinFullName}</span>
            <Icon hasTheme name="next_arrow" className="next-icon" />
          </div>
        </div>
      </div>

      {selectedMainNetwork?.isDeposit && (
        <PayAddress rechargeData={coinAddress} coin={coin} network={selectedMainNetwork} />
      )}

      {coin?.networks && coin?.networks.length > 0 && (
        <MainNetWork
          pageType={AssetsCoinRemindSettingTypeEnum.recharge}
          networks={coin.networks}
          value={selectedMainNetwork?.id}
          onChange={setSelectedMainNetworkVal}
        />
      )}

      {selectedMainNetwork?.isDeposit === 1 && (
        <>
          {coinAddress.memo && <MemoAddrItem />}
          <ShareButtonItem />
        </>
      )}
    </div>
  )
}
