import { useState, useRef } from 'react'
import { t } from '@lingui/macro'
import { Toast } from 'react-vant'
import { link } from '@/helper/link'
import Icon from '@/components/icon'
import NavBar from '@/components/navbar'
import LazyImage from '@/components/lazy-image'
import { useMount, useCreation } from 'ahooks'
import { usePageContext } from '@/hooks/use-page-context'
import { oss_svg_image_domain_address } from '@/constants/oss'
import HelpCenterHeader from '@/features/help-center/header'
import { HelpCenterSearchEnum } from '@/constants/trade'
import SupportArticle from '@/features/help-center/support/component/support-article'
import SupportBreadcrumb from '@/features/help-center/support/component/support-breadcrumb'
import { getSupportSearchArticle, getAllSearchArticle } from '@/apis/support'
import { getNoticeCenterSearch } from '@/apis/announcement'
import { CenterDateType } from '@/typings/api/help-center'
import styles from './index.module.css'

enum SearchNumType {
  size = 5,
}

function HelpCenterSearch() {
  const cacheLoad = useRef<boolean>(false) // 防止多次加载

  const pageContext = usePageContext()

  const [page, setPage] = useState<number>(0)
  const [type, setType] = useState<string>('1') // 判断是从帮助还是公共中心
  const [isLoad, setIsLoad] = useState<boolean>(false) // 只在页面初始化，切换按钮，搜索判断组件的加载状态
  const [loading, setLoading] = useState<boolean>(false) // toast 加载状态
  const [finished, setFinished] = useState<boolean>(false) // 上拉刷新状态
  const [searchName, setSearchName] = useState<string>('') // 搜索内容
  const [searchData, setSearchData] = useState<Array<any>>([]) // 搜索的数据
  const [currentButtonId, setCurrentButtonId] = useState<string>(HelpCenterSearchEnum.support) // 当前按钮 id

  /** 按钮数据* */
  const buttonList = [
    { id: HelpCenterSearchEnum.support, title: t`features_help_center_support_index_5101072` },
    { id: HelpCenterSearchEnum.notice, title: t`features_help_center_support_search_index_5101078` },
    { id: HelpCenterSearchEnum.all, title: t`common.all` },
  ]

  /** 不同按钮对应的接口* */
  const urlPath = {
    [HelpCenterSearchEnum.support]: getSupportSearchArticle,
    [HelpCenterSearchEnum.notice]: getNoticeCenterSearch,
    [HelpCenterSearchEnum.all]: getAllSearchArticle,
  }

  const breadcrumbList = [{ name: t`features_help_center_support_search_index_5101093`, id: '-1' }]

  const getMenuId = () => {
    const menu = pageContext?.urlParsed
    const types = menu.search?.type
    const name = menu.search?.searchName
    const searchType = menu?.hash
    const path = pageContext?.path
    return { path, name, searchType, types }
  }

  const getArticeList = async () => {
    const params = {
      page,
      pageSize: SearchNumType.size,
      key: searchName,
    }
    if (cacheLoad.current) return
    cacheLoad.current = true
    setLoading(true)
    const res = await urlPath[currentButtonId](params)
    if (res.isOk && res.data?.rows.length) {
      if (!res.data?.rows?.length) {
        return setFinished(true)
      }
      const pageData = [...searchData, ...res.data?.rows]
      setFinished(pageData?.length >= res.data?.total)
      pageData && setSearchData(pageData)
    }
    setIsLoad(false)
    setLoading(false)
    cacheLoad.current = false
  }

  /** 下拉刷新* */
  const onRefresh = () => {
    setPage(0)
    setIsLoad(true)
    setFinished(false)
    setSearchData([])
  }

  /** 上拉加载* */
  const onLoad = () => {
    setFinished(true)
    !finished && setPage(page + 1)
  }

  /** 点击查看更多 * */
  const onCheckArticle = v => {
    if (v.centerType === HelpCenterSearchEnum.support) {
      link(`/support/article/${v.articleId}`)
    } else {
      link(`/announcement/article/${v?.articleId}`)
    }
  }

  /** 搜索* */
  const onSearchChange = v => {
    const { searchType } = getMenuId()
    if (v) {
      setPage(0)
      setIsLoad(true)
      setSearchData([])
      setSearchName(v)
      setFinished(false)
      link(`/support/search?type=${type}&searchName=${v}#${searchType}`)
    }
  }

  /** 按钮改变* */
  const onChangeButton = v => {
    if (currentButtonId === v.id) return
    setPage(0)
    setIsLoad(true)
    setSearchData([])
    setFinished(false)
    setCurrentButtonId(v.id)
    link(`/support/search?type=${type}&searchName=${searchName}#${v.id}`)
  }

  const userMore = v => {
    if (v.centerType === HelpCenterSearchEnum.support) {
      link(`/support/navigation?subMenuId=${v.topDialogId}`)
    } else {
      link(`/announcement?subMenuId=${v?.parentId}`)
    }
  }

  useMount(() => {
    setIsLoad(true)
  })

  /** 页面路由发生改变* */
  useCreation(() => {
    const { name, searchType, types } = getMenuId()
    setType(types)
    setSearchName(name)
    setCurrentButtonId(searchType)
  }, [pageContext?.urlOriginal])

  useCreation(() => {
    loading
      ? Toast.loading({
          duration: 0,
          forbidClick: true,
          message: t`features_assets_coin_details_coin_details_510157`,
        })
      : Toast.clear()
  }, [loading])

  /** 获取数据* */
  useCreation(() => {
    searchName && page && getArticeList()
  }, [searchName, page, currentButtonId])

  return (
    <section className={styles.scoped}>
      <div className="help-center-support-search-wrap">
        <NavBar
          title={
            type === HelpCenterSearchEnum.support
              ? t`user.personal_center_06`
              : t`features_help_center_support_search_index_5101078`
          }
          left={<Icon name="back" hasTheme className="header-back" />}
        />
        <div className="support-search-header">
          <HelpCenterHeader
            onSearch={onSearchChange}
            searchData={searchName}
            placeholder={
              type === HelpCenterSearchEnum.support
                ? t`features_help_center_support_index_5101232`
                : t`features_announcement_index_5101233`
            }
          />
        </div>
        <div className="support-search-body">
          <div className="support-search-content">
            <SupportBreadcrumb data={breadcrumbList} type={type} />
            <div className="support-search-button">
              {buttonList.map(item => {
                return (
                  <span
                    key={item.id}
                    onClick={() => onChangeButton(item)}
                    className={`search-header-button support-search-text ${
                      currentButtonId === item.id ? 'select-color' : ''
                    }`}
                  >
                    {item.title}
                  </span>
                )
              })}
            </div>
            <SupportArticle
              colNumber={1}
              lineClamp={3}
              data={searchData}
              moreRender={v => {
                return (
                  <div onClick={() => userMore(v)} className={`search-article-button support-search-text`}>
                    <span>{`${v?.higherLeverName} >`}</span>
                  </div>
                )
              }}
              noDataNode={
                <div className="support-no-data">
                  <LazyImage
                    hasTheme
                    imageName={t`features_help_center_support_search_index_5101080`}
                    className="suppor-lazy-image"
                    src={`${oss_svg_image_domain_address}no_data_icon`}
                  />
                  <div
                    className="support-back-button"
                    onClick={() => link(`${type === HelpCenterSearchEnum.support ? '/support' : '/announcement'}`)}
                  >
                    {type === HelpCenterSearchEnum.support
                      ? t`features_help_center_support_search_index_5101081`
                      : t`features_announcement_search_index_5101091`}
                  </div>
                </div>
              }
              loading={isLoad}
              finished={finished}
              onLoad={onLoad}
              key={currentButtonId}
              onChangeRefresh={onRefresh}
              onCheckArticle={onCheckArticle}
              dateFormat={CenterDateType.MinDate}
              isFooterText={!!searchData.length}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HelpCenterSearch
