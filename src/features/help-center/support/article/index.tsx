import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import { link } from '@/helper/link'
import NavBar from '@/components/navbar'
import { Notify } from 'react-vant'
import { formatDate } from '@/helper/date'
import { useCreation, useMount } from 'ahooks'
import { useState } from 'react'
import { useHelpCenterStore } from '@/store/help-center'
import { getSupportArticle } from '@/apis/support'
import { handleVideo } from '@/helper/help-center'
import { usePageContext } from '@/hooks/use-page-context'
import HelpCenterHeader from '@/features/help-center/header'
import SupportBreadcrumb from '@/features/help-center/support/component/support-breadcrumb'
import {
  CenterDateType,
  HelpCenterSearchArticle,
  HelpCenterSupportArticle,
  HelpCenterQuestionListHomePage,
} from '@/typings/api/help-center'
import FullScreenLoading from '@/features/user/components/full-screen-loading'
import styles from './index.module.css'

function HelpCenterSupportSearch() {
  const { breadcrumbList, addBreadcrumb } = useHelpCenterStore()
  const pageContext = usePageContext()
  const [loading, setLoading] = useState<boolean>(true)
  const [isImmerseHeader, setIsImmerseHeader] = useState<boolean>(false) // 是否需要隐藏头部和面包屑
  const [article, setArticle] = useState<HelpCenterSearchArticle>()
  const [relatedArticles, setRelatedArticles] = useState<Array<HelpCenterSupportArticle>>([])
  const [menuData, setMenuData] = useState<Array<HelpCenterQuestionListHomePage>>([])
  const [titleName, setTitleName] = useState<string>('')

  const getCurrentArticleList = async id => {
    if (id) {
      setLoading(true)
      const res = await getSupportArticle({ contentId: id })
      const dom = document.querySelector('#article') as HTMLDivElement
      const helpData = res.data?.helpCenterText?.content?.replace(/padding-left: 80px/g, 'padding-left: 40px')
      dom.innerHTML = helpData || ''
      const video = dom.getElementsByTagName('video')
      if (video?.length) {
        const num = Array(video.length).fill(1)
        num.forEach((_, index) => {
          let videoEle = video[index]
          videoEle = handleVideo(videoEle)
        })
      }
      setArticle(res.data?.helpCenterText)
      setMenuData(res.data?.catelogList)
      setRelatedArticles(res.data?.articleList?.slice(0, 5))
    }
  }

  const anyNameFunction = () => {
    const articleId = pageContext?.routeParams?.id
    getCurrentArticleList(articleId)
  }

  const initialHandleMenu = (data, id) => {
    let arrRes = []
    let forFn = function (arr, id) {
      arr.forEach(v => {
        let item = v
        if (item.id === id) {
          arrRes.unshift(item as never)
          forFn(data, item.parentId)
        } else {
          if (item.catalogVOList) {
            // 向下查找到 id
            forFn(item.catalogVOList, id)
          }
        }
      })
    }
    forFn(data, id)
    return arrRes
  }

  /** 处理面包屑* */
  const onBreadcrumb = v => {
    addBreadcrumb(v)
  }

  /** 处理面包屑* */
  const onChangeBread = data => {
    if (data?.length >= 2) {
      const parentPath = `/support/navigation?subMenuId=${data[0]?.id}`
      const currentPath = `/support/navigation?subMenuId=${data[1]?.id}`
      const newMenuData = [
        { ...data[0], path: parentPath },
        { ...data[1], path: currentPath },
      ]
      onBreadcrumb(newMenuData)
    }
  }

  const getMenuId = () => {
    const id = pageContext?.routeParams?.id
    const host = pageContext?.host
    const locale = pageContext?.locale
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

  /** 搜索* */
  const onChangeSearch = v => {
    v && link(`/support/search?type=1&searchName=${v}#1`)
  }

  const onArticleChange = v => {
    if (isImmerseHeader) {
      return link(`/support/article/${v.id}?isImmerse=true`, { keepScrollPosition: true })
    }
    link(`/support/article/${v.id}`, { keepScrollPosition: true })
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

  useCreation(() => {
    anyNameFunction()
  }, [pageContext.urlOriginal])

  useCreation(() => {
    if (menuData?.length) {
      const { id } = getMenuId()
      const data = initialHandleMenu(menuData, id) as any
      setLoading(false)
      onChangeBread(data)
    }
  }, [menuData])

  useMount(() => {
    const name = breadcrumbList?.[breadcrumbList?.length - 1]?.name
    setTitleName(name)
    handleImmerseMode()
  })

  return (
    <div className={styles.scoped}>
      <div className="help-center-support-article">
        <NavBar
          title={titleName || t`user.personal_center_06`}
          left={<Icon name="back" hasTheme className="header-back" />}
        />
        {!isImmerseHeader && (
          <HelpCenterHeader onSearch={onChangeSearch} placeholder={t`features_help_center_support_index_5101232`} />
        )}
        <div className="article-content-body">
          {!isImmerseHeader && <SupportBreadcrumb data={breadcrumbList} type={'1'} />}
          <div className="article-body-header">{article?.name}</div>
          <div className="article-body-time">{formatDate(article?.pushTimeStramp, CenterDateType.MinDate)}</div>
          <div id="article" className="article-body-title" />
          <div className="article-share-button" onClick={shareCurrentArticle}>
            <Icon name="share" hasTheme className="mt-px object-contain h-4.5" />
            <span className="share-button-text">{t`features_help_center_support_article_index_5101083`}</span>
          </div>
        </div>
        <div className="article-content-right">
          <div className="content-right-header">
            <Icon name="latest_articles" className="header-icon" />
            <label>{t`features_help_center_support_article_index_5101084`}</label>
          </div>
          <div className="content-right-body">
            {relatedArticles?.map(v => {
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
