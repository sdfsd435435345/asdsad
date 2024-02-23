import { getWsContractType, WsBizEnum, WsTypesEnum } from '@/constants/ws'
import { partial } from 'lodash'
import { wsMarketCommonSub, wsMarketSectorConceptList, wsTradePairSubFullAmount, wsTradePairSubSlow } from './common'

/** Spot WS */
const wsSpotMarketCommonSub = partial(wsMarketCommonSub, { biz: WsBizEnum.spot, type: WsTypesEnum.market })

const wsSpotTradePairSubFullAmount = partial(wsTradePairSubFullAmount, {
  biz: WsBizEnum.spot,
  type: WsTypesEnum.marketFullAmount,
})

const wsSpotMarketSectorConceptList = partial(wsMarketSectorConceptList, {
  biz: WsBizEnum.spot,
  type: WsTypesEnum.concept,
})

const wsSpotTradePairSubSlow = partial(wsTradePairSubSlow, {
  biz: WsBizEnum.spot,
  type: WsTypesEnum.marketSlow,
})

/** Contract WS */
const wsFuturesMarketCommonSub = partial(wsMarketCommonSub, {
  biz: WsBizEnum.perpetual,
  type: getWsContractType(WsTypesEnum.market),
})

const wsContractTradePairSubFullAmount = partial(wsTradePairSubFullAmount, {
  biz: WsBizEnum.perpetual,
  type: getWsContractType(WsTypesEnum.marketFullAmount),
})

const wsContractTradePairSubSlow = partial(wsTradePairSubSlow, {
  biz: WsBizEnum.perpetual,
  type: getWsContractType(WsTypesEnum.marketSlow),
})

export {
  wsSpotMarketCommonSub,
  wsSpotTradePairSubFullAmount,
  wsSpotMarketSectorConceptList,
  wsSpotTradePairSubSlow,
  wsFuturesMarketCommonSub,
  wsContractTradePairSubFullAmount,
  wsContractTradePairSubSlow,
}
