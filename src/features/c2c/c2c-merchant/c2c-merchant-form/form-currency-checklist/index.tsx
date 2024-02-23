import { getAreaList } from '@/apis/c2c/common'
import Icon from '@/components/icon'
import NavBar from '@/components/navbar'
import { C2CAreaListResp } from '@/typings/api/c2c/common'
import { t } from '@lingui/macro'
import { Button, Checkbox, Popup, Search } from 'react-vant'
import { useEffect, useState } from 'react'
import LazyImage from '@/components/lazy-image'
import { oss_area_code_image_domain_address } from '@/constants/oss'
import styles from './index.module.css'

function FormCurrencyChecklist({ list, setList }) {
  const [visible, setvisible] = useState(false)
  const [searchValue, setsearchValue] = useState<string>('')
  const [data, setdata] = useState<C2CAreaListResp[]>([])
  const [areaList, setareaList] = useState<C2CAreaListResp[]>([])
  const [checked, setchecked] = useState<Array<any>>(list)

  useEffect(() => {
    getAreaList({}).then(res => {
      setdata(res.data || [])
      setareaList(res.data || [])
    })
  }, [])

  useEffect(() => {
    const filter = areaList.filter(each => each?.currencyName?.toLowerCase().includes(searchValue.toLowerCase()))
    setdata(filter)
  }, [searchValue])

  useEffect(() => {
    setchecked(list)
  }, [list])

  return (
    <>
      <Icon onClick={() => setvisible(true)} name="regsiter_icon_drop" hasTheme />
      <Popup visible={visible} className={styles['currency-popup']}>
        <div>
          <NavBar title={t`features_message_center_index_5101368`} onClickLeft={() => setvisible(false)} />
          <Search
            value={searchValue}
            onChange={setsearchValue}
            placeholder={t`future.funding-history.search-future`}
            shape="round"
            leftIcon={<Icon name="search" hasTheme />}
            clearTrigger="always"
            clearIcon={<Icon name="del_input_box" hasTheme onClick={() => setsearchValue('')} />}
          />
          <Checkbox.Group onChange={setchecked} value={checked}>
            {data.map((each, index) => (
              <Checkbox
                key={index}
                name={each as any}
                shape="square"
                iconRender={({ checked }) =>
                  checked ? (
                    <Icon className="mt-0" name="login_verify_selected" />
                  ) : (
                    <Icon className="mt-0" name="login_verify_unselected" hasTheme />
                  )
                }
              >
                <div className="flex flex-row">
                  <LazyImage
                    className="mr-2"
                    src={`${oss_area_code_image_domain_address}${each.countryAbbreviation}.png`}
                  />
                  <span className="text-text_color_01">{each.currencyName}</span>
                </div>
              </Checkbox>
            ))}
          </Checkbox.Group>
          <Button
            onClick={() => {
              setList(checked)
              setvisible(false)
            }}
            type="primary"
          >
            {t`common.confirm`}
          </Button>
        </div>
      </Popup>
    </>
  )
}

export default FormCurrencyChecklist
