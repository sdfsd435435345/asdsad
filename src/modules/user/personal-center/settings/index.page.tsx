import { t } from '@lingui/macro'
import UserPersonalCenterSettings from '@/features/user/personal-center/settings'
import { getUserPageDefaultDescribeMeta } from '@/helper/user'
import { UserModuleDescribeKeyEnum } from '@/constants/user'

function Page() {
  return <UserPersonalCenterSettings />
}

async function onBeforeRender(pageContext: PageContext) {
  const pageProps = {}
  const layoutParams = {}
  return {
    pageContext: {
      pageProps,
      layoutParams,
      documentProps: getUserPageDefaultDescribeMeta(t`user.pageContent.title_12`, UserModuleDescribeKeyEnum.default),
    },
  }
}

export { Page, onBeforeRender }
