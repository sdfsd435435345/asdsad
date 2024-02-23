import { AdvertiseDetailsLayout } from '@/features/c2c/advertise/advertise-details'
import { getC2cDefaultSeoMeta } from '@/helper/c2c/trade'
import { t } from '@lingui/macro'

export function Page() {
  return <AdvertiseDetailsLayout />
}

export async function onBeforeRender(pageContext: PageContext) {
  return {
    pageContext: {
      documentProps: await getC2cDefaultSeoMeta(
        t`features_c2c_advertise_advertise_details_index_yom1wobph6drd-u2esl5b`
      ),
    },
  }
}
