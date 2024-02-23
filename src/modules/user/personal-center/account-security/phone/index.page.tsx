import { t } from '@lingui/macro'
import UserPersonalCenterPhone from '@/features/user/personal-center/account-security/phone'
import { getUserPageDefaultDescribeMeta } from '@/helper/user'
import { UserModuleDescribeKeyEnum } from '@/constants/user'

function Page() {
  return <UserPersonalCenterPhone />
}

async function onBeforeRender(pageContext: PageContext) {
  const pageProps = {}
  const layoutParams = {}
  return {
    pageContext: {
      unAuthTo: '/login?redirect=/personal-center/account-security/phone',
      pageProps,
      layoutParams,
      documentProps: getUserPageDefaultDescribeMeta(t`user.pageContent.title_18`, UserModuleDescribeKeyEnum.default),
    },
  }
}

export { Page, onBeforeRender }
