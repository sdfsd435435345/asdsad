import SetZfPassword from '@/features/credit-card/set-zf-password'
import { getCreditCardZfPasswod } from '@/helper/route/credit-card'

function Page() {
  return <SetZfPassword />
}

export { Page }
export async function onBeforeRender() {
  return {
    pageContext: {
      // layoutParams: {
      //   // footerShow: true, // 是否需要 footer
      //   disableTransition: true,
      // },
      unAuthTo: `/login?redirect=${getCreditCardZfPasswod()}`,
      // documentProps: await getC2cDefaultSeoMeta()
    },
  }
}
