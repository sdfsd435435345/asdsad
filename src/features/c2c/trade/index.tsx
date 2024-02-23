import NavBar from '@/components/navbar'
import { C2cTradeAdDirectionEnum, C2cTradeFilterAdTypeEnum } from '@/constants/c2c/trade'
import TradeButtonRadios from '@/features/trade-button-radios'
import { fetchC2cTradeStoreSettings, validateTradeAreaKyc } from '@/helper/c2c/trade'
import { useC2cTradeBaseHooks } from '@/hooks/features/c2c/trade'
import { useC2CCenterStore } from '@/store/c2c/center'
import { useBaseC2cOrderStore } from '@/store/c2c/order'
import { IQueryTradeAdListReq } from '@/typings/api/c2c/trade'
import { t } from '@lingui/macro'
import { useCreation, useMount } from 'ahooks'
import { useEffect, useState } from 'react'
import { useBaseC2cTradeStore } from '@/store/c2c/trade'
import { Dialog } from 'react-vant'
import { queryC2cTradeAdList } from '@/apis/c2c/trade'
import { link } from '@/helper/link'
import { getC2cTradePageRoutePath } from '@/helper/route'
import { usePageContext } from '@/hooks/use-page-context'
import C2cFooter from '../footer'
import { TradeAdList } from './ad-list'
import { C2cTradeSearch } from './search'
import { SwitchTradeMode } from './switch-trade-mode'
import { TradeAreaSelect } from './trade-area-select'
import { ITradeContext, tradeContext } from './trade-context'
import { HandicapList } from './handicap-list'
import { CoinSelect } from './coin-select'

function C2cTrade() {
  const [params, setParams] = useState<IQueryTradeAdListReq>({
    areaId: '',
    advertTypeCds: [],
    advertDirectCds: [C2cTradeAdDirectionEnum.buy],
  })
  const onParamsChange = (newParams: IQueryTradeAdListReq) => {
    setParams(old => ({ ...old, ...newParams }))
  }
  const tabs = [
    {
      label: t`features_kyc_index_standards_5101189`,
      value: C2cTradeAdDirectionEnum.buy,
    },
    {
      label: t`features_kyc_index_standards_5101190`,
      value: C2cTradeAdDirectionEnum.sell,
    },
  ]
  const onTabChange = (value: C2cTradeAdDirectionEnum) => {
    link(getC2cTradePageRoutePath(value), {
      overwriteLastHistoryEntry: true,
    })
    onParamsChange({ advertDirectCds: [value] })
  }

  const contextValue: ITradeContext = useCreation(() => {
    return { params, onParamsChange }
  }, [params, onParamsChange])
  useC2cTradeBaseHooks()
  const { settings } = useBaseC2cTradeStore()
  const onAreaChange = async () => {
    const currentTradeArea = params.currentTradeArea
    if (!currentTradeArea) {
      return
    }
    const showRiskInfo = () => {
      // 买提现风险提示
      if (
        params.advertDirectCds?.includes(C2cTradeAdDirectionEnum.buy) &&
        currentTradeArea?.areaRiskWarn &&
        !settings?.showRiskInfoMap[currentTradeArea.legalCurrencyId]
      ) {
        settings.updateShowRiskInfo(currentTradeArea.legalCurrencyId)
        Dialog.alert({
          title: currentTradeArea.areaRiskWarn.title,
          className: 'dialog-confirm-wrapper confirm-black',
          closeOnClickOverlay: true,
          message:
            currentTradeArea.areaRiskWarn.content ||
            t({
              id: 'features_c2c_trade_ad_list_2222222225101681',
              values: { 0: currentTradeArea?.currencyName },
            }),
          confirmButtonText: t`common.modal.close`,
        })
      }
    }
    // 取消时判断，符合条件也判断
    if (await validateTradeAreaKyc(showRiskInfo)) {
      showRiskInfo()
    }
  }
  useEffect(() => {
    onAreaChange()
  }, [params.areaId])

  const renderListByTab = () => {
    return (
      <>
        <C2cTradeSearch />
        <div className="flex-1 overflow-auto pb-40">
          <TradeAdList params={params} getAdList={queryC2cTradeAdList} />
        </div>
      </>
    )
  }
  return (
    <tradeContext.Provider value={contextValue}>
      <div className="flex flex-col h-screen">
        <NavBar hasBottomBorder={false} title={<SwitchTradeMode />} right={<TradeAreaSelect />} />
        <C2cFooter />
        <div className="flex p-4 pb-2">
          <TradeButtonRadios
            activeClassName="text-text_color_01"
            inactiveClassName="text-text_color_02"
            bothClassName="font-medium text-xl mr-6"
            value={params.advertDirectCds![0] as any}
            onChange={onTabChange}
            options={tabs}
          />
        </div>
        {renderListByTab()}
      </div>
    </tradeContext.Provider>
  )
}

export default C2cTrade
