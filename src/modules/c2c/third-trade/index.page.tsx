import C2cThirdTrade from '@/features/c2c/trade/third-trade'
import { getC2cDefaultSeoMeta } from '@/helper/c2c/trade'
import { getC2cThirdTradePageRoutePath } from '@/helper/route'

export function Page() {
  return <C2cThirdTrade />
}
export async function onBeforeRender() {
  return {
    pageContext: {
      unAuthTo: `/login?redirect=${getC2cThirdTradePageRoutePath()}`,
      documentProps: await getC2cDefaultSeoMeta(),
    },
  }
}
