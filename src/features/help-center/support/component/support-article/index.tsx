import { ReactNode, useEffect } from 'react'
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import { handleVideo } from '@/helper/help-center'
import NoDataImage from '@/components/no-data-image'
import CommonList from '@/components/common-list/list'
import { formatDate, DateFormatTemplate } from '@/helper/date'
import { HelpCenterArticleListHomePage } from '@/typings/api/help-center'
import styles from './index.module.css'

type SupportArticleType = {
  colNumber?: number
  headerTime?: boolean
  isItemsText?: boolean
  isItemsTime?: boolean
  isItemsMore?: boolean
  finished: boolean
  /** 时间日期* */
  dateFormat?: string
  /** 加载状态* */
  loading?: boolean
  refreshing?: boolean
  isFooterText?: boolean
  currentKey?: string
  lineClamp?: number | string
  data: Array<HelpCenterArticleListHomePage>
  /** 无数据状态* */
  noDataNode?: ReactNode
  moreRender?: (v: HelpCenterArticleListHomePage) => ReactNode
  onLoad?: () => void
  /** 查看更多* */
  onMore?: (v: HelpCenterArticleListHomePage) => void
  /** 查看当前文章详情 * */
  onCheckArticle?: (v: HelpCenterArticleListHomePage) => void
  /** 下拉刷新 * */
  onChangeRefresh?: () => void
}

const SupportArticle = (props: SupportArticleType) => {
  const {
    data,
    finished,
    noDataNode,
    lineClamp = 2,
    moreRender,
    onLoad,
    onMore,
    currentKey,
    onCheckArticle,
    onChangeRefresh,
    colNumber = 2,
    loading = false,
    isItemsText = true,
    isItemsTime = true,
    isItemsMore = true,
    headerTime = false,
    refreshing = true,
    isFooterText = false,
    dateFormat = DateFormatTemplate.default,
  } = props

  const onLoadRefresh = async () => {
    onLoad && onLoad()
  }
  const onRefresh = async () => {
    onChangeRefresh && onChangeRefresh()
  }

  /** 查看更多* */
  const onCheckMore = (e, v) => {
    e.stopPropagation()
    onMore && onMore(v)
  }

  /** 查看当前文章详情* */
  const currentArticle = v => {
    onCheckArticle && onCheckArticle(v)
  }

  useEffect(() => {
    if (data?.length) {
      data.forEach(item => {
        const dom = document.querySelector(`#article${item.id}`) as HTMLDivElement
        dom.innerHTML = currentKey ? item?.[currentKey] || '' : item?.content
        const video = dom.getElementsByTagName('video')
        if (video?.length) {
          const num = Array(video.length).fill(1)
          num.forEach((_, index) => {
            let videoEle = video[index]
            videoEle = handleVideo(videoEle)
          })
        }
      })
    }
  }, [data])
  return (
    <div className={styles.scoped}>
      <div className={`${'support-card-grid'} ${`col-number-${colNumber}`}`}>
        <CommonList
          finished={finished}
          refreshing={refreshing}
          onLoadMore={onLoadRefresh}
          onRefreshing={onRefresh}
          finishedText={isFooterText ? t`components/common-list/list-footer/index-0` : ' '}
          listChildren={
            data?.length
              ? data?.map(v => {
                  return (
                    <div key={v?.id} className="support-card-items">
                      <div className="card-items-header" onClick={() => currentArticle(v)}>
                        <div className="card-items-title" dangerouslySetInnerHTML={{ __html: v.name }} />
                        {headerTime && (
                          <div className="card-items-time">{formatDate(v?.pushTimeStramp as string, dateFormat)}</div>
                        )}
                      </div>
                      {isItemsText && (
                        <div id={`article${v.id}`} className={`card-items-text-${lineClamp} line-clamp-${lineClamp}`} />
                      )}
                      {isItemsTime && (
                        <div className="card-items-times">{formatDate(v?.pushTimeStramp as string, dateFormat)}</div>
                      )}
                      {isItemsMore &&
                        (moreRender ? (
                          moreRender(v)
                        ) : (
                          <div className="card-items-more" onClick={e => onCheckMore(e, v)}>
                            <span className="items-more-text">{t`features_help_center_support_component_support_article_index_5101082`}</span>
                            <Icon name="more" className="items-more-icon" />
                          </div>
                        ))}
                    </div>
                  )
                })
              : loading
              ? null
              : noDataNode || <NoDataImage className="page-footer-img" />
          }
        />
      </div>
    </div>
  )
}
export default SupportArticle
