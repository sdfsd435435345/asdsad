import { t } from '@lingui/macro'
import UserPersonalCenterModifyUsername from '@/features/user/personal-center/modify-username'
import { getUserPageDefaultDescribeMeta } from '@/helper/user'
import { UserModuleDescribeKeyEnum } from '@/constants/user'

function Page() {
  return <UserPersonalCenterModifyUsername />
}

async function onBeforeRender(pageContext: PageContext) {
  const pageProps = {}
  const layoutParams = {}
  return {
    pageContext: {
      unAuthTo: '/login?redirect=/personal-center/modify-username',
      pageProps,
      layoutParams,
      documentProps: getUserPageDefaultDescribeMeta(t`user.pageContent.title_10`, UserModuleDescribeKeyEnum.default),
    },
  }
}

export { Page, onBeforeRender }
