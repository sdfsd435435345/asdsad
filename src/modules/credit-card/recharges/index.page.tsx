import { t } from '@lingui/macro'
import { useState, useEffect } from 'react'
import Recharge from '@/features/assets/recharges'
import CoinList, { ICoin } from '@/features/assets/common/coin-list'
import { AssetsCoinRemindSettingTypeEnum } from '@/constants/assets'
import { usePageContext } from '@/hooks/use-page-context'
import { getAllCoinList } from '@/helper/assets/spot'
import { getQuerySubCoinList } from '@/apis/assets/common'
import { getAssetsDefaultSeoMeta } from '@/helper/assets/overview'
import styles from './index.module.css'

export function Page() {
  const pageContext = usePageContext()
  const [coin, setCoin] = useState<ICoin>({
    appLogo:
      'https://newbit-s3.s3.ap-southeast-1.amazonaws.com/USDT.png?AWSAccessKeyId=AKIA5NV7NY6ADDEV4PWE&Expires=1924905600&Signature=1VytbCCpsviheJGTqYuBTlibMNQ%3D',
    coinFullName: 'Tether',
    coinName: 'USDT',
    id: '216765',
    isDeposit: 1,
    isPopular: 1,
    isUseMemo: 2,
    isWithdraw: 1,
    parentId: '0',
    symbol: 'USDT',
    webLogo:
      'https://newbit-s3.s3.ap-southeast-1.amazonaws.com/USDT.png?AWSAccessKeyId=AKIA5NV7NY6ADDEV4PWE&Expires=1924905600&Signature=1VytbCCpsviheJGTqYuBTlibMNQ%3D',
  } as any)
  const [network, setNetwork] = useState<string>('')
  const [visibleCoinListWrap, setVisibleCoinListWrap] = useState(false)

  // 获取子组件选中的主网信息
  const onNetworkChange = (id: string) => {
    setNetwork(id)
    setVisibleCoinListWrap(false)
  }

  // 打开币种列表，隐藏充值地址组件
  const openCoinListWrap = () => {
    setVisibleCoinListWrap(true)
  }

  /**
   * 有主币 id 的情况下去匹配一次数据（币种详情入口）
   */
  const onChangeCoin = async (id: string) => {
    const resp = await getAllCoinList(AssetsCoinRemindSettingTypeEnum.recharge)
    const coinInfo: any = resp.find(item => item.id === id)

    const subResp = await getQuerySubCoinList({ coinId: coinInfo?.id || '' })
    const { isOk, data } = subResp
    if (!isOk || !data || (data?.subCoinList && data.subCoinList.length === 0)) {
      setCoin({ ...coinInfo, networks: [...coinInfo] })
      setNetwork(coinInfo.id)
    }

    if (data?.subCoinList && data.subCoinList.length > 0) {
      setCoin({ ...coinInfo, networks: data.subCoinList })
      setNetwork(data.subCoinList[0].id)
    }
  }

  // useEffect(() => {
  //   const id = pageContext.urlParsed.search?.id
  //   setVisibleCoinListWrap(!id)
  //   id && onChangeCoin(id)
  // }, [])

  return (
    <div className={styles.scoped}>
      <Recharge coin={coin} networkId={network} openCoinListWrap={openCoinListWrap} />
      {/* {visibleCoinListWrap && (
        <div className="select-coin">
          <CoinList
            activeCoin={coin?.id || ''}
            pageType={AssetsCoinRemindSettingTypeEnum.recharge}
            onCoinChange={(params: ICoin) => {
              setCoin(params)

              if (!!coin?.id || (params?.networks && params.networks.length === 0)) {
                onNetworkChange(params?.networks && params.networks.length > 0 ? params.networks[0].id : params.id)
              }
            }}
            onNetworkChange={onNetworkChange}
            showNetworkModalWhenCoinChange={!coin?.id}
            networkTitle={t`modules_assets_recharge_index_page_644`}
            networkDesc={t`assets.common.withdraw-network.desc`}
            onBack={() => {
              coin?.id ? setVisibleCoinListWrap(false) : history.back()
            }}
          />
        </div>
      )} */}
    </div>
  )
}

export async function onBeforeRender(pageContext) {
  return {
    pageContext: {
      unAuthTo: '/login?redirect=/assets/recharge',
      documentProps: getAssetsDefaultSeoMeta(t`assets.financial-record.tabs.Deposit`),
    },
  }
}
