import { t } from '@lingui/macro'
import UserPersonalCenterNetworkCheck from '@/features/user/personal-center/network-check'
import { getUserPageDefaultDescribeMeta } from '@/helper/user'
import { UserModuleDescribeKeyEnum } from '@/constants/user'

function Page() {
  return <UserPersonalCenterNetworkCheck />
}

async function onBeforeRender(pageContext: PageContext) {
  const pageProps = {}
  const layoutParams = {}
  return {
    pageContext: {
      pageProps,
      layoutParams,
      documentProps: getUserPageDefaultDescribeMeta(t`user.pageContent.title_11`, UserModuleDescribeKeyEnum.default),
    },
  }
}

export { Page, onBeforeRender }
