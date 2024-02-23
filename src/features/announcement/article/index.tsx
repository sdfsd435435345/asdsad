import { useEffect, useState } from 'react'
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import { link } from '@/helper/link'
import NavBar from '@/components/navbar'
import { Notify } from 'react-vant'
import { formatDate } from '@/helper/date'
import { usePageContext } from '@/hooks/use-page-context'
import HelpCenterHeader from '@/features/help-center/header'
import { getNoticeCenterArticle } from '@/apis/announcement'
import FullScreenLoading from '@/features/user/components/full-screen-loading'
import { NoticeCenterType, NoticeCenterArticleList, CenterDateType } from '@/typings/api/help-center'
import { handleVideo } from '@/helper/help-center'
import styles from './index.module.css'

function HelpCenterSupportSearch() {
  const pageContext = usePageContext()
  const [loading, setLoading] = useState<boolean>(false)
  const [isImmerseHeader, setIsImmerseHeader] = useState<boolean>(false) // 是否需要隐藏头部和面包屑
  const [noticeList, setNoticeList] = useState<NoticeCenterArticleList>()
  const [noticeArticle, setNoticeArticle] = useState<Array<NoticeCenterType>>([])

  const getCurrentArticleList = async id => {
    if (id) {
      setLoading(true)
      const res = await getNoticeCenterArticle({ announceContentId: id })
      setLoading(false)
      const dom = document.querySelector('#article') as HTMLDivElement
      const currentData = res.data?.announcementCenter?.contentJson?.[pageContext?.locale ?? '']?.content
      dom.innerHTML = currentData || ''
      const video = dom.getElementsByTagName('video')
      if (video?.length) {
        const num = Array(video.length).fill(1)
        num.forEach((_, index) => {
          let videoEle = video[index]
          videoEle = handleVideo(videoEle)
        })
      }
      setNoticeList(res.data?.announcementCenter)
      setNoticeArticle(res.data?.announcementList?.slice(0, 5))
    }
  }

  /** 搜索* */
  const onSearchChange = v => {
    v && link(`/support/search?type=2&searchName=${v}#2`)
  }

  const onArticleChange = v => {
    if (isImmerseHeader) {
      return link(`/announcement/article/${v.id}?isImmerse=true`, { keepScrollPosition: true })
    }
    link(`/announcement/article/${v.id}`, { keepScrollPosition: true })
  }

  const getMenuId = () => {
    const host = pageContext?.host
    const locale = pageContext?.locale
    const id = pageContext?.routeParams?.id
    const menu = pageContext?.urlParsed
    const isImmerse = menu.search?.isImmerse
    let path = pageContext?.path
    return { path, host, locale, id, isImmerse }
  }

  /** 沉浸式模式* */
  const handleImmerseMode = () => {
    const { isImmerse } = getMenuId()
    if (isImmerse === 'true') {
      setIsImmerseHeader(true)
    }
  }

  /** 分享当前文章* */
  const shareCurrentArticle = () => {
    const { host, locale, path } = getMenuId()
    // 创建 text area
    const currentRouter = `${host}/${locale}${path}`
    const textArea = document.createElement('textarea')
    textArea.value = `${currentRouter}`
    // 隐藏文本框，同时防止屏幕抖动
    textArea.style.position = 'fixed'
    textArea.style.left = '0'
    textArea.style.top = '0'
    textArea.style.opacity = '0'
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select() // 选中文本
    const successful = document.execCommand('copy') // 执行 copy 操作
    if (successful) {
      Notify.show({ type: 'success', message: t`features_announcement_article_index_5101103` })
    } else {
      Notify.show({ type: 'danger', message: t`features_announcement_article_index_5101104` })
    }
    textArea.remove()
  }

  useEffect(() => {
    const { id } = getMenuId()
    getCurrentArticleList(id)
  }, [pageContext.urlOriginal])

  useEffect(() => {
    handleImmerseMode()
  }, [])

  return (
    <div className={styles.scoped}>
      <div className="help-center-support-article">
        <NavBar
          title={noticeList?.name || t`features_help_center_support_search_index_5101078`}
          left={<Icon name="back" hasTheme className="header-back" />}
        />
        {!isImmerseHeader && (
          <HelpCenterHeader onSearch={onSearchChange} placeholder={t`features_announcement_index_5101233`} />
        )}
        <div className="article-content-body">
          <div className="article-body-header">{noticeList?.name}</div>
          <div className="article-body-time">
            {formatDate(noticeList?.pushTimeStramp as string, CenterDateType.MinDate)}
          </div>
          <div id="article" className="article-body-title" />
          <div className="article-share-button" onClick={shareCurrentArticle}>
            <Icon name="share" hasTheme className="mt-px object-contain h-4.5" />
            <span className="share-button-text">{t`features_help_center_support_article_index_5101083`}</span>
          </div>
        </div>
        <div className="article-content-right">
          <div className="content-right-header">
            <Icon name="latest_articles" className="header-icon" />
            <label>{t`features_announcement_article_index_5101255`}</label>
          </div>
          <div className="content-right-body">
            {noticeArticle?.map(v => {
              return (
                <div key={v?.id} className="new-article-text" onClick={() => onArticleChange(v)}>
                  <div className="new-article-content">{v?.name}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <FullScreenLoading mask isShow={loading} className="fixed" />
    </div>
  )
}

export default HelpCenterSupportSearch
