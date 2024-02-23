import { useEffect, useState, useRef } from 'react'
import { Search, Cell, Image, Popup, IndexBar, IndexBarInstance } from 'react-vant'
import { t } from '@lingui/macro'
import { useMount, useRequest } from 'ahooks'
import NavBar from '@/components/navbar'
import FullScreenLoading from '@/features/user/components/full-screen-loading'
import {
  // getMemberPhoneArea,
  // getMemberPhoneAreaCode,
  getCodeDetailList,
} from '@/apis/common'
import { MemberMemberAreaType } from '@/typings/user'
import { oss_area_code_image_domain_address } from '@/constants/oss'
import { UserSelectAreaTypeEnum, UserEnabledStateTypeEnum } from '@/constants/user'
import { useCommonStore } from '@/store/common'
import Icon from '@/components/icon'
import styles from './index.module.css'

interface UserSearchAreaProps {
  /** 显示隐藏 */
  visible: boolean
  /** 类型 */
  type: string
  /** 已选中的值 */
  checkedValue?: string
  /** 输入框提示文字 */
  placeholderText: string
  /** 结果列表点击回调函数 */
  selectArea(v: MemberMemberAreaType): void
  /** 关闭 */
  onClose?(): void
  navTitle?: string
}

function UserSearchArea({
  visible,
  type,
  checkedValue,
  placeholderText,
  selectArea,
  onClose,
  navTitle,
}: UserSearchAreaProps) {
  const [searchList, setSearchList] = useState<Array<MemberMemberAreaType>>([])
  const [searchValue, setSearchValue] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const cacheList = useRef<Array<MemberMemberAreaType>>([])
  const [activeIndex, setActiveIndex] = useState<string | number>('')
  const indexBarRef = useRef<IndexBarInstance>(null)
  const indexRef = useRef<any>(null)

  const { locale } = useCommonStore()

  const indexList: string[] = []
  const charCodeOfA = 'A'.charCodeAt(0)

  for (let i = 0; i < 26; i += 1) {
    indexList.push(String.fromCharCode(charCodeOfA + i))
  }

  // const searchResult = async values => {
  //   if (type === UserSelectAreaTypeEnum.area) {
  //     const res = await getMemberPhoneArea({ searchParam: values })
  //     if (res.isOk) {
  //       setAreaList(res.data!.detailVOList)
  //     }
  //   } else {
  //     const res = await getMemberPhoneAreaCode({ searchParam: values })
  //     if (res.isOk) {
  //       setAreaList(res.data!.detailVOList)
  //     }
  //   }
  // }

  const searchResult = async () => {
    setLoading(true)
    const res = await getCodeDetailList({ codeVal: 'country_cd', lanType: locale })
    if (res.isOk) {
      cacheList.current = res.data as unknown as any
      setSearchList(res.data as unknown as any)
    }
    setLoading(false)
  }

  const { run } = useRequest(searchResult, {
    debounceWait: 500,
    manual: true,
  })

  useEffect(() => {
    visible && run()
  }, [visible])

  useMount(() => {
    document.documentElement.scrollTop = 0
  })

  const handleChange = (value: string) => {
    if (!value) {
      setSearchValue(value)
      setSearchList(cacheList.current)
      return
    }

    const cacheSearchValue = value.toLocaleLowerCase().trim()
    const list: MemberMemberAreaType[] = []

    setSearchValue(cacheSearchValue)

    cacheList.current.forEach(v => {
      const listValue = `${v.codeKey}${v.codeVal}${v.remark}`.toLocaleLowerCase()
      if (listValue.includes(cacheSearchValue)) list.push(v)
    })

    setSearchList(list)
  }

  const handleSelectArea = (v: MemberMemberAreaType) => {
    // if (v.enableInd === UserEnabledStateTypeEnum.unEnable) {
    //   Toast.info(t`user.search_area_02`)
    //   return
    // }

    selectArea(v)
    setSearchValue('')
    handleChange('')
  }

  const handleClear = () => {
    setSearchValue('')
    handleChange('')
  }

  const handleClose = () => {
    setSearchValue('')
    handleChange('')
    onClose && onClose()
  }

  return (
    <Popup
      visible={visible}
      duration={1}
      overlay={false}
      destroyOnClose
      className={`user-search-area-popup ${styles.scoped}`}
    >
      <div className="search-area-wrap">
        <NavBar
          title={
            navTitle ||
            (type === UserSelectAreaTypeEnum.area
              ? t`features_user_common_search_area_index_5101223`
              : t`user.register.fresidence_03`)
          }
          onClickLeft={handleClose}
        />

        <Search
          value={searchValue}
          onChange={handleChange}
          placeholder={placeholderText}
          shape="round"
          leftIcon={<Icon name="search" hasTheme />}
          clearTrigger="always"
          clearIcon={<Icon name="del_input_box" hasTheme onClick={handleClear} />}
        />

        <div className="data-list">
          {searchList.length > 0 ? (
            <IndexBar
              ref={indexBarRef}
              indexList={searchValue || type === UserSelectAreaTypeEnum.phone ? [] : indexList}
              stickyOffsetTop={80}
              sticky={false}
              itemRender={item => {
                return (
                  <div
                    onClick={() => {
                      indexRef.current = item
                      setActiveIndex(item)
                      indexBarRef.current?.scrollTo(item)
                    }}
                    className={`index-bar ${activeIndex === item ? 'index-active' : ''}`}
                  >
                    {item}
                  </div>
                )
              }}
              onChange={(index: number | string) => {
                setActiveIndex(indexRef.current || index || indexList[0])
                indexRef.current = null
              }}
            >
              {indexList.map((indexItem: string) => {
                const filterList = searchList.filter((listItem: MemberMemberAreaType) => {
                  return listItem.remark?.slice(0, 1).toUpperCase() === indexItem
                })

                return (
                  <div key={indexItem}>
                    <IndexBar.Anchor index={indexItem} />
                    {filterList.map((v: MemberMemberAreaType, index) => (
                      <Cell
                        key={index}
                        onClick={() => handleSelectArea(v)}
                        title={
                          <div
                            className={`name ${v.enableInd === UserEnabledStateTypeEnum.unEnable ? 'off' : ''} ${
                              checkedValue === v.codeVal ? 'checked' : ''
                            }`}
                          >
                            <label>{v.codeKey}</label>
                            {v.enableInd === UserEnabledStateTypeEnum.unEnable && (
                              <div className="enable">
                                <label>{t`user.search_area_01`}</label>
                              </div>
                            )}
                          </div>
                        }
                        value={type === UserSelectAreaTypeEnum.phone ? `+${v.codeVal}` : ''}
                        icon={<Image src={`${oss_area_code_image_domain_address}${v.remark}.png`} />}
                      />
                    ))}
                  </div>
                )
              })}
            </IndexBar>
          ) : (
            <>
              {loading ? (
                <FullScreenLoading isShow />
              ) : (
                <div className="no-result">
                  <Icon name="no_data_icon" hasTheme isRemoteUrl />
                  <label>{t`user.search_area_03`}</label>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Popup>
  )
}

export default UserSearchArea
