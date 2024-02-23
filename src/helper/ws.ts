import { getWsContractType, WsTypesEnum } from '@/constants/ws'

function getBothSpotAndContractTypes(type: WsTypesEnum) {
  return [type, getWsContractType(type)]
}

export { getBothSpotAndContractTypes }
