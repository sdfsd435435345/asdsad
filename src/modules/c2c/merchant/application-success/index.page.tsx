import LazyImage from '@/components/lazy-image'
import Link from '@/components/link'
import NavBar from '@/components/navbar'
import { oss_svg_image_domain_address } from '@/constants/oss'
import { getC2cMerchantApplicationSuccessPageRoutePath } from '@/helper/route'
import { t } from '@lingui/macro'
import { Button } from 'react-vant'

function Page() {
  return (
    <div className="h-screen">
      <NavBar title={t`modules_c2c_merchant_form_index_page_25101380`} />
      <div className="grow mx-4 flex flex-col items-center">
        <LazyImage
          className="mt-20"
          width="132px"
          height="105px"
          src={`${oss_svg_image_domain_address}register_success.svg`}
          hasTheme
        />
        <div className="text-center my-8">
          <div className="mb-2">{t`modules_c2c_merchant_form_success_index_page_qj-d_aedjurvta6sa-qm7`}</div>
          <div className="text-text_color_02">{t`modules_c2c_merchant_form_success_index_page_xcltv0tu1pmp-72exnxwm`}</div>
        </div>
        <Link href="/assets" className="w-full">
          <Button type="primary" text={t`assets.withdraw.success.view-assets`} block className="rounded" />
        </Link>
      </div>
    </div>
  )
}

async function onBeforeRender(pageContext: PageContext) {
  const pageProps = {}
  const layoutParams = {}
  return {
    pageContext: {
      unAuthTo: `/login?redirect=${getC2cMerchantApplicationSuccessPageRoutePath()}`,
      pageProps,
      layoutParams,
      documentProps: {
        title: t`modules_c2c_merchant_form_index_page_25101380`,
      },
    },
  }
}

export { Page, onBeforeRender }
