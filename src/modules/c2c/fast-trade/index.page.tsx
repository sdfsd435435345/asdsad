import C2cFastTrade from '@/features/c2c/trade/fast-trade'
import { getC2cDefaultSeoMeta } from '@/helper/c2c/trade'
import { getC2cFastTradePageRoutePath } from '@/helper/route'

export function Page() {
  return <C2cFastTrade />
}
export async function onBeforeRender() {
  return {
    pageContext: {
      unAuthTo: `/login?redirect=${getC2cFastTradePageRoutePath()}`,
      documentProps: await getC2cDefaultSeoMeta(),
    },
  }
}
