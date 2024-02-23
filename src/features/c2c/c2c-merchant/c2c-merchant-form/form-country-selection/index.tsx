import { getComCodeCountry } from '@/apis/common'
import Icon from '@/components/icon'
import NavBar from '@/components/navbar'
import { SearchInput } from '@/features/assets/common/search-input'
import { YapiGetV1OpenapiComCodeGetCodeDetailListData } from '@/typings/yapi/OpenapiComCodeGetCodeDetailListV1GetApi'
import { t } from '@lingui/macro'
import { Cell, IndexBar, IndexBarInstance, Popup, Toast } from 'react-vant'
import { useDebounce } from 'ahooks'
import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import LazyImage from '@/components/lazy-image'
import { oss_area_code_image_domain_address } from '@/constants/oss'
import { Field } from '@/components/field'
import styles from './index.module.css'

type TFormCountrySelection = {
  onChange?: (v: object) => void
}

function FormCountrySelection({ onChange }: TFormCountrySelection) {
  const [formValues, setformValues] = useState({})
  const [visible, setvisible] = useState(false)
  const [searchKey, setsearchKey] = useState('')
  const indexBarRef = useRef<IndexBarInstance>(null)
  const indexRef = useRef<any>(null)
  const [activeIndex, setActiveIndex] = useState<string | number>('')
  const [countryList, setcountryList] = useState<YapiGetV1OpenapiComCodeGetCodeDetailListData[]>([])
  const [selected, setselected] = useState<YapiGetV1OpenapiComCodeGetCodeDetailListData>()

  /**
   * 获取全部主币列表
   */
  const onLoadCountryList = async () => {
    Toast.loading({ duration: 0, message: t`features_assets_coin_details_coin_details_510157` })
    const res = await getComCodeCountry({})
    const { isOk, data: rList = [], message = '' } = res || {}

    if (!isOk) {
      Toast(message)
    }

    setcountryList(rList)

    Toast.clear()
  }

  useEffect(() => {
    if (visible) {
      onLoadCountryList()
    }
  }, [visible])

  useEffect(() => {
    onChange?.(formValues)
  }, [formValues])

  const indexList = [] as any
  const charCodeOfA = 'A'.charCodeAt(0)
  for (let i = 0; i < 26; i += 1) {
    indexList.push(String.fromCharCode(charCodeOfA + i))
  }
  const debouncedSearchKey = useDebounce(searchKey)

  const onRenderListItem = row => {
    let isAvailable = true
    return (
      <div key={row.codeVal}>
        <Cell
          onClick={() => {
            setselected(row)
            setformValues(prev => {
              return { ...prev, region: row.codeKey }
            })
            setvisible(false)
          }}
          title={
            <div className="country-item">
              <LazyImage
                whetherPlaceholdImg={false}
                src={`${oss_area_code_image_domain_address}${row.remark}.png`}
                className="mr-1"
              />
              <div className={classNames({ active: selected?.codeVal === row.codeVal })}>{row.codeKey}</div>

              {!isAvailable && <div className="state">{t`assets.common.coin-list.paused`}</div>}
            </div>
          }
        />
      </div>
    )
  }

  const searchList = countryList?.filter((item: any) => {
    const ignoreCaseKey = debouncedSearchKey.toUpperCase()
    const { codeKey = '' } = item || {}
    return codeKey && codeKey.toUpperCase().includes(ignoreCaseKey)
  })

  return (
    <>
      <div className={styles.scoped}>
        <Field
          readOnly
          placeholder={t`features_user_register_residence_index_5101093`}
          value={(selected?.codeKey || '') as string}
          suffix={
            <span className="flex items-center" onClick={() => setvisible(true)}>
              <Icon name="regsiter_icon_drop" hasTheme />
            </span>
          }
        />
        {selected && (
          <>
            <Field
              maxLength={50}
              placeholder={t`features_c2c_c2c_merchant_c2c_merchant_form_form_country_selection_index_n5fn4znwdi0r4qcxouu_x`}
              onChange={v =>
                setformValues(prev => {
                  return { ...prev, province: v }
                })
              }
            />
            <Field
              type="textarea"
              maxLength={100}
              showWordLimit
              placeholder={t`features_c2c_c2c_merchant_c2c_merchant_form_form_country_selection_index_ag9fu619ysfvr1fgj-six`}
              onChange={v =>
                setformValues(prev => {
                  return { ...prev, address: v }
                })
              }
            />
          </>
        )}
      </div>
      <Popup
        className={styles['form-country-popup']}
        visible={visible}
        duration={1}
        destroyOnClose
        onClosed={() => setsearchKey('')}
      >
        <NavBar title={t`features_user_register_residence_index_5101093`} onClickLeft={() => setvisible(false)} />
        <SearchInput
          placeholder={t`features_c2c_c2c_merchant_c2c_merchant_form_form_country_selection_index_h4lp8xt_jnp7phv-rjym_`}
          value={searchKey}
          onChange={setsearchKey}
        />
        <IndexBar
          ref={indexBarRef}
          stickyOffsetTop={80}
          sticky={false}
          indexList={searchKey ? [] : indexList}
          itemRender={item => {
            return (
              <div
                onClick={() => {
                  indexRef.current = item
                  setActiveIndex(item)
                  indexBarRef.current?.scrollTo(item)
                }}
                className={`index-bar ${activeIndex === item && 'index-active'}`}
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
          {indexList.map((val: string) => {
            // 过滤对应索引的数据
            const filterList = searchList.filter((listItem: any) => {
              return listItem.remark?.slice(0, 1).toUpperCase() === val
            })

            return (
              <div key={val}>
                <IndexBar.Anchor index={val} />
                {filterList.map(item => {
                  return onRenderListItem(item)
                })}
              </div>
            )
          })}
        </IndexBar>
      </Popup>
    </>
  )
}

export default FormCountrySelection
