import { useState } from 'react'
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import { link } from '@/helper/link'
import NavBar from '@/components/navbar'
import { useCreation } from 'ahooks'
import { Collapse, Toast, Image } from 'react-vant'
import { useHelpCenterStore } from '@/store/help-center'
import { getSupportMenu } from '@/apis/support'
import NoDataImage from '@/components/no-data-image'
import { usePageContext } from '@/hooks/use-page-context'
import HelpCenterHeader from '@/features/help-center/header'
import { HelpCenterSupportMenu } from '@/typings/api/help-center'
import SupportBreadcrumb from '@/features/help-center/support/component/support-breadcrumb'
import styles from './index.module.css'

const CollapseItem = Collapse.Item

function HelpCenterSupportNavigation() {
  const userState = useHelpCenterStore()
  const pageContext = usePageContext()
  const [loading, setLoading] = useState<boolean>(true)
  const [openKeys, setOpenKeys] = useState<string>('')
  const [subItemKey, setSubItemKey] = useState<string>('')
  const [supportMenu, setSupportMenu] = useState<Array<HelpCenterSupportMenu>>([])

  const getCurrentArticleList = async () => {
    const res = await getSupportMenu({})
    setSupportMenu(res.data?.dialogList)
  }

  /** 根据当前 id 向上查找菜单* */
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

  const getMenuId = () => {
    const menu = pageContext?.urlParsed
    const subMenuId = menu.search?.subMenuId
    let path = pageContext?.path
    return { path, subMenuId }
  }

  /** 搜索* */
  const onChangeSearch = v => {
    v && link(`/support/search?type=1&searchName=${v}#1`)
  }

  /** 处理面包屑* */
  const onBreadcrumb = v => {
    userState.addBreadcrumb(v)
  }

  /** 处理面包屑* */
  const onChangeBread = data => {
    const { path } = getMenuId()
    if (data?.length >= 2) {
      const parentPath = `/support/navigation?subMenuId=${data[0]?.id}`
      const newMenuData = [
        { ...data[0], path: parentPath },
        { ...data[1], path },
      ]
      onBreadcrumb(newMenuData)
    } else {
      onBreadcrumb([{ ...data[0], path }])
    }
  }

  /** 一级菜单点击* */
  const onCollapseChange = v => {
    v && setOpenKeys(v)
    v && link(`/support/navigation?subMenuId=${v}`, { keepScrollPosition: true })
  }

  /** 二级菜单点击* */
  const onCollapseItemChange = v => {
    v && setSubItemKey(v)
    v && link(`/support/navigation?subMenuId=${v}`, { keepScrollPosition: true })
  }

  /** 二级菜单文章点击* */
  const onArticleChange = v => {
    v && link(`/support/article/${v.id}`, { keepScrollPosition: true })
  }

  useCreation(() => {
    getCurrentArticleList()
  }, [pageContext.urlOriginal])

  useCreation(() => {
    loading
      ? Toast.loading({
          duration: 0,
          message: t`features_assets_coin_details_coin_details_510157`,
        })
      : Toast.clear()
  }, [loading])

  useCreation(() => {
    if (supportMenu?.length) {
      const { subMenuId } = getMenuId()
      const menuData = initialHandleMenu(supportMenu, subMenuId) as any
      if (menuData?.length >= 2) {
        setOpenKeys(menuData[0]?.id)
        setSubItemKey(subMenuId)
      } else {
        setOpenKeys(menuData[0]?.id)
        setSubItemKey('')
      }
      setLoading(false)
      onChangeBread(menuData)
    }
  }, [supportMenu])

  return (
    <div className={styles.scoped}>
      <div className="navigation-content">
        <NavBar title={t`user.personal_center_06`} left={<Icon name="back" hasTheme className="header-back" />} />
        <HelpCenterHeader onSearch={onChangeSearch} placeholder={t`features_help_center_support_index_5101232`} />
        <div className="navigation-content-body">
          <div className="navigation-breadcrumb">
            <SupportBreadcrumb data={userState.breadcrumbList} type={'1'} />
          </div>
          <div className="navigation-menu">
            {supportMenu?.length ? (
              <Collapse
                accordion
                border={false}
                key={openKeys}
                initExpanded={openKeys}
                onChange={onCollapseChange}
                className="support-collapse-swagger"
              >
                {supportMenu?.map(v => {
                  return (
                    <CollapseItem
                      key={v.id}
                      name={v.id}
                      title={v.name}
                      className={`${openKeys === v.id ? 'select-item' : ''} ${v.catalogVOList ? '' : 'hidden-icon'}`}
                      icon={<Image src={v.logo as string} className="support-lazy-img" alt="" />}
                    >
                      <Collapse
                        accordion
                        border={false}
                        key={subItemKey}
                        initExpanded={subItemKey}
                        onChange={onCollapseItemChange}
                        className="support-collapse-swagger-item"
                      >
                        {v?.catalogVOList?.map(item => {
                          return (
                            <CollapseItem
                              key={item.id}
                              name={item.id}
                              title={item.name}
                              className={`${subItemKey === item.id ? 'select-item' : ''} ${
                                item.catalogVOList ? '' : 'hidden-icon'
                              }`}
                            >
                              {item?.catalogVOList?.map(params => {
                                return (
                                  <div
                                    className="collapse-content-item"
                                    key={params.id}
                                    onClick={() => onArticleChange(params)}
                                  >
                                    {params.name}
                                  </div>
                                )
                              })}
                            </CollapseItem>
                          )
                        })}
                      </Collapse>
                    </CollapseItem>
                  )
                })}
              </Collapse>
            ) : loading ? null : (
              <NoDataImage className="mt-8" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpCenterSupportNavigation
