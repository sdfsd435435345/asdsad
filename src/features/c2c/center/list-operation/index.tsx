import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import NavBar from '@/components/navbar'
import { Tabs, Button, Toast } from 'react-vant'
import { useMount, useCreation, useReactive } from 'ahooks'
import CommonList from '@/components/common-list/list'
import { usePageContext } from '@/hooks/use-page-context'
import LazyImage from '@/components/lazy-image'
import UserPopUp from '@/features/user/components/popup'
import { oss_svg_image_domain_address } from '@/constants/oss'
import UserPopupContent from '@/features/user/components/popup/content'
import { C2cCenterListEnum, C2cCenterMerchantEnum } from '@/constants/c2c/center'
import { C2CListOperationReactiveType } from '@/typings/api/c2c/center'
import FullScreenLoading from '@/features/user/components/full-screen-loading'
import { getFollowList, getBlackList, delBlackList, unFollowUser, addFollowUser } from '@/apis/c2c/center'
import styles from './index.module.css'

function ListOperation() {
  const state = useReactive<C2CListOperationReactiveType>({
    loading: false,
    visible: false,
    finished: false,
    fullLoading: false,
    pageNum: 0,
    currentId: -1,
    tabId: C2cCenterListEnum.attention,
    listData: [],
  })

  const pageContext = usePageContext()
  const tabOperation = [
    { id: C2cCenterListEnum.attention, name: t`features_trade_future_c2c_2225101585` },
    { id: C2cCenterListEnum.blacklist, name: t`features_trade_future_c2c_2225101586` },
  ]

  /** 获取路由数据* */
  const getRouterId = () => {
    const id = pageContext?.routeParams?.id
    return { id }
  }

  /** 下拉刷新* */
  const onRefreshing = () => {
    state.pageNum = 0
    state.finished = false
    state.listData = []
  }

  /** 上滑加载* */
  const onLoadRefresh = async () => {
    !state.finished && (state.pageNum += 1)
    state.finished = true
  }

  /** 切换* */
  const onTabChange = v => {
    state.tabId = v
    state.pageNum = 0
    state.finished = false
    state.listData = []
  }

  /** 移除黑名单或者关注名单* */
  const onRemove = async (params, flag: boolean) => {
    if (flag) {
      const useParams = {
        userIds: [params.uid],
      }
      const request = params.isSelect ? addFollowUser : unFollowUser
      const { data, isOk } = await request(useParams)
      if (isOk && data) {
        Toast.success(
          params.isSelect
            ? t`features_c2c_center_index_8y3l7vmnvp2peqfjghvwn`
            : t`features_c2c_center_index_hzen0jx4tjudw93zaxoc0`
        )
        state.listData.forEach(v => {
          if (v.uid === params.uid) {
            v.isSelect = v.isSelect ? !v.isSelect : true
          }
        })
      }
    } else {
      state.currentId = params?.uid
      state.visible = true
    }
  }

  const onClose = () => {
    state.visible = false
  }
  const onContinue = async () => {
    const ids = { userIds: [state.currentId] }
    const { data, isOk } = await delBlackList(ids)
    if (data && isOk) {
      state.visible = false
      Toast.success({
        message: t`features_trade_future_c2c_2225101587`,
        forbidClick: true,
      })
      const newListData = state.listData.filter(v => v.uid !== state.currentId)
      state.listData = newListData
    }
  }

  /** 获取页面数据* */
  const getListOperation = async (id: string) => {
    const params = {
      pageNum: state.pageNum,
    }
    state.loading = true
    const pathParams = id === C2cCenterListEnum.attention ? getFollowList : getBlackList
    const { data, isOk } = await pathParams(params)
    if (isOk && data?.list.length) {
      const pageData = [...state.listData, ...data?.list]
      state.finished = pageData?.length >= data?.total
      pageData && (state.listData = pageData)
    }
    state.loading = false
    state.fullLoading = false
  }

  useMount(() => {
    state.fullLoading = true
  })

  /** 页面路由发生改变* */
  useCreation(() => {
    const { id } = getRouterId()
    state.tabId = id
    state.listData = []
  }, [pageContext?.urlOriginal])

  /** 获取数据* */
  useCreation(() => {
    state.pageNum && getListOperation(state.tabId)
  }, [state.tabId, state.pageNum])

  return (
    <div className={styles['list-operation-wrap']}>
      <NavBar
        title={
          <Tabs active={state.tabId} onChange={onTabChange}>
            {tabOperation.map(item => (
              <Tabs.TabPane name={item.id} key={item.id} title={item.name} />
            ))}
          </Tabs>
        }
      />
      <CommonList
        refreshing
        finished={state.finished}
        showEmpty={!state.listData?.length && !state.loading}
        onLoadMore={onLoadRefresh}
        onRefreshing={onRefreshing}
        listChildren={state.listData?.map(v => {
          return (
            <div key={v?.uid} className="list-operation-contair">
              <div className="list-operation-left">
                <div className="list-operation-icon">
                  {v?.avatarPath ? (
                    <LazyImage src={v?.avatarPath} round width={30} height={30} />
                  ) : (
                    <Icon name="user_head" hasTheme className="c2c-avatar-header" />
                  )}
                </div>
                <div className="list-operation-text">{v?.nickName || v?.uid}</div>
                {v?.isMerchant === C2cCenterMerchantEnum.yes && (
                  <LazyImage
                    imageType=".png"
                    className="means-details-title-image"
                    src={`${oss_svg_image_domain_address}user_verified`}
                  />
                )}
              </div>
              <div className="list-operation-right">
                {state.tabId === C2cCenterListEnum.attention ? (
                  <Button size="small" onClick={() => onRemove(v, true)}>
                    <span className={!v.isSelect ? 'text-text_color_03' : ''}>
                      {v.isSelect ? t`features_trade_future_c2c_25101572` : t`features_trade_future_c2c_2225101588`}
                    </span>
                  </Button>
                ) : (
                  <Button size="small" onClick={() => onRemove(v, false)}>
                    <span className="text-text_color_03">{t`features_trade_future_c2c_2225101589`}</span>
                  </Button>
                )}
              </div>
            </div>
          )
        })}
      />
      <UserPopUp
        visible={state.visible}
        slotContent={
          <UserPopupContent
            onClose={onClose}
            onContinue={onContinue}
            leftButtonText={t`features_trade_future_c2c_25101579`}
            content={t`features_trade_future_c2c_2225101590`}
          />
        }
        className={styles['list-operation-user-popUp']}
      />
      <FullScreenLoading mask isShow={state.fullLoading || state.loading} />
    </div>
  )
}
export default ListOperation
