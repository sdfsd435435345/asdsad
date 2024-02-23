import { t } from '@lingui/macro'
import UserPersonalCenterAboutUs from '@/features/user/personal-center/about-us'
import { getUserPageDefaultDescribeMeta } from '@/helper/user'
import { UserModuleDescribeKeyEnum } from '@/constants/user'

function Page() {
  return <UserPersonalCenterAboutUs />
}

async function onBeforeRender(pageContext: PageContext) {
  const pageProps = {}
  const layoutParams = {}
  return {
    pageContext: {
      pageProps,
      layoutParams,
      documentProps: getUserPageDefaultDescribeMeta(t`user.pageContent.title_09`, UserModuleDescribeKeyEnum.default),
    },
  }
}

export { Page, onBeforeRender }
