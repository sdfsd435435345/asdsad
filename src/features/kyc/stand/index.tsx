import React, { useState, useEffect } from 'react'
import { useMount } from 'react-use'
import NavBar from '@/components/navbar'
import {
  Form,
  Button,
  Input,
  Flex,
  DatetimePicker,
  Field,
  Cell,
  Image,
  Toast,
  ActionSheet,
  Checkbox,
  Dialog,
} from 'react-vant'
import { MemberMemberAreaType } from '@/typings/user'
import UserSearchArea from '@/features/user/common/search-area'
import { oss_area_code_image_domain_address } from '@/constants/oss'
import { UserSelectAreaTypeEnum, UserEnabledStateTypeEnum } from '@/constants/user'
import { getKycData, setKycData } from '@/helper/cache'
import { t } from '@lingui/macro'
import LazyImage from '@/components/lazy-image'
import Icon from '@/components/icon'
import { link } from '@/helper/link'
import { min } from 'lodash'
import { DefaultRadioIconRender, createCheckboxIconRender } from '@/components/radio/icon-render'
import styles from './index.module.css'

// 证件号码只能由字母和数字构成
const documentIdRegex = /^[a-zA-Z0-9/]*$/

export default function KycPersonStand() {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    country: '',
    middleName: '',
    birthDay: '',
    birthDayNum: '',
    certValidDateStartNum: '',
    certValidDateEndNum: '',
    certValidDateStart: '',
    certValidDateEnd: '',
    certIsPermanent: '',
    certType: '',
    certNumber: '',
    certTypeName: '',
  })

  const [isEnble, setIsEnble] = useState<boolean>(false)
  const [area, setArea] = useState<MemberMemberAreaType>()
  const [selectArea, setSelectArea] = useState<boolean>(false)
  const [isCheck, setIsCheck] = useState(false)
  const [isOver, setIsOver] = useState(false)
  // 读取缓存内容
  const kycData = getKycData()

  // 生日 日期范围值
  const birthDay_min = new Date(1970, 0, 1)
  const [birthMax, setBirthMax] = useState<any>(new Date())

  // 证件有效期 范围值
  const [cardmin, setCardMin] = useState<any>(new Date(new Date().getFullYear() / 1 - 40, 0, 1))
  const card_max = new Date()

  const card2_min = new Date()
  const card2_max = new Date(new Date().getFullYear() / 1 + 40, 0, 1)

  // 选中图片

  const [form] = Form.useForm()
  // 表单完整验证
  const inputArray = (val, name) => {
    // 中文输入时，safari onChange 会把输入的英文字母重复带入，导致过滤方式不可以采用。
    if (name === 'certNumber') {
      if (!documentIdRegex.test(val)) return
      formData.certNumber = val
      setFormData({ ...formData, certNumber: val })
    } else if (name) {
      formData[name] = val
    }
    if (
      formData.certNumber !== '' &&
      formData.certType !== '' &&
      formData.certValidDateEnd !== '' &&
      formData.certValidDateStart !== '' &&
      formData.birthDay !== '' &&
      formData.firstName !== '' &&
      formData.lastName !== ''
    ) {
      setIsOver(true)
    } else {
      setIsOver(false)
    }
  }

  // 地区选择判断
  const handleSelectArea = async (v: MemberMemberAreaType) => {
    if (v.codeVal !== kycData.area.codeVal) {
      Dialog.confirm({
        message: (
          <div>
            <div className="text-left text-text_color_02 text-sm">
              {t`features_kyc_stand_index_5101159`}
              {v.codeKey}
              {t`features_kyc_stand_index_5101160`}
            </div>
            <div className="text-brand_color text-xs mt-2 text-left">{t`features_kyc_stand_index_5101161`}</div>
          </div>
        ),
        onCancel: () => {
          setArea(kycData.area)
        },
      })
    }
    if (v.enableInd === UserEnabledStateTypeEnum.enable) setIsEnble(true)
    setArea(v)
    setSelectArea(false)
    inputArray(false, false)
  }

  // 内容初始化
  const init = async () => {
    if (!kycData) {
      link('/kyc')
    }
    setArea(kycData.area)
    setFormData({ ...formData, ...kycData })
    if (kycData.certIsPermanent === '1') {
      setIsCheck(true)
    } else {
      setIsCheck(false)
    }
    if (
      kycData.certNumber !== '' &&
      kycData.certType !== '' &&
      kycData.certValidDateEnd !== '' &&
      kycData.certValidDateStart !== '' &&
      kycData.birthDay !== '' &&
      kycData.firstName !== '' &&
      kycData.lastName !== ''
    ) {
      setIsOver(true)
    } else {
      setIsOver(false)
    }
    if (kycData.birthDay !== '') {
      let arr = kycData.birthDay.split('-').map(Number)
      setCardMin(new Date(arr[0], arr[1] - 1, arr[2]))
    }
    setIsEnble(true)
  }
  useMount(init)

  // 时间格式化
  function confirmPicker(val) {
    if (!val) {
      return ''
    }
    let year = val.getFullYear()
    let month = val.getMonth() + 1
    let day = val.getDate()
    if (month >= 1 && month <= 9) {
      month = `0${month}`
    }
    if (day >= 1 && day <= 9) {
      day = `0${day}`
    }
    let time = `${year}-${month}-${day}`
    return time
  }

  function selectTime(val) {
    formData.birthDay = confirmPicker(val)

    let arr = formData.birthDay.split('-').map(Number)
    setCardMin(new Date(arr[0], arr[1] - 1, arr[2]))
    inputArray(false, false)
  }
  function selectTime2(val) {
    formData.certValidDateStart = confirmPicker(val)
    let arr = formData.certValidDateStart.split('-').map(Number)
    setBirthMax(new Date(arr[0], arr[1] - 1, arr[2]))
    if (formData.certValidDateStart > formData.birthDay) {
      formData.birthDay = formData.certValidDateStart
      inputArray(formData.birthDay, 'birthDay')
    }
    inputArray(false, false)
  }
  function selectTime3(val) {
    formData.certValidDateEnd = confirmPicker(val)
    inputArray(false, false)
  }

  // ID 选择
  const actions = [
    { id: 3, name: t`features_kyc_stand_index_5101153` },
    { id: 1, name: t`features_kyc_stand_index_5101154` },
    { id: 2, name: t`features_kyc_stand_index_5101155` },
  ]
  const [visible, setVisible] = useState(-1)
  const onCancel = () => setVisible(-1)

  const onSelectIdType = async e => {
    formData.certTypeName = e.name
    formData.certType = e.id
    setVisible(-1)
    inputArray(false, false)
  }

  // 下一步
  const onFinish = async values => {
    if (!isOver) {
      return false
    }

    if (formData.firstName.replace(/\s+/g, '').length === 0) {
      Toast(t`features_kyc_stand_index_5101274`)
      return false
    }

    if (formData.lastName.replace(/\s+/g, '').length === 0) {
      Toast(t`features_kyc_stand_index_5101275`)
      return false
    }

    let data = {
      lastName: formData.lastName.replace(/\s+/g, ''),
      firstName: formData.firstName.replace(/\s+/g, ''),
      country: formData.country,
      middleName: formData.middleName.replace(/\s+/g, ''),
      birthDay: `${formData.birthDay}`,
      certValidDateStart: `${formData.certValidDateStart}`,
      certValidDateEnd: `${formData.certValidDateEnd}`,
      certIsPermanent: isCheck ? '1' : '2',
      certType: formData.certType,
      certNumber: formData.certNumber,
      certTypeName: formData.certTypeName,
      area,
    }
    setKycData(data)
    link('/kyc/up-load')
  }

  return (
    <div className={`kyc-stand ${styles.scoped}`}>
      <NavBar
        title={
          <div>
            <img src="" alt="" />
            <span>{t`features_kyc_up_load_index_5101120`}</span>
          </div>
        }
      />
      <div className="kyc-stand-wrap">
        <div className="title">{t`features_kyc_stand_index_5101156`}</div>
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          footer={
            <div>
              <Button nativeType="submit" type="primary" className={isOver ? 'success_btn' : 'fail_btn'} block>
                {t`user.field.reuse_23`}
              </Button>
            </div>
          }
        >
          <Flex justify="center" align="center">
            <Flex.Item span={12} className="pr-2">
              <Form.Item name="firstName" label={t`features_kyc_stand_index_5101142`} initialValue={kycData?.firstName}>
                <Field
                  maxLength={100}
                  placeholder={t`features_kyc_stand_index_5101143`}
                  value={formData.firstName}
                  onChange={v => inputArray(v, 'firstName')}
                />
              </Form.Item>
            </Flex.Item>
            <Flex.Item span={12} className="pl-2">
              <Form.Item name="lastName" label={t`features_kyc_stand_index_5101144`} initialValue={kycData?.lastName}>
                <Input
                  maxLength={100}
                  value={formData.lastName}
                  onChange={v => inputArray(v, 'lastName')}
                  placeholder={t`features_kyc_stand_index_5101157`}
                />
              </Form.Item>
            </Flex.Item>
          </Flex>
          <Flex justify="center" align="center">
            <Flex.Item span={12} className="pr-2">
              <Form.Item
                name="middleName"
                label={t`features_kyc_stand_index_5101145`}
                initialValue={kycData?.middleName}
              >
                <Input
                  value={formData.middleName}
                  maxLength={100}
                  onChange={v => inputArray(v, 'middleName')}
                  placeholder={t`features_kyc_stand_index_5101158`}
                />
              </Form.Item>
            </Flex.Item>
            <Flex.Item span={12} className="pl-2">
              <Form.Item name="birthDay" label={t`features_kyc_stand_index_5101146`}>
                <DatetimePicker
                  popup={{
                    round: true,
                  }}
                  type="date"
                  title={t`features_kyc_stand_index_5101147`}
                  minDate={birthDay_min}
                  maxDate={birthMax}
                  value={new Date()}
                  onConfirm={selectTime}
                >
                  {(val, _, actions) => {
                    return (
                      <Field
                        readOnly
                        clickable
                        value={formData.birthDay}
                        placeholder={t`components_common_date_picker_date_picker_modal_510248`}
                        onClick={() => actions.open()}
                      />
                    )
                  }}
                </DatetimePicker>
                <Icon name="icon_date_picker_white" className="absolute right-4" />
              </Form.Item>
            </Flex.Item>
          </Flex>
          <Form.Item name="certType" label={t`features_kyc_stand_index_5101148`} shouldUpdate>
            <Field
              readOnly
              clickable
              className="p-0"
              value={formData.certTypeName}
              placeholder={t`features_kyc_stand_index_5101149`}
              onClick={() => setVisible(3)}
            />
            <Icon name="regsiter_icon_drop" hasTheme className="absolute right-4" />
          </Form.Item>
          <div className="checkBox">
            <Checkbox
              iconSize="16px"
              shape="square"
              checked={isCheck}
              iconRender={createCheckboxIconRender()}
              onChange={val => {
                setIsCheck(val)
                if (!val) {
                  formData.certValidDateEnd = ''
                } else {
                  formData.certValidDateEnd = '--'
                }

                inputArray(false, false)
              }}
            >
              {t`features_kyc_stand_index_5101162`}
            </Checkbox>
          </div>
          <Form.Item name="duration" label={t`features_kyc_stand_index_5101150`} className="idTime">
            <span className="center">~</span>
            <Flex justify="center" align="center">
              <Flex.Item span={12} className="pr-2">
                <Form.Item name="certValidDateStart">
                  <DatetimePicker
                    popup={{
                      round: true,
                    }}
                    type="date"
                    title={t`features_kyc_stand_index_5101147`}
                    minDate={cardmin}
                    maxDate={card_max}
                    value={new Date()}
                    onConfirm={selectTime2}
                  >
                    {(val, _, actions) => {
                      return (
                        <Field
                          readOnly
                          clickable
                          value={formData.certValidDateStart}
                          placeholder={t`components_common_date_picker_date_picker_modal_510248`}
                          onClick={() => actions.open()}
                        />
                      )
                    }}
                  </DatetimePicker>
                  <Icon name="icon_date_picker_white" className="absolute right-4" />
                </Form.Item>
              </Flex.Item>
              <Flex.Item span={12} className="pl-2">
                <Form.Item name="certValidDateEnd">
                  <DatetimePicker
                    popup={{
                      round: true,
                    }}
                    type="date"
                    title={t`features_kyc_stand_index_5101147`}
                    minDate={card2_min}
                    maxDate={card2_max}
                    value={new Date()}
                    onConfirm={selectTime3}
                  >
                    {(val, _, actions) => {
                      return (
                        <Field
                          readOnly
                          clickable
                          className={isCheck ? 'isDisabled' : ''}
                          value={formData.certValidDateEnd}
                          placeholder={isCheck ? '--' : t`components_common_date_picker_date_picker_modal_510248`}
                          onClick={() => !isCheck && actions.open()}
                        />
                      )
                    }}
                  </DatetimePicker>
                  <Icon name="icon_date_picker_white" className="absolute right-4" />
                </Form.Item>
              </Flex.Item>
            </Flex>
          </Form.Item>
          <Form.Item label={t`features_kyc_stand_index_5101151`} initialValue={kycData?.certNumber}>
            <Input
              maxLength={100}
              placeholder={t`features_kyc_stand_index_5101152`}
              value={formData.certNumber}
              onChange={v => inputArray(v, 'certNumber')}
            />
          </Form.Item>
        </Form>
      </div>
      <UserSearchArea
        visible={selectArea}
        checkedValue={area?.codeVal}
        type={UserSelectAreaTypeEnum.area}
        placeholderText={t`user.field.reuse_25`}
        selectArea={handleSelectArea as unknown as any}
        onClose={() => setSelectArea(false)}
      />

      <ActionSheet
        visible={visible === 3}
        onCancel={onCancel}
        description={t`features_kyc_stand_index_5101148`}
        actions={actions}
        onSelect={onSelectIdType}
        cancelText={t`assets.financial-record.cancel`}
      />
    </div>
  )
}
