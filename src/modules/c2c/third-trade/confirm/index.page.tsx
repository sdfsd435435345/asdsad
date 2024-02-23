import ThirdTradeConfirm from '@/features/c2c/trade/third-trade/confirm'
import { getC2cDefaultSeoMeta } from '@/helper/c2c/trade'
import { getC2cThirdTradePageRoutePath } from '@/helper/route'

export function Page() {
  return <ThirdTradeConfirm />
}
export async function onBeforeRender() {
  return {
    pageContext: {
      unAuthTo: `/login?redirect=${getC2cThirdTradePageRoutePath()}`,
      documentProps: await getC2cDefaultSeoMeta(),
    },
  }
}
