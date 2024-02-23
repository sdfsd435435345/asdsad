import { t } from '@lingui/macro'
import ReminderPage from '@/features/inmail/reminder-page'

function Page() {
  return <ReminderPage />
}

export { Page }

export async function onBeforeRender(pageContext: PageContext) {
  const pageProps = {}
  const layoutParams = {
    footerShow: false,
    fullScreen: true,
  }
  return {
    pageContext: {
      unAuthTo: `/login?redirect=/inmail/reminder-page/${pageContext.routeParams?.type}`,
      pageProps,
      layoutParams,
      documentProps: {
        title: t`modules_inmail_reminder_page_index_page_server_5101318`,
      },
    },
  }
}
