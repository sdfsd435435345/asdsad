import { t } from '@lingui/macro'
import UserPersonalCenterEmail from '@/features/user/personal-center/account-security/email'
import { getUserPageDefaultDescribeMeta } from '@/helper/user'
import { UserModuleDescribeKeyEnum } from '@/constants/user'

function Page() {
  return <UserPersonalCenterEmail />
}

async function onBeforeRender(pageContext: PageContext) {
  const pageProps = {}
  const layoutParams = {}
  return {
    pageContext: {
      unAuthTo: '/login?redirect=/personal-center/account-security/email',
      pageProps,
      layoutParams,
      documentProps: getUserPageDefaultDescribeMeta(t`user.pageContent.title_14`, UserModuleDescribeKeyEnum.default),
    },
  }
}

export { Page, onBeforeRender }
