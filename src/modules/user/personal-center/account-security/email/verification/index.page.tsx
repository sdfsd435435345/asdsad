import { t } from '@lingui/macro'
import UserPersonalCenterEmailVerification from '@/features/user/personal-center/account-security/email/verification'
import { getUserPageDefaultDescribeMeta } from '@/helper/user'
import { UserModuleDescribeKeyEnum } from '@/constants/user'

function Page() {
  return <UserPersonalCenterEmailVerification />
}

async function onBeforeRender(pageContext: PageContext) {
  const pageProps = {}
  const layoutParams = {}
  return {
    pageContext: {
      unAuthTo: '/login?redirect=/personal-center/account-security/email',
      pageProps,
      layoutParams,
      documentProps: getUserPageDefaultDescribeMeta(t`user.pageContent.title_15`, UserModuleDescribeKeyEnum.default),
    },
  }
}

export { Page, onBeforeRender }
