import { t } from '@lingui/macro'
import { Toast } from 'react-vant'
import Icon from '@/components/icon'
import { link } from '@/helper/link'
import NavBar from '@/components/navbar'
import { useEffect, useState } from 'react'
import NoDataImage from '@/components/no-data-image'
import { getNoticeCenterPage } from '@/apis/announcement'
import { usePageContext } from '@/hooks/use-page-context'
import HelpCenterHeader from '@/features/help-center/header'
import SupportMenu from '@/features/help-center/support/component/support-menu'
import { NoticeCenterPage } from '@/typings/api/help-center'
import styles from './index.module.css'

function HelpCenterSupportNavigation() {
  const pageContext = usePageContext()
  const [menuId, setMenuId] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [noticeCenter, setNoticeCenter] = useState<Array<NoticeCenterPage>>([])

  const getMenuId = () => {
    const menu = pageContext?.urlParsed
    const subMenuId = menu.search?.subMenuId
    const hash = menu?.hash
    let path = `${pageContext?.path}${hash ? `#${hash}` : ''}`
    return { path, subMenuId }
  }

  const getNoticeCenterList = async () => {
    const { subMenuId } = getMenuId()
    const res = await getNoticeCenterPage({})
    setLoading(false)
    setNoticeCenter(res.data?.dialogList)
    if (subMenuId) {
      setMenuId(subMenuId)
    } else {
      const id = res.data?.dialogList[0].id
      setMenuId(id)
    }
  }

  /** 搜索* */
  const onChangeSearch = v => {
    v && link(`/support/search?type=2&searchName=${v}#2`)
  }

  const onArticleChange = v => {
    link(`/announcement/article/${v?.id}`, { keepScrollPosition: true })
  }

  const onSubChange = v => {
    setMenuId(v.id)
    link(`/announcement?subMenuId=${v?.id}`, { keepScrollPosition: true })
  }

  useEffect(() => {
    getNoticeCenterList()
  }, [pageContext.urlOriginal])

  useEffect(() => {
    setLoading(true)
  }, [])

  useEffect(() => {
    loading
      ? Toast.loading({
          duration: 0,
          message: t`features_assets_coin_details_coin_details_510157`,
        })
      : Toast.clear()
  }, [loading])

  return (
    <div className={styles.scoped}>
      <div className="notice-center-content">
        <NavBar
          title={t`features_help_center_support_search_index_5101078`}
          left={<Icon name="back" hasTheme className="header-back" />}
        />
        <HelpCenterHeader
          searchName={t`features_help_center_support_search_index_5101078`}
          onSearch={onChangeSearch}
          placeholder={t`features_announcement_index_5101233`}
        />
        {noticeCenter?.length ? (
          <SupportMenu
            data={noticeCenter}
            initSubKey={menuId}
            onSubChange={onSubChange}
            onItemChange={onArticleChange}
          />
        ) : loading ? null : (
          <NoDataImage className="mt-8" />
        )}
      </div>
    </div>
  )
}

export default HelpCenterSupportNavigation
