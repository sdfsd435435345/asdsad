import { t } from '@lingui/macro'
import UserPersonalCenterGoogle from '@/features/user/personal-center/account-security/google'
import { getUserPageDefaultDescribeMeta } from '@/helper/user'
import { UserModuleDescribeKeyEnum } from '@/constants/user'

function Page() {
  return <UserPersonalCenterGoogle />
}

async function onBeforeRender(pageContext: PageContext) {
  const pageProps = {}
  const layoutParams = {}
  return {
    pageContext: {
      unAuthTo: '/login?redirect=/personal-center/account-security/google',
      pageProps,
      layoutParams,
      documentProps: getUserPageDefaultDescribeMeta(t`user.pageContent.title_16`, UserModuleDescribeKeyEnum.default),
    },
  }
}

export { Page, onBeforeRender }
