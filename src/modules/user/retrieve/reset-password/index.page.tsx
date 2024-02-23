import { t } from '@lingui/macro'
import UserRetrieveResetPassword from '@/features/user/retrieve/reset-password'
import { getUserPageDefaultDescribeMeta } from '@/helper/user'
import { UserModuleDescribeKeyEnum } from '@/constants/user'

function Page() {
  return <UserRetrieveResetPassword />
}

async function onBeforeRender(pageContext: PageContext) {
  const pageProps = {}
  const layoutParams = {}
  return {
    pageContext: {
      authTo: '/',
      pageProps,
      layoutParams,
      documentProps: getUserPageDefaultDescribeMeta(t`user.field.reuse_24`, UserModuleDescribeKeyEnum.default),
    },
  }
}

export { Page, onBeforeRender }
