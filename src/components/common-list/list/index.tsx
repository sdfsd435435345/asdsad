/**
 * 列表（包含下拉刷新、上拉加载更多、空数据展示、列表底部无更多数据展示）
 */
import { t } from '@lingui/macro'
import { ReactNode } from 'react'
import cn from 'classnames'
import { PullRefresh, List } from 'react-vant'
import PullRefreshAnimation from '@/components/pull-refresh-animation'
import { useMemoizedFn, useRequest } from 'ahooks'
import CommonListEmpty from '../list-empty'
import styles from '../index.module.css'

interface CommonListProps {
  /** 列表加载是否已完成 */
  finished?: boolean
  /** 是否需要下拉组件 */
  refreshing?: boolean
  /** 列表渲染 */
  listChildren?: ReactNode
  children?: ReactNode
  /** 下拉组件高度 */
  headHeight?: number
  className?: string
  /** 是否展示空数据组件 */
  showEmpty?: boolean
  /** 下拉刷新 */
  onRefreshing?: () => Promise<void> | void
  /** 加载更多 */
  onLoadMore?: () => Promise<void>
  onlyRefresh?: boolean
  /** 空数据状态图片 */
  emptyImg?: string
  emptyClassName?: string
  /** 空数据状态文字 */
  emptyText?: string | JSX.Element
  /** 加载完成后的提示文案 */
  finishedText?: ReactNode
}

function CommonList(props: CommonListProps) {
  const {
    finished,
    refreshing,
    headHeight,
    showEmpty,
    className,
    onlyRefresh,
    onLoadMore: propsOnloadMore = async () => {},
    listChildren,
    children,
    onRefreshing,
    emptyImg,
    emptyText,
    finishedText,
  } = props
  // 有 bug，所以添加一层阻碍
  const { runAsync: runLoad, loading: loadMoreLoading } = useRequest(propsOnloadMore, {
    manual: true,
  })
  const onLoadMore = useMemoizedFn(async () => {
    if (loadMoreLoading) {
      return
    }
    return runLoad()
  })

  /** 列表 */
  const listView = onlyRefresh ? (
    children || listChildren
  ) : (
    <List
      onLoad={onLoadMore}
      finished={finished}
      offset={10}
      finishedText={showEmpty ? '' : finishedText || t`components/common-list/list-footer/index-0`}
    >
      <CommonListEmpty
        hidden={!showEmpty || !finished}
        className={props.emptyClassName}
        imageName={emptyImg}
        text={emptyText as string}
      />
      {children || listChildren}
    </List>
  )

  /**
   * 下拉刷新
   */
  const onRefresh = () => {
    const promise = onRefreshing && onRefreshing()
    if (typeof promise === 'object' && (promise as any).then) {
      return promise
    }
    return new Promise(resolve => {
      setTimeout(resolve, 1000)
    })
  }

  return (
    <div className={cn(styles.scoped, className, 'detail-control-height')}>
      <div className="list">
        {refreshing ? (
          <PullRefresh
            style={{ height: '100%' }}
            onRefresh={onRefresh}
            headHeight={headHeight}
            pullingText={() => <PullRefreshAnimation />}
            loosingText={() => <PullRefreshAnimation />}
            loadingText={() => <PullRefreshAnimation />}
          >
            {listView}
          </PullRefresh>
        ) : (
          listView
        )}
      </div>
    </div>
  )
}
export default CommonList
