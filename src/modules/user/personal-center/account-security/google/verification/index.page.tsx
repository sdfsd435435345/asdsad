import { t } from '@lingui/macro'
import UserPersonalCenterGoogleVerification from '@/features/user/personal-center/account-security/google/verification'
import { getUserPageDefaultDescribeMeta } from '@/helper/user'
import { UserModuleDescribeKeyEnum } from '@/constants/user'

function Page() {
  return <UserPersonalCenterGoogleVerification />
}

async function onBeforeRender(pageContext: PageContext) {
  const pageProps = {}
  const layoutParams = {}
  return {
    pageContext: {
      unAuthTo: '/login?redirect=/personal-center/account-security/google',
      pageProps,
      layoutParams,
      documentProps: getUserPageDefaultDescribeMeta(t`user.pageContent.title_17`, UserModuleDescribeKeyEnum.default),
    },
  }
}

export { Page, onBeforeRender }
