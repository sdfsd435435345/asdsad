import C2cOrderBookDetail from '@/features/c2c/trade/order-book/detail'
import { getC2cDefaultSeoMeta } from '@/helper/c2c/trade'
import { getC2cTradePageRoutePath } from '@/helper/route'

export function Page() {
  return <C2cOrderBookDetail />
}

export async function onBeforeRender() {
  return {
    pageContext: {
      unAuthTo: `/login?redirect=${getC2cTradePageRoutePath()}`,
      documentProps: await getC2cDefaultSeoMeta(),
    },
  }
}
