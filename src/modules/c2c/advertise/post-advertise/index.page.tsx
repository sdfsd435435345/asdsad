import { PostAdvertiseLayout } from '@/features/c2c/advertise/post-advertise'
import { getC2cDefaultSeoMeta } from '@/helper/c2c/trade'
import { t } from '@lingui/macro'

export function Page() {
  return <PostAdvertiseLayout />
}

export async function onBeforeRender(pageContext: PageContext) {
  return {
    pageContext: {
      unAuthTo: '/login?redirect=/c2c/post/adv',
      documentProps: await getC2cDefaultSeoMeta(
        t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_j8r53b89spfvpwjv_eoen`
      ),
    },
  }
}
