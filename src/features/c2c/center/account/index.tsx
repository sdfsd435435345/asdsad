import { t } from '@lingui/macro'
import { useState } from 'react'
import { decimalUtils } from '@/nbit'
import { useCreation, useBoolean } from 'ahooks'
import { rateFilter } from '@/helper/assets/spot'
import { AssetsRouteEnum } from '@/constants/assets'
import { getBalanceC2cList } from '@/apis/c2c/center'
import { C2cTablecolumns } from '@/constants/c2c/common'
import { C2CListBalanceType } from '@/typings/api/c2c/center'
import { getAssetsHistoryPageRoutePath } from '@/helper/route'
import { C2CSetUpEnum } from '@/constants/c2c/center'
import useApiAllCoinSymbolInfo from '@/hooks/features/market/common/use-api-all-coin-symbol-info'
/** 引入的组件* */
import Icon from '@/components/icon'
import Link from '@/components/link'
import { link } from '@/helper/link'
import { Collapse } from 'react-vant'
import NavBar from '@/components/navbar'
import LazyImage from '@/components/lazy-image'
import FullScreenLoading from '@/features/user/components/full-screen-loading'
import styles from './index.module.css'

function C2cAccount() {
  /** 币种广告信息* */
  const [balanceList, setBalanceList] = useState<Array<C2CListBalanceType>>([])

  const [loading, { setTrue, setFalse }] = useBoolean(false)
  const symbolInfo = useApiAllCoinSymbolInfo()

  /** 账户详情* */
  const onAccountDetail = () => {
    link(getAssetsHistoryPageRoutePath(AssetsRouteEnum.c2c))
  }

  /** 处理资产* */
  const handleBalance = (v: C2CListBalanceType) => {
    const balance = v?.balance || C2CSetUpEnum.none
    const freezeBalance = v?.freezeBalance || C2CSetUpEnum.none
    const merchantFreezeBalance = v?.merchantFreezeBalance || C2CSetUpEnum.none
    return balance + freezeBalance + merchantFreezeBalance
  }

  const getAccountData = async () => {
    setTrue()
    const { data, isOk } = await getBalanceC2cList({})
    if (data && isOk) {
      data.forEach(v => {
        const params = symbolInfo?.find(item => item.id === v.coinId)
        params && (v.appLogo = params.appLogo || '')
      })
      setBalanceList(data)
    }
    setFalse()
  }

  useCreation(() => {
    symbolInfo?.length && getAccountData()
  }, [symbolInfo])

  return (
    <section className={styles['c2c-account']}>
      <NavBar
        title={t`features_c2c_center_account_index_e-0zmvrsluja011y3wiol`}
        right={<Icon name="asset_record" hasTheme className="c2c-account-icon" onClick={onAccountDetail} />}
      />
      <header className="c2c-account-header">
        {C2cTablecolumns()?.map(v => {
          return (
            <div key={v.id} className="c2c-account-header-item">
              {v.header}
            </div>
          )
        })}
      </header>
      <Collapse border={false} className="c2c-account-collapse">
        {balanceList?.map(v => {
          return (
            <Collapse.Item
              border={false}
              key={v?.coinId}
              name={v?.coinId}
              title={
                <div key={v?.coinId} className="account-footer-common-list">
                  <div className="common-list-left">
                    <LazyImage src={v?.appLogo} className="mr-1" width={22} height={22} round />
                    <div className="common-list-left-contair">
                      <div className="list-left-contair-title">{v?.coinName}</div>
                      <div className="list-left-contair-text">{v?.coinFullName}</div>
                    </div>
                  </div>
                  <div className="common-list-middle">
                    <div className="list-middle-contair-title">{handleBalance(v)}</div>
                    <div className="list-middle-contair-text">
                      <span className="mr-1">{'USD'}</span>
                      {rateFilter({
                        amount: v?.balance,
                        symbol: v?.symbol,
                        showUnit: false,
                        rate: 'USD',
                        isFormat: true,
                      })}
                    </div>
                  </div>
                  <div className="common-list-right" onClick={e => e.stopPropagation()}>
                    <Link href={`/c2c/center/capital-transfer?coinName=${v?.symbol}`}>
                      <div className="common-list-right-button">{t`features_trade_leveraged_leveraged_trade_index_5101278`}</div>
                    </Link>
                  </div>
                </div>
              }
              className="c2c-account-collapse-item"
            >
              <div className="account-collapse-item-content">
                <div>{t`assets.common.available_count`}</div>
                <div className="account-collapse-item-value">{v?.balance}</div>
              </div>
              <div className="account-collapse-item-content mt-2">
                <div>{t`features_assets_index_coin_510298`}</div>
                <div className="account-collapse-item-value">
                  {`${decimalUtils.SafeCalcUtil.add(v?.freezeBalance, v?.merchantFreezeBalance)}`}
                </div>
              </div>
            </Collapse.Item>
          )
        })}
      </Collapse>

      <FullScreenLoading mask isShow={loading} />
    </section>
  )
}

export default C2cAccount
