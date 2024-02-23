import { PostAdvertiseResultLayout } from '@/features/c2c/advertise/post-advertise-result'
import { getC2cDefaultSeoMeta } from '@/helper/c2c/trade'
import { t } from '@lingui/macro'

export function Page() {
  return <PostAdvertiseResultLayout />
}

export async function onBeforeRender() {
  return {
    pageContext: {
      documentProps: await getC2cDefaultSeoMeta(
        t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_j8r53b89spfvpwjv_eoen`
      ),
    },
  }
}
