import { t } from '@lingui/macro'
import UserSafetyVerification from '@/features/user/safety-verification'
import { getUserPageDefaultDescribeMeta } from '@/helper/user'
import { UserModuleDescribeKeyEnum } from '@/constants/user'

function Page() {
  return <UserSafetyVerification />
}

async function onBeforeRender(pageContext: PageContext) {
  const pageProps = {}
  const layoutParams = {}
  return {
    pageContext: {
      authTo: '/',
      pageProps,
      layoutParams,
      documentProps: getUserPageDefaultDescribeMeta(t`user.pageContent.title_06`, UserModuleDescribeKeyEnum.default),
    },
  }
}

export { Page, onBeforeRender }
