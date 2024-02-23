import { getAreaList } from '@/apis/c2c/common'
import Icon from '@/components/icon'
import { OnlyOnePopup } from '@/components/only-one-overlay'
import { CoinTradingStatusTypeEnum } from '@/constants/c2c/common'
import { getDefaultTradeWays } from '@/helper/c2c/trade'
import { requestWithLoading } from '@/helper/order'
import { C2CAreaListResp } from '@/typings/api/c2c/common'
import { useMount } from 'ahooks'
import { ReactNode, useState } from 'react'
import { useBaseC2cTradeStore } from '@/store/c2c/trade'
import { TradingAreaSelection } from '../../common/trading-area-selection'
import { useTradeContext } from './trade-context'

type ITradeAreaSelectProps = {
  selectorRender?: (area?: C2CAreaListResp) => ReactNode
}

export function TradeAreaSelect({ selectorRender }: ITradeAreaSelectProps = {}) {
  const { params, onParamsChange } = useTradeContext()
  const { updateAreaId, areaId: storeAreaId } = useBaseC2cTradeStore()
  const [visible, setVisible] = useState(false)
  const onClose = () => {
    setVisible(false)
  }
  const onSelect = (item: C2CAreaListResp) => {
    updateAreaId(item.legalCurrencyId)
    onParamsChange({
      areaId: item.legalCurrencyId,
      currentTradeArea: item,
      payments: item.payments,
      tradeTypeCds: getDefaultTradeWays(item.defaultClientTypeCd),
    })
    onClose()
  }
  const getDefaultParams = async () => {
    const areaRes = await getAreaList({})
    if (!areaRes.isOk || !areaRes.data) {
      return
    }
    const areas = areaRes.data.filter((item: C2CAreaListResp) => {
      return item.statusCd === CoinTradingStatusTypeEnum.enable
    })
    const firstArea = areas.find(item => item.legalCurrencyId === storeAreaId) || areas[0]
    if (!firstArea) {
      return
    }
    onSelect(firstArea)
  }
  useMount(() => {
    requestWithLoading(getDefaultParams())
  })
  function defaultRenderSelector() {
    return (
      <div className="bg-card_bg_color_02 px-2 py-0.5 rounded-xl">
        <span>{params.currentTradeArea?.currencyName}</span>
        <Icon name="fast_trade_switch" className="text-xs ml-1" hasTheme />
      </div>
    )
  }

  return (
    <div>
      <div onClick={() => setVisible(true)}>
        {selectorRender ? selectorRender(params.currentTradeArea) : defaultRenderSelector()}
      </div>
      <OnlyOnePopup visible={visible} position="bottom" onClose={onClose}>
        <div className="w-full h-screen left-0 top-0 bg-bg_color">
          {visible && <TradingAreaSelection onSelect={onSelect} id={params.areaId as any} onCloseModal={onClose} />}
        </div>
      </OnlyOnePopup>
    </div>
  )
}
