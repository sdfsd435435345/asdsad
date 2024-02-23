import NavBar from '@/components/navbar'
import C2cMerchantForm from '@/features/c2c/c2c-merchant/c2c-merchant-form'
import MerchantNoticeBar from '@/features/c2c/c2c-merchant/merchant-notice-bar'
import { getC2cMerchantApplicationPageRoutePath } from '@/helper/route'
import { t } from '@lingui/macro'

function Page() {
  return (
    <>
      <NavBar title={t`modules_c2c_merchant_form_index_page_25101380`} />
      <MerchantNoticeBar />
      <div className="mx-4">
        <C2cMerchantForm />
      </div>
    </>
  )
}

async function onBeforeRender(pageContext: PageContext) {
  const pageProps = {}
  const layoutParams = {}
  return {
    pageContext: {
      unAuthTo: `/login?redirect=${getC2cMerchantApplicationPageRoutePath()}`,
      pageProps,
      layoutParams,
      documentProps: {
        title: t`modules_c2c_merchant_form_index_page_25101380`,
      },
    },
  }
}

export { Page, onBeforeRender }
